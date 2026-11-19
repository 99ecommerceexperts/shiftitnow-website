export default function Story() {
  return (
    <section className="section testimonials section-featured">
      <div className="container">
        <span className="featured-flag" aria-hidden="true">
          ★ Our story
        </span>
        <div className="section-head">
          <span className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot"></span> How we got here
          </span>
          <h2>Built in the trenches of 200 painful migrations.</h2>
          <p className="section-sub">
            Before ShiftItNow was a product, it was a side-tool we built to rescue merchants from broken DIY
            migrations. Word got out. Here we are.
          </p>
        </div>
        <div className="testimonial-grid">
          <article className="testimonial">
            <div className="stars" aria-label="Chapter 1">
              01
            </div>
            <blockquote>
              "We were two engineers freelancing for Shopify Plus stores. Every project started the same way:
              a botched migration from someone else's tool. We got sick of cleaning up."
            </blockquote>
            <footer>
              <div className="avatar" style={{ background: 'linear-gradient(135deg, #f2b544, #e8821c)' }}>
                2022
              </div>
              <div>
                <strong>The freelance years</strong> <span>San Francisco, 2022</span>
              </div>
            </footer>
          </article>
          <article className="testimonial featured">
            <div className="stars" aria-label="Chapter 2">
              02
            </div>
            <blockquote>
              "We wrote a tiny internal engine to do migrations properly. One merchant asked if they could buy
              it. Then another. Then 50. We quit consulting and named it ShiftItNow."
            </blockquote>
            <footer>
              <div className="avatar" style={{ background: 'linear-gradient(135deg, #5fb1c0, #2e7d8e)' }}>
                2023
              </div>
              <div>
                <strong>The pivot</strong> <span>Remote-first, 2023</span>
              </div>
            </footer>
          </article>
          <article className="testimonial">
            <div className="stars" aria-label="Chapter 3">
              03
            </div>
            <blockquote>
              "Today, ShiftItNow moves more stores to Shopify in a week than we used to migrate in a year.
              Same tiny team, same obsession with getting it right the first time."
            </blockquote>
            <footer>
              <div className="avatar" style={{ background: 'linear-gradient(135deg, #11324a, #1a4d5c)' }}>
                Now
              </div>
              <div>
                <strong>The migration engine</strong> <span>50+ stores and counting</span>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </section>
  );
}
