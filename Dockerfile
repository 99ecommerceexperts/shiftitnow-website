# Production image for Cloud Run. Builds the Next.js standalone server and runs it without the full node_modules.
FROM node:24-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

FROM node:24-alpine AS build
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# `next build` never calls the content API, so the build needs no network access or secrets.
RUN npm run build

FROM node:24-alpine AS run
WORKDIR /app
# Cloud Run sends traffic to $PORT (8080 by default); HOSTNAME makes server.js listen on all interfaces.
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1 HOSTNAME=0.0.0.0 PORT=8080
COPY --from=build --chown=node:node /app/.next/standalone ./
COPY --from=build --chown=node:node /app/.next/static ./.next/static
COPY --from=build --chown=node:node /app/public ./public
USER node
EXPOSE 8080
CMD ["node", "server.js"]
