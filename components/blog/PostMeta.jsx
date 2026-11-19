import { SOCIAL_ICONS, SOCIAL_LABELS, authorProfile } from '@/lib/authors';

/** The "Tags:" row under an article. */
export function PostTags({ tags }) {
  if (!tags.length) return null;
  return (
    <div className="blog-post-tags" aria-label="Article tags">
      <span className="blog-post-tags-label">Tags:</span>
      <div className="blog-post-tags-list">
        {tags.map((tag) => (
          <span className="blog-post-tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

/** The author box. Authors without a profile (see lib/authors.js) get just their name. */
export function AuthorCard({ name, role }) {
  const author = authorProfile(name);
  const links = Object.entries(author.links);
  return (
    <section className="blog-post-author-card" aria-labelledby="blog-author-title">
      <div className="blog-post-author-header">
        {author.photo && (
          <img src={author.photo} alt="Author portrait" className="blog-post-author-photo" loading="lazy" />
        )}
        <div className="blog-post-author-copy">
          <h2 id="blog-author-title">{name}</h2>
          <p className="blog-post-author-role">{role || author.role}</p>
          {links.length > 0 && (
            <div className="blog-post-author-socials" aria-label="Author social links">
              {links.map(([network, href]) => (
                <a
                  key={network}
                  className={`blog-post-author-social is-${network}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={SOCIAL_LABELS[network]}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d={SOCIAL_ICONS[network]} />
                  </svg>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
      {author.bio && <p className="blog-post-author-bio">{author.bio}</p>}
    </section>
  );
}
