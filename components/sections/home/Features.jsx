import Link from 'next/link';

import CardSlider from '@/components/ui/CardSlider';
export default function Features() {
  return (
    <section className="section features section-featured" id="features">
      <div className="container">
        <span className="featured-flag" aria-hidden="true">
          ★ Featured
        </span>
        <div className="section-head">
          <span className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot"></span> Why ShiftItNow
          </span>
          <h2>Every piece of your store. Migrated, mapped, ready.</h2>
          <p className="section-sub">
            Most migration tools leave you cleaning up data for weeks. ShiftItNow gets it right the first time
            - so you can flip the switch with confidence.
          </p>
        </div>
        <CardSlider className="feature-grid" dotsClass="feature-dots" cardSelector=".feature-card">
          <article className="feature-card">
            <div className="feature-icon">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <h3>Complete data migration</h3>
            <p>
              Products, variants, images, customers, orders, coupons, blogs - everything moves. Nothing left
              behind.
            </p>
          </article>
          <article className="feature-card">
            <div className="feature-icon">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </div>
            <h3>SEO rankings preserved</h3>
            <p>
              301 redirects on every URL, meta titles and alt text migrated cleanly - your Google rankings
              survive the move.
            </p>
          </article>
          <article className="feature-card feature-card-accent">
            <div className="feature-icon feature-icon-gold">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
            </div>
            <h3>Zero downtime</h3>
            <p>
              Your old store keeps selling while we migrate. Flip the switch only when everything checks out.
            </p>
          </article>
        </CardSlider>
        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <Link href="/features" className="btn btn-ghost-dark btn-md">
            All 9 features{' '}
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
