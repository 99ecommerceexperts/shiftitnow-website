export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid"></div>
        <div className="hero-glow hero-glow-1"></div>
        <div className="hero-glow hero-glow-2"></div>
        <div className="hero-particles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span> <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="eyebrow-dot"></span> Shopify migration, reimagined
          </span>
          <h1 className="hero-title">
            Move your store to <span className="grad-shopify">Shopify</span>{' '}
            <span className="hero-line2">
              in <em>days</em>, not months.
            </span>
          </h1>
          <p className="hero-sub">
            ShiftItNow migrates your products, customers, orders, reviews and SEO redirects from any platform
            to Shopify - automatically, with zero data loss and zero downtime.
          </p>
        </div>
        <div className="hero-visual hero-flow" aria-hidden="true">
          <span className="flow-source flow-source-1">
            <span className="flow-source-icon" style={{ background: '#7b519c' }}>
              <img src="/assets/Logo-White.webp" alt="" />
            </span>{' '}
            WooCommerce
          </span>{' '}
          <span className="flow-source flow-source-2">
            <span className="flow-source-icon" style={{ background: '#f26322' }}>
              <img
                src="/assets/magento-2-logo-svgrepo-com.svg"
                alt=""
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </span>{' '}
            Magento
          </span>{' '}
          <span className="flow-source flow-source-3">
            <span className="flow-source-icon" style={{ background: '#0c6efc' }}>
              <img src="/assets/wix-svgrepo-com.svg" alt="" style={{ filter: 'brightness(0) invert(1)' }} />
            </span>{' '}
            Wix
          </span>{' '}
          <span className="flow-source flow-source-4">
            <span className="flow-source-icon" style={{ background: '#000' }}>
              <img src="/assets/squarespace-svgrepo-com.svg" alt="" />
            </span>{' '}
            Squarespace
          </span>{' '}
          <span className="flow-source flow-source-5">
            <span className="flow-source-icon" style={{ background: '#34313f' }}>
              <img
                src="/assets/bigcommerce-svgrepo-com.svg"
                alt=""
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </span>{' '}
            BigCommerce
          </span>{' '}
          <span className="flow-source flow-source-6">
            <span className="flow-source-icon" style={{ background: '#f15a24' }}>
              <img
                src="/assets/opencart-svgrepo-com.svg"
                alt=""
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </span>{' '}
            OpenCart
          </span>
          <div className="flow-dest">
            <div className="flow-dest-inner">
              <img src="/assets/icons8-shopify.svg" alt="Shopify" />
            </div>
            <span className="flow-dest-label">Shopify</span>
          </div>
          <svg className="flow-svg" viewBox="0 0 500 500" preserveAspectRatio="none" aria-hidden="true">
            <path className="flow-path flow-path-1" d="M 70 55   C 230 55,  320 215, 420 250"></path>
            <path className="flow-path flow-path-2" d="M 60 135  C 230 135, 340 220, 420 250"></path>
            <path className="flow-path flow-path-3" d="M 70 215  C 230 215, 340 235, 420 250"></path>
            <path className="flow-path flow-path-4" d="M 60 295  C 230 295, 340 270, 420 250"></path>
            <path className="flow-path flow-path-2" d="M 70 375  C 230 375, 340 295, 420 250"></path>
            <path className="flow-path flow-path-1" d="M 70 470  C 230 470, 320 320, 420 250"></path>
            <circle r="4" className="flow-packet">
              <animateMotion
                dur="3.2s"
                repeatCount="indefinite"
                path="M 70 55   C 230 55,  320 215, 420 250"
              ></animateMotion>
            </circle>
            <circle r="4" className="flow-packet-gold">
              <animateMotion
                dur="3.8s"
                begin="0.6s"
                repeatCount="indefinite"
                path="M 60 135  C 230 135, 340 220, 420 250"
              ></animateMotion>
            </circle>
            <circle r="4" className="flow-packet">
              <animateMotion
                dur="3.4s"
                begin="1.1s"
                repeatCount="indefinite"
                path="M 70 215  C 230 215, 340 235, 420 250"
              ></animateMotion>
            </circle>
            <circle r="4" className="flow-packet-gold">
              <animateMotion
                dur="4s"
                begin="1.7s"
                repeatCount="indefinite"
                path="M 60 295  C 230 295, 340 270, 420 250"
              ></animateMotion>
            </circle>
            <circle r="3" className="flow-packet">
              <animateMotion
                dur="3.1s"
                begin="2.2s"
                repeatCount="indefinite"
                path="M 70 375  C 230 375, 340 295, 420 250"
              ></animateMotion>
            </circle>
            <circle r="3" className="flow-packet-gold">
              <animateMotion
                dur="2.8s"
                begin="0.3s"
                repeatCount="indefinite"
                path="M 70 470  C 230 470, 320 320, 420 250"
              ></animateMotion>
            </circle>
          </svg>
        </div>
        <div className="hero-cta">
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
          <a
            href="https://www.youtube.com/watch?v=_aanpW5anPM"
            className="btn btn-ghost btn-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="10 8 16 12 10 16 10 8"></polygon>
            </svg>{' '}
            Watch 2-min demo
          </a>
        </div>
        <ul className="hero-trust">
          <li>
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
              <path d="M20 6 9 17l-5-5"></path>
            </svg>{' '}
            Free trial migration
          </li>
          <li>
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
              <path d="M20 6 9 17l-5-5"></path>
            </svg>{' '}
            No coding required
          </li>
          <li>
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
              <path d="M20 6 9 17l-5-5"></path>
            </svg>{' '}
            SEO rankings preserved
          </li>
        </ul>
      </div>
      <div className="container trust-strip">
        <p className="trust-strip-label">Trusted by 1,000+ merchants migrating to Shopify</p>
        <div className="trust-strip-logos">
          <span>★★★★★ 4.9 on Shopify App Store</span> <span className="sep" aria-hidden="true"></span>{' '}
          <span>10M+ products migrated</span> <span className="sep" aria-hidden="true"></span>{' '}
          <span>99.98% data accuracy</span> <span className="sep" aria-hidden="true"></span>{' '}
          <span>24/7 expert support</span>
        </div>
      </div>
    </section>
  );
}
