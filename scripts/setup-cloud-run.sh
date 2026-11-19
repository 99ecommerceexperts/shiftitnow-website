#!/usr/bin/env bash
# One-time Google Cloud setup for .github/workflows/deploy.yml. Safe to re-run: existing resources are kept.
# Run it yourself with an account that owns the Firebase project; nothing in this repo runs it automatically.
# The site needs no database, secret or bucket: blogs and testimonials come from the content API that the
# Price Mirror backend serves (CONTENT_API_URL), so the runtime service account gets no extra roles.
# Usage: scripts/setup-cloud-run.sh
set -euo pipefail

PROJECT_ID=shiftitnow-5cc4b
REGION=us-central1
GITHUB_REPO=99ecommerceexperts/shiftitnow-website
GITHUB_BRANCH=master
REPOSITORY=shiftitnow
RUNTIME_SA=shiftitnow-web@$PROJECT_ID.iam.gserviceaccount.com
DEPLOY_SA=github-deployer@$PROJECT_ID.iam.gserviceaccount.com
POOL=github
PROVIDER=shiftitnow-website

gcloud() { command gcloud --project "$PROJECT_ID" --quiet "$@"; }
exists() { gcloud "$@" >/dev/null 2>&1; }
# New service accounts take a few seconds to become usable in IAM policies.
retry() { for _ in 1 2 3 4 5 6; do "$@" && return; sleep 10; done; "$@"; }

echo "Enabling APIs (Cloud Run needs the project on the Blaze/billing plan)..."
gcloud services enable run.googleapis.com artifactregistry.googleapis.com iamcredentials.googleapis.com sts.googleapis.com

echo "Docker image repository..."
exists artifacts repositories describe "$REPOSITORY" --location "$REGION" \
  || gcloud artifacts repositories create "$REPOSITORY" --location "$REGION" --repository-format docker

echo "Service accounts..."
exists iam service-accounts describe "$RUNTIME_SA" \
  || gcloud iam service-accounts create shiftitnow-web --display-name "ShiftItNow website (Cloud Run)"
exists iam service-accounts describe "$DEPLOY_SA" \
  || gcloud iam service-accounts create github-deployer --display-name "GitHub Actions deployer"

echo "Deployer permissions..."
retry gcloud projects add-iam-policy-binding "$PROJECT_ID" --member "serviceAccount:$DEPLOY_SA" \
  --role roles/run.admin --condition None >/dev/null
retry gcloud artifacts repositories add-iam-policy-binding "$REPOSITORY" --location "$REGION" \
  --member "serviceAccount:$DEPLOY_SA" --role roles/artifactregistry.writer >/dev/null
retry gcloud iam service-accounts add-iam-policy-binding "$RUNTIME_SA" --member "serviceAccount:$DEPLOY_SA" \
  --role roles/iam.serviceAccountUser >/dev/null

# GitHub Actions signs in with a short-lived token (no stored key), and only from the deploy branch of this repository.
echo "GitHub sign-in (Workload Identity Federation)..."
exists iam workload-identity-pools describe "$POOL" --location global \
  || gcloud iam workload-identity-pools create "$POOL" --location global --display-name "GitHub Actions"
exists iam workload-identity-pools providers describe "$PROVIDER" --location global --workload-identity-pool "$POOL" \
  || gcloud iam workload-identity-pools providers create-oidc "$PROVIDER" --location global --workload-identity-pool "$POOL" \
    --issuer-uri https://token.actions.githubusercontent.com \
    --attribute-mapping "google.subject=assertion.sub,attribute.repository=assertion.repository,attribute.ref=assertion.ref" \
    --attribute-condition "assertion.repository=='$GITHUB_REPO' && assertion.ref=='refs/heads/$GITHUB_BRANCH'"
PROJECT_NUMBER=$(gcloud projects describe "$PROJECT_ID" --format 'value(projectNumber)')
POOL_ID=projects/$PROJECT_NUMBER/locations/global/workloadIdentityPools/$POOL
retry gcloud iam service-accounts add-iam-policy-binding "$DEPLOY_SA" --role roles/iam.workloadIdentityUser \
  --member "principalSet://iam.googleapis.com/$POOL_ID/attribute.repository/$GITHUB_REPO" >/dev/null

echo
echo "Done. Add this as a GitHub repository VARIABLE named GCP_WORKLOAD_IDENTITY_PROVIDER"
echo "(Settings > Secrets and variables > Actions > Variables) before merging to $GITHUB_BRANCH:"
echo "  $POOL_ID/providers/$PROVIDER"
echo "The FIREBASE_SERVICE_ACCOUNT_SHIFTITNOW_5CC4B secret used for the Hosting step already exists."
