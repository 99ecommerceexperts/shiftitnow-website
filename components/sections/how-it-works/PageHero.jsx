import Link from 'next/link';

export default function PageHero() {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow eyebrow-dark">
          <span className="eyebrow-dot"></span> The process
        </span>
        <h1>Four steps. One smooth shift.</h1>
        <p className="page-hero-sub">
          From signup to launch, here's exactly what happens - and how fast. No surprises, no black boxes.
        </p>
        <div className="page-hero-cta">
          <a
            href="https://apps.shopify.com/shift-it-now"
            className="btn btn-primary btn-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start for free{' '}
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
            See pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
