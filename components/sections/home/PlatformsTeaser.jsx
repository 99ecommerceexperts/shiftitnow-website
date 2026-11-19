import Link from 'next/link';

import CardSlider from '@/components/ui/CardSlider';
export default function PlatformsTeaser() {
  return (
    <section className="section platforms" id="platforms">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot"></span> Supported platforms
          </span>
          <h2>Coming from anywhere. Landing on Shopify.</h2>
          <p className="section-sub">
            Seven platforms, one engine. Pick yours below or see the full deep-dive on how each migration
            works.
          </p>
        </div>
        <CardSlider className="platform-grid" dotsClass="platform-dots" cardSelector=".platform-card">
          <article className="platform-card">
            <div className="platform-logo platform-logo-woo">
              <img src="/assets/Logo-White.webp" alt="WooCommerce logo" />
            </div>
            <h3>WooCommerce</h3>
            <p>Full WordPress + Woo migration: products, variants, customers, orders, coupons, reviews.</p>
            <span className="badge badge-live">Available now</span>
          </article>
          <article className="platform-card">
            <div className="platform-logo platform-logo-magento">
              <img src="/assets/magento-2-logo-svgrepo-com.svg" alt="Magento logo" />
            </div>
            <h3>Magento / Adobe Commerce</h3>
            <p>Enterprise-grade migration with attribute mapping, multi-store and B2B catalog support.</p>
            <span className="badge badge-live">Available now</span>
          </article>
          <article className="platform-card platform-card-custom">
            <div className="platform-logo platform-logo-custom">
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3>+ 5 more platforms</h3>
            <p>
              Wix, Squarespace, BigCommerce, OpenCart and custom/headless setups - see the full lineup with
              deep-dives.
            </p>
            <Link href="/platforms" className="badge badge-link">
              See all platforms →
            </Link>
          </article>
        </CardSlider>
        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <Link href="/platforms" className="btn btn-ghost-dark btn-md">
            See all 7 platforms{' '}
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
