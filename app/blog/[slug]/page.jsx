import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteShell from '@/components/chrome/SiteShell';
import InlineCta from '@/components/blog/InlineCta';
import { AuthorCard, PostTags } from '@/components/blog/PostMeta';
import PostNav from '@/components/blog/PostNav';
import PostSidebar from '@/components/blog/PostSidebar';
import { getPost } from '@/lib/content-api';
import { faqStructuredData } from '@/lib/faq-schema';
import { formatDate } from '@/lib/format';
import { postPresentation } from '@/lib/post-defaults';
import { blogPostingStructuredData } from '@/lib/seo';
import { SITE_NAME } from '@/lib/site';

// Articles are generated the first time they are requested and refreshed in the background every minute,
// so publishing in the admin reaches the site within about a minute and `next build` needs no data.
export const revalidate = 60;
export const dynamicParams = true;
export const generateStaticParams = async () => [];

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getPost(slug);
  if (!data) return { title: `Post not found - ${SITE_NAME}`, robots: { index: false, follow: false } };
  const { post } = data;
  const view = postPresentation(post);
  const title = post.meta_title || `${post.title} - ${SITE_NAME}`;
  const description = post.meta_description || post.excerpt;
  const shareTitle = view.ogTitle || title;
  const shareDescription = view.ogDescription || description;
  const image = view.ogImage || post.cover_image || post.hero_image;
  const path = `/blog/${post.slug}`;
  return {
    title: { absolute: title },
    description,
    ...(view.keywords ? { keywords: view.keywords } : {}),
    alternates: { canonical: path },
    openGraph: {
      type: 'article',
      title: shareTitle,
      description: shareDescription,
      url: path,
      siteName: SITE_NAME,
      images: image ? [image] : undefined,
      publishedTime: new Date(post.published_at).toISOString(),
      modifiedTime: new Date(post.updated_at || post.published_at).toISOString(),
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: shareTitle,
      description: shareDescription,
      images: image ? [image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const data = await getPost(slug);
  if (!data) notFound();

  const { post, previous, next } = data;
  const view = postPresentation(post);
  const body = post.content_html || '';
  const hero = post.hero_image || post.cover_image;
  const hasOwnCta = /class="[^"]*\bblog-inline-cta\b/.test(body);

  return (
    <SiteShell
      pageClass="blog-post-page"
      structuredData={[blogPostingStructuredData(post), faqStructuredData(body)]}
    >
      <main>
        <section className="blog-detail-top">
          <div className="container">
            <Link href="/blogs" className="blog-detail-back">
              ← Back to all blogs
            </Link>
            {hero && (
              <div className="blog-detail-showcase">
                <div className="blog-detail-hero-frame blog-detail-hero-frame-full">
                  <div className="blog-card-media blog-card-media-accent blog-card-media-accent-strategy blog-card-media-detail">
                    <img src={hero} alt={view.heroAlt} className="blog-image-fallback" />
                  </div>
                </div>
              </div>
            )}
            <div className="blog-detail-layout">
              <article className="blog-detail-article">
                <div className="blog-detail-intro">
                  <div className="blog-detail-headband">
                    <span className="blog-detail-kicker">{post.category}</span>
                  </div>
                  <h1 className="blog-detail-title">{post.title}</h1>
                  <div className="blog-detail-meta-row">
                    <span>By {post.author}</span>
                    <span>{formatDate(post.published_at)}</span>
                    <span>{post.read_time}</span>
                  </div>
                  {view.intro && <p className="blog-detail-excerpt">{view.intro}</p>}
                </div>
                <div className="blog-content">
                  <div className="blog-content-body" dangerouslySetInnerHTML={{ __html: body }} />
                  {!hasOwnCta && <InlineCta />}
                  <div className="blog-post-meta-stack">
                    <PostTags tags={view.tags} />
                    <AuthorCard name={post.author} role={view.authorRole} />
                  </div>
                  <PostNav previous={previous} next={next} />
                </div>
              </article>
              <PostSidebar post={post} view={view} />
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
