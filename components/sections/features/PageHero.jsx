import Link from 'next/link';

export default function PageHero() {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow eyebrow-dark">
          <span className="eyebrow-dot"></span> Why ShiftItNow
        </span>
        <h1>
          Every piece of your store.
          <br />
          Migrated, mapped, ready.
        </h1>
        <p className="page-hero-sub">
          Most migration tools leave you cleaning up data for weeks. ShiftItNow gets it right the first time -
          so you can flip the switch with confidence.
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
          <Link href="/pricing" className="btn btn-ghost btn-lg">
            View pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
