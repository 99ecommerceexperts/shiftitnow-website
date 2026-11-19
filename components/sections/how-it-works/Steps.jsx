export default function Steps() {
  return (
    <section className="section how" id="how">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot"></span> Step by step
          </span>
          <h2>Here's exactly what happens.</h2>
          <p className="section-sub">
            Transparent, predictable, zero surprises. You're in control at every stage.
          </p>
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
      </div>
    </section>
  );
}
