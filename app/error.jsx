'use client';

import Link from 'next/link';
import SiteShell from '@/components/chrome/SiteShell';

// Shown when a page fails to render (for example the content API is down and nothing is cached yet).
export default function ErrorPage({ reset }) {
  return (
    <SiteShell structuredData={null}>
      <main>
        <section className="page-hero">
          <div className="container">
            <span className="eyebrow">
              <span className="eyebrow-dot"></span> Something went wrong
            </span>
            <h1>This page is taking a break.</h1>
            <p className="page-hero-sub">
              Please try again in a moment. If it keeps happening, tell us at team@shiftitnow.com.
            </p>
            <div className="page-hero-cta">
              <button type="button" className="btn btn-primary btn-lg" onClick={() => reset()}>
                Try again
              </button>{' '}
              <Link href="/" className="btn btn-ghost btn-lg">
                Back to home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
