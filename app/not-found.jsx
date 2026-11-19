import Link from 'next/link';
import SiteShell from '@/components/chrome/SiteShell';

export const metadata = {
  title: { absolute: 'Page not found - ShiftItNow' },
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <SiteShell structuredData={null}>
      <main>
        <section className="page-hero">
          <div className="container">
            <span className="eyebrow">
              <span className="eyebrow-dot"></span> Error 404
            </span>
            <h1>We couldn&apos;t find that page.</h1>
            <p className="page-hero-sub">
              The link may be out of date, or the page may have moved. Head back home or browse our migration
              guides.
            </p>
            <div className="page-hero-cta">
              <Link href="/" className="btn btn-primary btn-lg">
                Back to home
              </Link>{' '}
              <Link href="/blogs" className="btn btn-ghost btn-lg">
                Read the guides
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
