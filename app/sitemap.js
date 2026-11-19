import { getPosts } from '@/lib/content-api';
import { SITE_URL } from '@/lib/site';

// Built per request so new articles appear without a redeploy.
export const dynamic = 'force-dynamic';

const PAGES = [
  '',
  '/platforms',
  '/features',
  '/how-it-works',
  '/pricing',
  '/faq',
  '/contact',
  '/about',
  '/privacy',
  '/terms',
  '/status',
  '/blogs',
];

export default async function sitemap() {
  const entries = PAGES.map((path) => ({
    url: `${SITE_URL}${path || '/'}`,
    priority: path === '' ? 1 : 0.8,
  }));
  try {
    const data = await getPosts({ limit: 100 });
    for (const post of data?.posts ?? []) {
      entries.push({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: post.updated_at || post.published_at,
        priority: 0.8,
      });
    }
  } catch (error) {
    console.error('Sitemap: articles unavailable:', error.message);
  }
  return entries;
}
