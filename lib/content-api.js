// Client for the content API served by the Price Mirror backend (the shared admin for both sites).
// ShiftItNow never talks to the database: blogs and testimonials come from here, so the admin at
// https://www.pricemirror.in/admin controls this site. Server-side only (used by Server Components).
import { normalizeAssetUrl, normalizeAssetUrlsInHtml } from './format.js';

const DEFAULT_API = 'https://www.pricemirror.in/api/public/shiftitnow';
const REVALIDATE_SECONDS = 60;
const TIMEOUT_MS = 8000;

const baseUrl = () => (process.env.CONTENT_API_URL || DEFAULT_API).replace(/\/+$/, '');
// `next build` never calls the API, so building does not depend on the admin backend being reachable.
const isBuilding = () => process.env.NEXT_PHASE === 'phase-production-build';

/** GET a JSON path. Resolves null for 404 (and while building); throws for any other failure. */
async function get(path) {
  if (isBuilding()) return null;
  const response = await fetch(`${baseUrl()}${path}`, {
    headers: { accept: 'application/json' },
    next: { revalidate: REVALIDATE_SECONDS, tags: ['content'] },
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (response.status === 404) return null;
  if (!response.ok) throw new Error(`Content API ${response.status} for ${path}`);
  return response.json();
}

// Image URLs in the data are normalised once here so every page renders files that Next.js can actually serve.
function normalizePost(post) {
  if (!post) return post;
  const next = { ...post, cover_image: normalizeAssetUrl(post.cover_image), hero_image: normalizeAssetUrl(post.hero_image) };
  if (post.content_html) next.content_html = normalizeAssetUrlsInHtml(post.content_html);
  if (post.extra?.ogImage) next.extra = { ...post.extra, ogImage: normalizeAssetUrl(post.extra.ogImage) };
  return next;
}

/** Published posts, newest first: { posts, hasMore, page, total }. Throws if the API is unreachable. */
export async function getPosts({ page = 1, limit = 100 } = {}) {
  const data = await get(`/blogs?page=${page}&limit=${limit}`);
  return data && { ...data, posts: (data.posts || []).map(normalizePost) };
}

/** One published post: { post, previous, next }, or null when it does not exist. */
export async function getPost(slug) {
  const data = await get(`/blogs/${encodeURIComponent(slug)}`);
  return data && { ...data, post: normalizePost(data.post) };
}

/** Published testimonials for the home page, or null when unavailable (callers fall back to built-in copy). */
export async function getReviews() {
  try {
    const reviews = await get('/reviews');
    return Array.isArray(reviews) ? reviews : null;
  } catch (error) {
    console.error('Testimonials unavailable:', error.message);
    return null;
  }
}
