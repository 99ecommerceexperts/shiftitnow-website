import Link from 'next/link';

export default function PageHero() {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">
          <span className="eyebrow-dot"></span> About ShiftItNow
        </span>
        <h1>Migration, done by people who've felt the pain.</h1>
        <p className="page-hero-sub">
          We built ShiftItNow after watching too many merchants lose weeks, rankings and revenue to broken
          store migrations. Never again.
        </p>
        <div className="page-hero-cta">
          <Link href="/contact" className="btn btn-primary btn-lg">
            Talk to the team
          </Link>{' '}
          <Link href="/how-it-works" className="btn btn-ghost btn-lg">
            See how it works
          </Link>
        </div>
      </div>
    </section>
  );
}
