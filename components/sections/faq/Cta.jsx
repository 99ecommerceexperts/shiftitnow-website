import Link from 'next/link';

export default function Cta() {
  return (
    <section className="section cta-section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-bg" aria-hidden="true">
            <div className="cta-glow"></div>
          </div>
          <div className="cta-content">
            <span className="eyebrow">
              <span className="eyebrow-dot"></span> Still got questions?
            </span>
            <h2>Talk to a migration expert.</h2>
            <p>
              Get a same-day answer on your specific stack, catalog size, or edge case. No sales pitch - just
              clarity.
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Contact us
              </Link>{' '}
              <a
                href="https://apps.shopify.com/shift-it-now"
                className="btn btn-ghost btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/assets/icons8-shopify.svg"
                  alt=""
                  width="20"
                  height="20"
                  className="btn-shopify-icon"
                />{' '}
                Install on Shopify
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
