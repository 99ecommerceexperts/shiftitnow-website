import Link from 'next/link';

// FAQ copy. Answers are JSX so they can contain links.
export const FAQ_PAGE_ITEMS = [
  {
    q: 'How long does a typical migration take?',
    a: (
      <>
        <p>
          For most stores, 2 to 48 hours of migration time. Large catalogs (50k+ SKUs) or complex B2B setups
          can run up to a week. We give you an exact ETA after the free demo migration - no guessing.
        </p>
      </>
    ),
  },
  {
    q: 'Will my SEO rankings survive the move?',
    a: (
      <>
        <p>
          Yes. We generate 301 redirects for every product, collection, blog post and page URL - and migrate
          meta titles, descriptions and image alt text exactly as they were. Most merchants see no measurable
          ranking drop.
        </p>
      </>
    ),
  },
  {
    q: 'Can I keep selling on my old store during migration?',
    a: (
      <>
        <p>
          Absolutely. Your old store stays live the entire time. New orders that come in during migration are
          synced over via delta sync before launch - no manual export, no missed customers.
        </p>
      </>
    ),
  },
  {
    q: 'What if something goes wrong?',
    a: (
      <>
        <p>
          Every migration ships with a 7-day rollback window - one click reverses everything. Plus, your
          source data is never touched. If we can't deliver a clean migration, we refund you in full.
        </p>
      </>
    ),
  },
  {
    q: 'Do you migrate BigCommerce stores?',
    a: (
      <>
        <p>
          Yes - BigCommerce migrations are now live. We support the full BigCommerce Management API including
          channels, price lists, customer groups and B2B Edition.{' '}
          <Link href="/platforms" className="link-accent">
            See the BigCommerce deep-dive →
          </Link>
        </p>
      </>
    ),
  },
  {
    q: 'Do you migrate OpenCart stores?',
    a: (
      <>
        <p>
          Yes - OpenCart migrations are now live. We support products, categories, customers, orders, reviews
          and SEO URL mappings through our guided OpenCart connector.{' '}
          <Link href="/platforms" className="link-accent">
            See the OpenCart deep-dive →
          </Link>
        </p>
      </>
    ),
  },
  {
    q: 'I have a custom-built store. Can you still help?',
    a: (
      <>
        <p>
          Yes. Our Enterprise team handles custom platforms, headless setups and exotic data shapes regularly.{' '}
          <Link href="/contact" className="link-accent">
            Tell us about your stack
          </Link>{' '}
          and we'll scope a tailored migration in 24 hours.
        </p>
      </>
    ),
  },
  {
    q: 'Is there a free trial?',
    a: (
      <>
        <p>
          Yes - every account gets a free demo migration on a sample of your real catalog before you commit.
          You see exactly what lands in Shopify, how the field mapping looks, and decide whether to proceed.
        </p>
      </>
    ),
  },
  {
    q: 'How do you handle pricing?',
    a: (
      <>
        <p>
          Simple, transparent tiers based on catalog size - no hidden per-record fees. See the{' '}
          <Link href="/pricing" className="link-accent">
            pricing page
          </Link>{' '}
          for full plans and use the calculator to estimate your migration.
        </p>
      </>
    ),
  },
  {
    q: 'Is my data secure during migration?',
    a: (
      <>
        <p>
          All transfers run over TLS 1.3 with end-to-end encryption. We're SOC 2 Type II compliant,
          GDPR-ready, and we never store payment card data. Source credentials are encrypted at rest and
          revoked the moment migration completes.
        </p>
      </>
    ),
  },
  {
    q: 'What kind of support do you provide?',
    a: (
      <>
        <p>
          24/7 chat for active migrations, plus a dedicated migration support available on every Free, Growth,
          and Scale plan. Real humans - not bots, not tier-1 scripts.
        </p>
      </>
    ),
  },
];

// The shorter list shown on the How it works page.
export const HOW_IT_WORKS_FAQ_ITEMS = [
  {
    q: 'How long does a typical migration take?',
    a: (
      <>
        <p>
          For most stores, 2 to 48 hours of migration time. Large catalogs (50k+ SKUs) or complex B2B setups
          can run up to a week. We give you an exact ETA after the free demo migration - no guessing.
        </p>
      </>
    ),
  },
  {
    q: 'Will my SEO rankings survive the move?',
    a: (
      <>
        <p>
          Yes. We generate 301 redirects for every product, collection, blog post and page URL - and migrate
          meta titles, descriptions and image alt text exactly as they were. Most merchants see no measurable
          ranking drop.
        </p>
      </>
    ),
  },
  {
    q: 'Can I keep selling on my old store during migration?',
    a: (
      <>
        <p>
          Absolutely. Your old store stays live the entire time. New orders that come in during migration are
          synced over via delta sync before launch - no manual export, no missed customers.
        </p>
      </>
    ),
  },
  {
    q: 'What if something goes wrong?',
    a: (
      <>
        <p>
          Every migration ships with a 7-day rollback window - one click reverses everything. Plus, your
          source data is never touched. If we can't deliver a clean migration, we refund you in full.
        </p>
      </>
    ),
  },
  {
    q: 'Do you migrate BigCommerce stores?',
    a: (
      <>
        <p>
          Yes - BigCommerce migrations are now live. We support the full Management API v2/v3 including
          channels, price lists, customer groups and B2B Edition.{' '}
          <Link href="/platforms" className="link-accent">
            See the BigCommerce deep-dive →
          </Link>
        </p>
      </>
    ),
  },
  {
    q: 'Do you migrate OpenCart stores?',
    a: (
      <>
        <p>
          Yes - OpenCart migrations are now live. We handle catalog data, categories, customers, orders and
          SEO URLs through our guided OpenCart connector.{' '}
          <Link href="/platforms" className="link-accent">
            See the OpenCart deep-dive →
          </Link>
        </p>
      </>
    ),
  },
  {
    q: 'I have a custom-built store. Can you still help?',
    a: (
      <>
        <p>
          Yes. Our Enterprise team handles custom platforms, headless setups and exotic data shapes regularly.{' '}
          <Link href="/contact" className="link-accent">
            Tell us about your stack
          </Link>{' '}
          and we'll scope a tailored migration in 24 hours.
        </p>
      </>
    ),
  },
];
