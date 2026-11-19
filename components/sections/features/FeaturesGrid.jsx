import CardSlider from '@/components/ui/CardSlider';

export default function FeaturesGrid() {
  return (
    <section className="section features" id="features">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot"></span> Feature set
          </span>
          <h2>Built for the move that can't go wrong.</h2>
          <p className="section-sub">
            Six capabilities that make ShiftItNow the only migration tool you'll ever need.
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
              Products, variants, images, categories, customers, orders, coupons, reviews, blogs, pages -
              everything moves. Nothing left behind.
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
              301 redirects auto-generated for every URL. Meta titles, descriptions and alt text migrated
              cleanly so your Google rankings survive the move.
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
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <h3>Smart field mapping</h3>
            <p>
              Custom attributes, metafields, product options and tax classes intelligently mapped to Shopify
              equivalents - with a preview before commit.
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
                <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                <path d="M9 9h6v6H9z"></path>
                <path d="M9 3v6"></path>
                <path d="M15 3v6"></path>
                <path d="M9 15v6"></path>
                <path d="M15 15v6"></path>
                <path d="M3 9h6"></path>
                <path d="M15 9h6"></path>
                <path d="M3 15h6"></path>
                <path d="M15 15h6"></path>
              </svg>
            </div>
            <h3>Delta sync</h3>
            <p>
              New orders or customers landing on your old store during migration? They sync over
              automatically. No spreadsheet juggling.
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
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <h3>Human support, 24/7</h3>
            <p>
              Real migration engineers on chat, email and call. Not bots, not tier-1 scripts - the team that
              built the tool.
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
              Your old store keeps selling while we migrate. Switch DNS only when you're 100% ready - and
              we'll handle that too.
            </p>
          </article>
        </CardSlider>
      </div>
    </section>
  );
}
