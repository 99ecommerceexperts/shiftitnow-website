import Link from 'next/link';
import { formatDate } from '@/lib/format';
import { postPresentation } from '@/lib/post-defaults';

/** One article card on the blog listing. */
export default function BlogCard({ post, lazy = false }) {
  const view = postPresentation(post);
  const image = post.cover_image || post.hero_image;
  return (
    <article className="blog-card blog-catalog-card">
      <Link href={`/blog/${post.slug}`} className="blog-card-link" aria-label={`Read ${post.title}`}>
        <div className="blog-card-media blog-card-media-accent blog-card-media-accent-strategy">
          <div className="blog-card-media-overlay">
            <span className="blog-card-media-tag">{post.category}</span>
          </div>
          {image && (
            <img
              src={image}
              alt={view.cardAlt}
              className="blog-image-fallback"
              loading={lazy ? 'lazy' : undefined}
            />
          )}
        </div>
        <div className="blog-card-content">
          <span className="blog-card-kicker">{view.cardKicker}</span>
          <div className="blog-card-meta">
            <span>by {post.author}</span> <span>{formatDate(post.published_at)}</span>
          </div>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          <div className="blog-card-meta-row">
            <span className="blog-chip">{view.chip}</span>{' '}
            <span className="blog-card-reading">{post.read_time}</span>
          </div>
          <span className="blog-card-cta">Read article →</span>
        </div>
      </Link>
    </article>
  );
}
