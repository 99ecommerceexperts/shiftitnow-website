import Link from 'next/link';

export default function PlatformDeepDive() {
  return (
    <section className="platform-details">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot"></span> Platform deep-dives
          </span>
          <h2>How migration works, platform by platform.</h2>
          <p className="section-sub">
            Every platform stores data differently. Here's exactly how ShiftItNow connects to each one and
            what moves across.
          </p>
        </div>
        <div className="pdp-grid">
          <div className="pdp-card">
            <div className="pdp-card-head">
              <div className="pdp-logo-sm pdp-logo-woo">
                <img src="/assets/Logo-White.webp" alt="WooCommerce" />
              </div>
              <div className="pdp-card-head-info">
                <h3>WooCommerce</h3>
                <span className="badge badge-live">Available now</span>
              </div>
            </div>
            <div className="pdp-card-body">
              <div className="pdp-block pdp-block-connect">
                <h4>
                  <span className="pdp-block-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </span>{' '}
                  How it connects
                </h4>
                <p>
                  Connects via the <strong>WooCommerce REST API</strong> (v2/v3) using your store URL and API
                  keys. No plugin install needed - generate Read keys in WooCommerce → Settings → Advanced →
                  REST API and paste them in our dashboard.
                </p>
              </div>
              <div className="pdp-block pdp-block-migrates">
                <h4>
                  <span className="pdp-block-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>{' '}
                  What migrates
                </h4>
                <ul>
                  <li>Products, variants, images</li>
                  <li>Customer accounts, addresses</li>
                  <li>Order history with line items, taxes, refunds</li>
                  <li>WordPress blog posts</li>
                  <li>WordPress pages</li>
                </ul>
              </div>
              <div className="pdp-block pdp-block-notes">
                <h4>
                  <span className="pdp-block-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </span>{' '}
                  Platform notes
                </h4>
                <ul>
                  <li>Supports WooCommerce 3.x through 8.x</li>
                  <li>Subscription products require Scale plan</li>
                  <li>Contact us for ACF / custom post type fields</li>
                  <li>Multi-currency orders preserved with original currency code</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pdp-card">
            <div className="pdp-card-head">
              <div className="pdp-logo-sm pdp-logo-magento">
                <img src="/assets/magento-2-logo-svgrepo-com.svg" alt="Magento" />
              </div>
              <div className="pdp-card-head-info">
                <h3>Magento / Adobe Commerce</h3>
                <span className="badge badge-live">Available now</span>
              </div>
            </div>
            <div className="pdp-card-body">
              <div className="pdp-block pdp-block-connect">
                <h4>
                  <span className="pdp-block-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </span>{' '}
                  How it connects
                </h4>
                <p>
                  Uses the <strong>Magento 2 REST API</strong> natively. Magento 1.x stores connect via our
                  lightweight bridge module (installed in minutes, removed after migration). Adobe Commerce
                  Cloud supported with a service account token.
                </p>
              </div>
              <div className="pdp-block pdp-block-migrates">
                <h4>
                  <span className="pdp-block-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>{' '}
                  What migrates
                </h4>
                <ul>
                  <li>Products, variants, images</li>
                  <li>Customer accounts, addresses</li>
                  <li>Order history with line items, taxes, refunds</li>
                  <li>Blog posts</li>
                  <li>Pages</li>
                </ul>
              </div>
              <div className="pdp-block pdp-block-notes">
                <h4>
                  <span className="pdp-block-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </span>{' '}
                  Platform notes
                </h4>
                <ul>
                  <li>Magento 1.9 support via bridge module only</li>
                  <li>Custom EAV attributes mapped on Scale plans</li>
                  <li>Contact us for multi-store migrations</li>
                  <li>Downloadable products → Shopify digital files</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pdp-card">
            <div className="pdp-card-head">
              <div className="pdp-logo-sm pdp-logo-wix">
                <img src="/assets/wix-svgrepo-com.svg" alt="Wix" />
              </div>
              <div className="pdp-card-head-info">
                <h3>Wix</h3>
                <span className="badge badge-live">Available now</span>
              </div>
            </div>
            <div className="pdp-card-body">
              <div className="pdp-block pdp-block-connect">
                <h4>
                  <span className="pdp-block-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </span>{' '}
                  How it connects
                </h4>
                <p>
                  Authorized via <strong>Wix OAuth</strong> - click "Connect Wix" in our dashboard, approve in
                  one screen, and we pull data through the Wix Stores API and Wix Data API. No manual exports
                  or CSV files.
                </p>
              </div>
              <div className="pdp-block pdp-block-migrates">
                <h4>
                  <span className="pdp-block-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>{' '}
                  What migrates
                </h4>
                <ul>
                  <li>Products, variants, images</li>
                  <li>Customer accounts, addresses</li>
                  <li>Order history with line items, taxes, refunds</li>
                  <li>Blog posts</li>
                  <li>Pages</li>
                </ul>
              </div>
              <div className="pdp-block pdp-block-notes">
                <h4>
                  <span className="pdp-block-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </span>{' '}
                  Platform notes
                </h4>
                <ul>
                  <li>Wix Stores only (not legacy Wix eCommerce)</li>
                  <li>Wix Bookings & Events not included</li>
                  <li>Member-gated content not migrated</li>
                  <li>Wix restaurant menus excluded from scope</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pdp-card">
            <div className="pdp-card-head">
              <div className="pdp-logo-sm pdp-logo-squarespace">
                <img src="/assets/squarespace-svgrepo-com.svg" alt="Squarespace" />
              </div>
              <div className="pdp-card-head-info">
                <h3>Squarespace</h3>
                <span className="badge badge-live">Available now</span>
              </div>
            </div>
            <div className="pdp-card-body">
              <div className="pdp-block pdp-block-connect">
                <h4>
                  <span className="pdp-block-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </span>{' '}
                  How it connects
                </h4>
                <p>
                  Uses the <strong>Squarespace Commerce API</strong> with OAuth. Authorize once from your
                  Squarespace account - we handle token refresh and pull all store data automatically. No XML
                  exports required.
                </p>
              </div>
              <div className="pdp-block pdp-block-migrates">
                <h4>
                  <span className="pdp-block-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>{' '}
                  What migrates
                </h4>
                <ul>
                  <li>Products, variants, images</li>
                  <li>Customer accounts, addresses</li>
                  <li>Order history with line items, taxes, refunds</li>
                  <li>Blog posts</li>
                  <li>Pages</li>
                </ul>
              </div>
              <div className="pdp-block pdp-block-notes">
                <h4>
                  <span className="pdp-block-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </span>{' '}
                  Platform notes
                </h4>
                <ul>
                  <li>Supports Squarespace 7.0 and 7.1</li>
                  <li>Member Areas content not migrated</li>
                  <li>Donation products excluded from scope</li>
                  <li>Squarespace scheduling (Acuity) not included</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pdp-card">
            <div className="pdp-card-head">
              <div className="pdp-logo-sm pdp-logo-bigc">
                <img src="/assets/bigcommerce-svgrepo-com.svg" alt="BigCommerce" />
              </div>
              <div className="pdp-card-head-info">
                <h3>BigCommerce</h3>
                <span className="badge badge-live">Available now</span>
              </div>
            </div>
            <div className="pdp-card-body">
              <div className="pdp-block pdp-block-connect">
                <h4>
                  <span className="pdp-block-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </span>{' '}
                  How it connects
                </h4>
                <p>
                  Uses the <strong>BigCommerce Management API v2/v3</strong> with store-level OAuth. Authorize
                  via the BigCommerce control panel - no CSV exports or third-party connectors needed.
                </p>
              </div>
              <div className="pdp-block pdp-block-migrates">
                <h4>
                  <span className="pdp-block-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>{' '}
                  What migrates
                </h4>
                <ul>
                  <li>Products, variants, images</li>
                  <li>Customer accounts, addresses</li>
                  <li>Order history with line items, taxes, refunds</li>
                  <li>Blog posts</li>
                  <li>Pages</li>
                </ul>
              </div>
              <div className="pdp-block pdp-block-notes">
                <h4>
                  <span className="pdp-block-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </span>{' '}
                  Platform notes
                </h4>
                <ul>
                  <li>Multi-channel support included by default</li>
                  <li>B2B Edition customer groups supported</li>
                  <li>Stencil theme content preserved as Shopify pages</li>
                </ul>
              </div>
            </div>
            <div className="pdp-card-footer">
              <a
                href="https://apps.shopify.com/shift-it-now"
                className="btn btn-primary btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start migration →
              </a>
            </div>
          </div>
          <div className="pdp-card">
            <div className="pdp-card-head">
              <div className="pdp-logo-sm pdp-logo-opencart">
                <img src="/assets/opencart-svgrepo-com.svg" alt="OpenCart" />
              </div>
              <div className="pdp-card-head-info">
                <h3>OpenCart</h3>
                <span className="badge badge-live">Available now</span>
              </div>
            </div>
            <div className="pdp-card-body">
              <div className="pdp-block pdp-block-connect">
                <h4>
                  <span className="pdp-block-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </span>{' '}
                  How it connects
                </h4>
                <p>
                  Uses ShiftItNow's guided <strong>OpenCart connector</strong> with your store URL plus admin
                  or API credentials. No manual exports or spreadsheet mapping needed.
                </p>
              </div>
              <div className="pdp-block pdp-block-migrates">
                <h4>
                  <span className="pdp-block-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>{' '}
                  What migrates
                </h4>
                <ul>
                  <li>Products, variants, images</li>
                  <li>Customer accounts, addresses</li>
                  <li>Order history with line items, taxes, refunds</li>
                  <li>Blog posts</li>
                  <li>Pages</li>
                </ul>
              </div>
              <div className="pdp-block pdp-block-notes">
                <h4>
                  <span className="pdp-block-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </span>{' '}
                  Platform notes
                </h4>
                <ul>
                  <li>Supports OpenCart 2.x and 3.x stores</li>
                  <li>Multi-store mappings available on Scale</li>
                  <li>Custom extensions reviewed during pre-flight audit</li>
                  <li>Older heavily customized installs may need a tailored mapping pass</li>
                </ul>
              </div>
            </div>
            <div className="pdp-card-footer">
              <a
                href="https://apps.shopify.com/shift-it-now"
                className="btn btn-primary btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start migration →
              </a>
            </div>
          </div>
          <div className="pdp-card pdp-custom">
            <div className="pdp-card-head">
              <div className="pdp-logo-sm">
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
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
              <div className="pdp-card-head-info">
                <h3>Custom / Other Platform</h3>
                <span
                  className="badge badge-live"
                  style={{
                    background: 'rgba(95, 177, 192, 0.15)',
                    color: 'var(--teal-light)',
                    borderColor: 'rgba(95, 177, 192, 0.3)',
                  }}
                >
                  Tailored scope
                </span>
              </div>
            </div>
            <div className="pdp-card-body">
              <div className="pdp-block pdp-block-connect">
                <h4>
                  <span className="pdp-block-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </span>{' '}
                  How it connects
                </h4>
                <p>
                  We analyze your store's data structure - CSV/SQL exports, a proprietary REST API, headless
                  CMS, or legacy platform - then build a custom extractor tailored to your exact setup.
                </p>
              </div>
              <div className="pdp-block pdp-block-migrates">
                <h4>
                  <span className="pdp-block-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>{' '}
                  What migrates
                </h4>
                <ul>
                  <li>Everything your store holds - we scope it first</li>
                  <li>Pre-migration audit maps data to Shopify's model</li>
                  <li>Custom field → metafield mapping doc provided</li>
                  <li>Full QA run included before go-live</li>
                </ul>
              </div>
              <div className="pdp-block pdp-block-notes">
                <h4>
                  <span className="pdp-block-icon">
                    <svg
                      viewBox="0 0 24 24"
                      width="12"
                      height="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </span>{' '}
                  Platform notes
                </h4>
                <ul>
                  <li>3-day scoping call before work begins</li>
                  <li>Quoted on data volume and complexity</li>
                  <li>Dedicated migration engineer assigned</li>
                  <li>Typical timeline: 2–4 weeks from scoping</li>
                </ul>
              </div>
            </div>
            <div className="pdp-card-footer">
              <Link href="/contact" className="btn btn-primary btn-sm">
                Book a scoping call →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
