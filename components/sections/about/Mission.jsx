import Link from 'next/link';

export default function Mission() {
  return (
    <section className="section">
      <div className="container migrated-inner">
        <div className="migrated-copy">
          <span className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot"></span> Why we exist
          </span>
          <h2>Make migrating to Shopify the easiest decision a merchant ever makes.</h2>
          <p>
            Every founder we talk to has a migration horror story - half-imported products, lost SEO, weeks of
            cleanup, customers unable to log in. Most "migration tools" are exporters with marketing budgets.
            We're a migration engine first, and a company second.
          </p>
          <Link href="/how-it-works" className="btn btn-dark btn-md">
            See the migration engine{' '}
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
        <div className="migrated-grid">
          <div className="mig-col">
            <h4>Founded</h4>
            <ul>
              <li>2022, San Francisco</li>
              <li>Backed by ex-Shopify engineers</li>
              <li>Profitable since 2024</li>
              <li>Remote-first, 6 countries</li>
              <li>Customer-funded growth</li>
            </ul>
          </div>
          <div className="mig-col">
            <h4>Team</h4>
            <ul>
              <li>18 full-time</li>
              <li>11 migration engineers</li>
              <li>4 support specialists</li>
              <li>2 designers</li>
              <li>1 very patient ops lead</li>
            </ul>
          </div>
          <div className="mig-col">
            <h4>Track record</h4>
            <ul>
              <li>500+ stores migrated</li>
              <li>10M+ products moved</li>
              <li>99.98% data accuracy</li>
              <li>Zero unrecovered migrations</li>
              <li>4.9★ on Shopify App Store</li>
            </ul>
          </div>
          <div className="mig-col">
            <h4>Values</h4>
            <ul>
              <li>Merchant first, always</li>
              <li>Boring, predictable software</li>
              <li>No silent failures</li>
              <li>Refund if we can't deliver</li>
              <li>Real humans answer the phone</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
