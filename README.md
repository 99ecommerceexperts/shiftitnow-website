# ShiftItNow website (Next.js)

The ShiftItNow marketing site, converted from static HTML to Next.js 16 / React 19. The original HTML site is kept on the `html-backup` branch.

## How it fits together

- **Pages** live in `app/` as real React components (`components/sections/*`, `components/chrome/*`). The original CSS is reused unchanged from `styles/`, so the look is the same.
- **Blogs and home-page testimonials are not in this repo.** They are managed in the shared admin, which lives in the Price Mirror backend (`https://www.pricemirror.in/admin`; switch the site to ShiftItNow in the top bar). This site reads them from the backend's public, read-only content API (`CONTENT_API_URL`, default `https://www.pricemirror.in/api/public/shiftitnow`). It never connects to a database.
- **Freshness:** a change made in the admin appears on the site within about a minute (measured without the CDN: 48 s home page, 64 s article, 65 s blog list; allow up to about two minutes in production). Articles are generated on first request and refreshed in the background, and API responses are cached for 60 s. Making publishing instant would need the admin to call a revalidation endpoint on this site; that is not built. If the API is unreachable, the home page falls back to the built-in testimonials (`lib/testimonials.js`), the blog list shows a friendly message, and already generated article pages keep being served.
- **`next build` never calls the API**, so builds need no network access or secrets.

```
app/                 routes (pages, blog list + article, sitemap, 404/error)
components/chrome    announcement bar, header, footer, page shell
components/sections  one component per page section
components/pricing   the live migration-price calculator
components/blog      blog card, article parts (tags, author card, prev/next, sidebar)
components/effects   smooth scrolling, reveal/tilt/hero effects, scroll progress
lib/                 content API client, SEO + structured data, pricing plans, presentation defaults
styles/              the original stylesheets
public/              /assets images, robots.txt, StartupRanking verification file
```

## Run it locally

```bash
npm install
npm run dev:mock     # http://localhost:3000, with a local stand-in for the content API (the 17 original articles + 3 testimonials)
npm run dev          # http://localhost:3000, reading the real content API (CONTENT_API_URL)
npm run lint
npm run build && node .next/standalone/server.js   # production build (copy public/ and .next/static next to it, as the Dockerfile does)
```

Copy `.env.example` to `.env.local` to point at another content API (for example a local copy of the Price Mirror backend on `http://localhost:3100/api/public/shiftitnow`). Analytics, session recording and the chat widget only load in production builds.

## Deployment

Same shape as Price Mirror: the Next.js server runs on **Cloud Run** (`Dockerfile`, `output: 'standalone'`) and **Firebase Hosting** serves `public/` from its CDN and forwards everything else to Cloud Run (`firebase.json`). Pushing to `master` runs `.github/workflows/deploy.yml`.

One-time setup (not run automatically):

1. Make sure the Firebase project `shiftitnow-5cc4b` is on the Blaze (billing) plan; Cloud Run requires it.
2. Run `scripts/setup-cloud-run.sh` (needs an owner account). It creates the image repository, the service accounts and the keyless GitHub sign-in, and prints the value for the `GCP_WORKLOAD_IDENTITY_PROVIDER` **repository variable** (Settings > Secrets and variables > Actions > Variables). Add it before merging to `master`.
3. The `FIREBASE_SERVICE_ACCOUNT_SHIFTITNOW_5CC4B` secret used for the Hosting step already exists.

Notes: Cloud Run scales to zero, so the first request after an idle period is slower; add `--min-instances 1` to the deploy step if that matters. `max-instances` is 3.

## Things that changed from the static site on purpose

- Every old URL still works (`/page.html`, the old `/blog` landing page, the legacy Wix URL); redirects live in `next.config.mjs`. Unknown article URLs are now real 404s instead of showing the 2026 guide.
- Canonical URLs, absolute Open Graph image URLs and Twitter tags were added to every page; `sitemap.xml` is generated and includes new articles automatically.
- Articles get `BlogPosting` structured data, and `FAQPage` data is derived from the FAQ section of each article (the old hand-written FAQ data was missing or invalid on 6 articles and worded differently from the visible answers on 5).
- The platform picker in the pricing calculator now shows the chosen platform's icon (it always showed WooCommerce's before).
- Google Tag Manager, Google Analytics, Microsoft Clarity and the Crisp chat widget load only in production builds, so local development no longer pollutes your analytics.
- The OmniDimension chat widget, which was already commented out on every page, was not carried over.

## Per-article presentation copy

The 17 original articles had hand-written extras that have no field in the admin (sidebar copy, tags, the intro line, announcement text, a few alternative labels). They were imported once into the article's `extra` JSON in the ShiftItNow database and are read by `lib/post-defaults.js`. Articles created in the admin have no `extra` and use sensible defaults derived from their own fields.
