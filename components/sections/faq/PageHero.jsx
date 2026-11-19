import Link from 'next/link';

export default function PageHero() {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">
          <span className="eyebrow-dot"></span> Frequently asked questions
        </span>
        <h1>Answers, before you ask.</h1>
        <p className="page-hero-sub">
          Everything merchants typically want to know about migrating to Shopify with ShiftItNow - timelines,
          SEO, rollback, supported platforms, pricing.
        </p>
        <div className="page-hero-cta">
          <Link href="/contact" className="btn btn-primary btn-lg">
            Ask us anything{' '}
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
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
    </section>
  );
}
