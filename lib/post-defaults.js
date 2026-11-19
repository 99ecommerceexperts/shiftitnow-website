import { BLOGS_ANNOUNCEMENT } from './announcements';
import { safeInlineHtml } from './format';

export const DEFAULT_SIDEBAR = {
  title: 'Ready to move to Shopify?',
  text: 'Preview your Shopify migration before launch and move products, customers, orders, content, and redirects together.',
  button: 'Install on Shopify',
};
export const DEFAULT_CTA_LABEL = 'Start Your Shopify Migration';

/**
 * Presentation details for a post. The posts imported from the old static site carry hand-written
 * extras (tags, sidebar copy, intro line...) in `post.extra`; posts created in the admin have none and
 * fall back to values derived from their own fields.
 */
export function postPresentation(post) {
  const extra = post.extra && typeof post.extra === 'object' ? post.extra : {};
  const announcement = extra.announcement;
  return {
    announcement:
      announcement?.html && announcement?.href
        ? { ...announcement, html: safeInlineHtml(announcement.html) }
        : BLOGS_ANNOUNCEMENT,
    chip: extra.chip || post.category,
    cardKicker: extra.cardKicker || post.category,
    authorRole: extra.authorRole || null,
    sidebarCategory: extra.sidebarCategory || post.category,
    keywords: extra.keywords || null,
    ogTitle: extra.ogTitle || null,
    ogDescription: extra.ogDescription || null,
    ogImage: extra.ogImage || null,
    // An empty string means "this post has no intro line"; only a missing value falls back to the summary.
    intro: typeof extra.intro === 'string' ? extra.intro : post.meta_description || post.excerpt,
    tags: Array.isArray(extra.tags) && extra.tags.length ? extra.tags : [post.category].filter(Boolean),
    focus: extra.focus || 'Shopify migration',
    sidebar: { ...DEFAULT_SIDEBAR, ...(extra.sidebar || {}) },
    cardAlt: extra.cardAlt || post.title,
    heroAlt: extra.heroAlt || post.title,
  };
}
