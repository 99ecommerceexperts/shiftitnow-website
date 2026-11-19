export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot"></span> Merchant stories
          </span>
          <h2>The team you wish you had hired sooner.</h2>
        </div>
        <div className="testimonial-grid">
          <article className="testimonial">
            <div className="stars" aria-label="5 out of 5 stars">
              ★★★★★
            </div>
            <blockquote>
              "We migrated 14,000 SKUs from Magento with our team's sanity intact. SEO held, orders kept
              flowing, and the support team replied in minutes - not days."
            </blockquote>
            <footer>
              <div className="avatar" style={{ background: 'linear-gradient(135deg, #f2b544, #e8821c)' }}>
                SP
              </div>
              <div>
                <strong>Sarah Patel</strong> <span>Head of E-commerce, Northstar Apparel</span>
              </div>
            </footer>
          </article>
          <article className="testimonial featured">
            <div className="stars" aria-label="5 out of 5 stars">
              ★★★★★
            </div>
            <blockquote>
              "I dreaded this for two years. ShiftItNow did the whole WooCommerce → Shopify move in a weekend,
              redirects included. Should have switched ages ago."
            </blockquote>
            <footer>
              <div className="avatar" style={{ background: 'linear-gradient(135deg, #5fb1c0, #2e7d8e)' }}>
                DM
              </div>
              <div>
                <strong>Daniel Morrison</strong> <span>Founder, Hearthwood Coffee Co.</span>
              </div>
            </footer>
          </article>
          <article className="testimonial">
            <div className="stars" aria-label="5 out of 5 stars">
              ★★★★★
            </div>
            <blockquote>
              "Coming from Wix, I expected to lose a ton of content. Nothing was lost. Even my blog meta
              descriptions came across exactly right."
            </blockquote>
            <footer>
              <div className="avatar" style={{ background: 'linear-gradient(135deg, #11324a, #1a4d5c)' }}>
                RK
              </div>
              <div>
                <strong>Reina Kobayashi</strong> <span>Owner, Kobayashi Ceramics</span>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
}
