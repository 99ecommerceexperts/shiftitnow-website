import Link from 'next/link';

function NavCard({ post, label, rel, emptyText }) {
  if (!post) {
    return (
      <div className="blog-post-nav-card blog-post-nav-card-disabled" aria-disabled="true">
        <span className="blog-post-nav-label">{label}</span>
        <strong>{emptyText}</strong>
      </div>
    );
  }
  return (
    <Link href={`/blog/${post.slug}`} className="blog-post-nav-card" rel={rel}>
      <span className="blog-post-nav-label">{label}</span>
      <strong>{post.title}</strong>
    </Link>
  );
}

/** Previous (older) / next (newer) post links at the end of an article. */
export default function PostNav({ previous, next }) {
  return (
    <div className="blog-post-nav" aria-label="Post navigation">
      <NavCard post={previous} label="Prev post" rel="prev" emptyText="No previous post" />
      <NavCard post={next} label="Next post" rel="next" emptyText="No next post" />
    </div>
  );
}
