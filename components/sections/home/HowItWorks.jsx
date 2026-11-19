import Link from 'next/link';

export default function HowItWorks() {
  return (
    <section className="section how section-featured" id="how">
      <div className="container">
        <span className="featured-flag" aria-hidden="true">
          ★ Featured
        </span>
        <div className="section-head">
          <span className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot"></span> The process
          </span>
          <h2>Four steps. One smooth shift.</h2>
          <p className="section-sub">From signup to launch, here's exactly what happens - and how fast.</p>
        </div>
        <div className="steps">
          <div className="step-line" aria-hidden="true"></div>
          <article className="step">
            <div className="step-num">01</div>
            <h3>Connect</h3>
            <p>
              Install ShiftItNow from the Shopify App Store. Connect your source store with API credentials or
              a one-click OAuth flow.
            </p>
            <span className="step-time">~2 minutes</span>
          </article>
          <article className="step">
            <div className="step-num">02</div>
            <h3>Preview</h3>
            <p>
              Run a free demo migration on a sample of your catalog. Review the field mapping, fix anything
              you don't like.
            </p>
            <span className="step-time">~15 minutes</span>
          </article>
          <article className="step">
            <div className="step-num">03</div>
            <h3>Migrate</h3>
            <p>
              Approve the full migration. We move everything in the background while your old store keeps
              taking orders.
            </p>
            <span className="step-time">2 hours – 3 days</span>
          </article>
          <article className="step">
            <div className="step-num">04</div>
            <h3>Launch</h3>
            <p>
              Final delta sync, DNS switch and a 7-day safety net. If anything looks off, one click rolls it
              back.
            </p>
            <span className="step-time">~1 hour</span>
          </article>
        </div>
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="/how-it-works" className="btn btn-ghost-dark btn-md">
            Full process breakdown{' '}
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
