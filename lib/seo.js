import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from './site';

/**
 * Next metadata for a page. `title` is used as-is (the old pages carried their full "… - ShiftItNow" titles).
 * The canonical URL, Open Graph and Twitter tags are filled in from the same values.
 */
export function pageMetadata({
  path,
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  extra = {},
}) {
  return {
    title: { absolute: title },
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle || title,
      description: ogDescription || description,
      type,
      url: path,
      siteName: SITE_NAME,
      images: [image],
      ...extra.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle || title,
      description: ogDescription || description,
      images: [image],
    },
  };
}

const absolute = (path) => (path ? new URL(path, SITE_URL).href : undefined);

/** schema.org BlogPosting for a post from the content API. */
export function blogPostingStructuredData(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.meta_description || post.excerpt,
    image: absolute(post.cover_image || post.hero_image),
    datePublished: new Date(post.published_at).toISOString(),
    dateModified: new Date(post.updated_at || post.published_at).toISOString(),
    author: { '@type': 'Person', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: absolute(DEFAULT_OG_IMAGE) },
    },
    mainEntityOfPage: absolute(`/blog/${post.slug}`),
  };
}
