import { getReviews } from '@/lib/content-api';
import { DEFAULT_TESTIMONIALS, gradientFor, initials } from '@/lib/testimonials';

/** Home-page testimonials, managed in the admin (Reviews). Falls back to the built-in set if the API is unreachable. */
export default async function Testimonials() {
  const reviews = await getReviews();
  const items = reviews?.length ? reviews : DEFAULT_TESTIMONIALS;

  return (
    <section className="section testimonials section-featured">
      <div className="container">
        <span className="featured-flag" aria-hidden="true">
          ★ Featured
        </span>
        <div className="section-head">
          <span className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot"></span> Merchant stories
          </span>
          <h2>The team you wish you had hired sooner.</h2>
        </div>
        <div className="testimonial-grid">
          {items.map((review, index) => {
            const rating = Math.min(5, Math.max(1, Number(review.rating) || 5));
            return (
              <article
                className={`testimonial${items.length >= 3 && index === 1 ? ' featured' : ''}`}
                key={review.id ?? index}
              >
                <div className="stars" aria-label={`${rating} out of 5 stars`}>
                  {'★'.repeat(rating)}
                </div>
                <blockquote>"{review.review_text}"</blockquote>
                <footer>
                  <div
                    className="avatar"
                    style={review.avatar_url ? undefined : { background: gradientFor(index) }}
                  >
                    {review.avatar_url ? (
                      <img
                        src={review.avatar_url}
                        alt={`${review.store_name} profile photo`}
                        width="52"
                        height="52"
                        loading="lazy"
                        style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
                      />
                    ) : (
                      initials(review.store_name)
                    )}
                  </div>
                  <div>
                    <strong>{review.store_name}</strong> <span>{review.country}</span>
                  </div>
                </footer>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
