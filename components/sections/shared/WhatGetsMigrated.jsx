import Link from 'next/link';

export default function WhatGetsMigrated() {
  return (
    <section className="section migrated">
      <div className="container migrated-inner">
        <div className="migrated-copy">
          <span className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot"></span> Scope of migration
          </span>
          <h2>If it's in your store, we move it.</h2>
          <p>
            No partial migrations. No "we don't do that." A complete, faithful copy of your storefront -
            landed on Shopify with all relationships intact.
          </p>
          <Link href="/contact" className="btn btn-dark btn-md">
            Request a custom audit{' '}
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
        <div className="migrated-grid">
          <div className="mig-col">
            <h4>Catalog</h4>
            <ul>
              <li>Products & variants</li>
              <li>Images & galleries</li>
              <li>Collections / categories</li>
              <li>Tags & metafields</li>
              <li>Inventory & SKUs</li>
            </ul>
          </div>
          <div className="mig-col">
            <h4>Customers</h4>
            <ul>
              <li>Customer accounts</li>
              <li>Addresses & groups</li>
              <li>Order history</li>
              <li>Wishlists</li>
              <li>Reward points*</li>
            </ul>
          </div>
          <div className="mig-col">
            <h4>Orders</h4>
            <ul>
              <li>Past orders & status</li>
              <li>Line items & taxes</li>
              <li>Refunds & returns</li>
              <li>Coupons & discounts</li>
              <li>Shipping zones</li>
            </ul>
          </div>
          <div className="mig-col">
            <h4>Content & SEO</h4>
            <ul>
              <li>Blog posts & pages</li>
              <li>Meta titles & descriptions</li>
              <li>Image alt text</li>
              <li>301 redirects</li>
              <li>Reviews & ratings</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
