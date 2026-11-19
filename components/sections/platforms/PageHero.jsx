import Link from 'next/link';

export default function PageHero() {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">
          <span className="eyebrow-dot"></span> Supported platforms
        </span>
        <h1>
          Migrate from anywhere.
          <br />
          Land on Shopify.
        </h1>
        <p className="page-hero-sub">
          Whatever you're running today, ShiftItNow speaks its language - and translates it cleanly into
          Shopify. Products, customers, orders, SEO: all of it.
        </p>
        <div className="page-hero-cta">
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
            Install on Shopify{' '}
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
          </a>{' '}
          <Link href="/contact" className="btn btn-ghost btn-lg">
            Talk to sales
          </Link>
        </div>
      </div>
    </section>
  );
}
