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
              <span className="eyebrow-dot"></span> Ready when you are
            </span>
            <h2>Your Shopify store is waiting.</h2>
            <p>
              Install ShiftItNow today, run a free demo migration on your real catalog, and decide. No card.
              No commitment. Just clarity.
            </p>
            <div className="cta-buttons">
              <a
                href="https://apps.shopify.com/shift-it-now"
                className="btn btn-primary btn-lg"
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
              </a>{' '}
              <Link href="/contact" className="btn btn-ghost btn-lg">
                Talk to a migration expert
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
