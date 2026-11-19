/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  // Docker/Cloud Run image: .next/standalone runs with `node server.js` and no full node_modules install.
  output: 'standalone',
  async redirects() {
    return [
      // The old static site served `/page.html` and `/page` (Firebase cleanUrls); keep every old URL working.
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/:page(platforms|features|how-it-works|pricing|faq|contact|about|privacy|terms|status|blogs).html', destination: '/:page', permanent: true },
      { source: '/blog/:slug/index.html', destination: '/blog/:slug', permanent: true },
      // Redirects carried over from the old firebase.json.
      { source: '/llms.txt', destination: 'https://shiftitnow.com', permanent: true },
      // The old blog landing page (/blog) was an earlier copy of the 2026 migration guide; the old site also
      // served it for every unknown /blog/* URL (soft 404s). Unknown slugs are now real 404s.
      { source: '/blog', destination: '/blog/shopify-store-migration-guide-2026', permanent: true },
      // The old firebase.json redirected this to /blog/migrate-wix-shopify, which has never existed.
      { source: '/blog/how-to-migrate-wix-to-shopify', destination: '/blog/wix-to-shopify-migration-guide', permanent: true },
      { source: '/blog/migrate-wix-shopify', destination: '/blog/wix-to-shopify-migration-guide', permanent: true },
      // Previously done in blogs.html with a script: shiftitnow.app/blogs belongs on the .com site.
      { source: '/blogs', has: [{ type: 'host', value: '(.*\\.)?shiftitnow\\.app' }], destination: 'https://shiftitnow.com/blogs', permanent: true },
    ];
  },
  async headers() {
    return [
      { source: '/:path*', headers: [{ key: 'X-Content-Type-Options', value: 'nosniff' }] },
      // Same one-week cache the old Firebase config gave images; files in public/ default to no caching in Next.
      { source: '/assets/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=604800' }] },
    ];
  },
};
export default nextConfig;
