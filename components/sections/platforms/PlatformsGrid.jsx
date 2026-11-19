import Link from 'next/link';

import CardSlider from '@/components/ui/CardSlider';
export default function PlatformsGrid() {
  return (
    <section className="section platforms" id="platforms">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot"></span> All platforms
          </span>
          <h2>Every major platform, fully supported.</h2>
          <p className="section-sub">
            We handle the connection, the data mapping, the field translation. You just press go.
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
          <article className="platform-card">
            <div className="platform-logo platform-logo-wix">
              <img src="/assets/wix-svgrepo-com.svg" alt="Wix logo" />
            </div>
            <h3>Wix</h3>
            <p>Pull your full Wix Stores catalog, customers and content blocks into Shopify in one flow.</p>
            <span className="badge badge-live">Available now</span>
          </article>
          <article className="platform-card">
            <div className="platform-logo platform-logo-squarespace">
              <img src="/assets/squarespace-svgrepo-com.svg" alt="Squarespace logo" />
            </div>
            <h3>Squarespace</h3>
            <p>Migrate commerce data, blog posts and SEO meta from any Squarespace 7.0 or 7.1 store.</p>
            <span className="badge badge-live">Available now</span>
          </article>
          <article className="platform-card">
            <div className="platform-logo platform-logo-bigc">
              <img src="/assets/bigcommerce-svgrepo-com.svg" alt="BigCommerce logo" />
            </div>
            <h3>BigCommerce</h3>
            <p>Native BigCommerce API integration with channels, price lists and customer groups.</p>
            <span className="badge badge-live">Available now</span>
          </article>
          <article className="platform-card">
            <div className="platform-logo platform-logo-opencart">
              <img src="/assets/opencart-svgrepo-com.svg" alt="OpenCart logo" />
            </div>
            <h3>OpenCart</h3>
            <p>
              Migrate OpenCart products, categories, customers, orders and SEO URLs into Shopify without CSV
              cleanup.
            </p>
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
            <h3>Custom / Other</h3>
            <p>Got a custom-built store or an unusual platform? Our team will scope a tailored migration.</p>
            <Link href="/contact" className="badge badge-link">
              Talk to us →
            </Link>
          </article>
        </CardSlider>
      </div>
    </section>
  );
}
