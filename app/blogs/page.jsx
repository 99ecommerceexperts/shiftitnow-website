import SiteShell from '@/components/chrome/SiteShell';
import BlogCard from '@/components/blog/BlogCard';
import BlogCtaSection from '@/components/sections/blogs/BlogCtaSection';
import BlogDiscoveryHero from '@/components/sections/blogs/BlogDiscoveryHero';
import { getPosts } from '@/lib/content-api';
import { pageMetadata } from '@/lib/seo';

// Rendered per request so a freshly published article shows up right away; the content API response
// is cached by its own CDN headers.
export const dynamic = 'force-dynamic';

export const metadata = pageMetadata({
  path: '/blogs',
  title: 'Shopify Migration Guide | Store Migration Tips - ShiftItNow',
  description:
    'Explore Shopify migration guides, launch checklists, and expert tips for a smooth Shopify store migration. Read the latest insights today!',
  keywords: 'shopify store migration, shopify migration guide',
});

export default async function BlogsPage() {
  let posts = [];
  let failed = false;
  try {
    posts = (await getPosts({ limit: 100 }))?.posts ?? [];
  } catch (error) {
    failed = true;
    console.error('Blog list unavailable:', error.message);
  }

  return (
    <SiteShell>
      <main>
        <BlogDiscoveryHero />
        <section className="blog-catalog-section">
          <div className="container">
            <div className="blog-catalog-head">
              <h1>Latest articles</h1>
            </div>
            <div className="blog-catalog-grid">
              {posts.map((post, index) => (
                <BlogCard post={post} lazy={index > 2} key={post.id} />
              ))}
            </div>
            {!posts.length && (
              <p style={{ textAlign: 'center', color: 'var(--gray-600)', padding: '24px 0' }}>
                {failed
                  ? 'Articles are temporarily unavailable. Please try again in a moment.'
                  : 'New articles are on the way.'}
              </p>
            )}
          </div>
        </section>
        <BlogCtaSection />
      </main>
    </SiteShell>
  );
}
