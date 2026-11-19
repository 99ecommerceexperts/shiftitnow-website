// Copy for the dismissible bar above the header. Static, trusted markup (a little <strong> is used).
// Pages pass one of these to <SiteShell announcement={...}>.

/** Shown on every marketing page. */
export const DEFAULT_ANNOUNCEMENT = {
  html: 'Now live: <strong>BigCommerce → Shopify migration</strong> is available - see the platform deep-dive.',
  href: '/platforms',
  label: 'See the deep-dive',
};

/** The blog listing page. */
export const BLOGS_ANNOUNCEMENT = {
  html: 'Planning a Shopify move? Read the migration guide first.',
  href: '/platforms',
  label: 'See supported platforms',
};

// The original posts each had their own message. Posts added later from the admin use the blog listing's.
const POST_ANNOUNCEMENTS = {
  'bigcommerce-to-shopify-migration-guide': {
    html: 'Planning a BigCommerce to Shopify move? Read the guide, then test the migration flow.',
    href: 'https://apps.shopify.com/shift-it-now',
    label: 'Start demo',
    external: true,
  },
  'common-shopify-migration-mistakes': {
    html: 'Planning a Shopify migration? Avoid these mistakes before launch.',
    href: 'https://apps.shopify.com/shift-it-now',
    label: 'Start demo',
    external: true,
  },
  'diy-csv-export-vs-migration-app-shopify': {
    html: 'Planning a Shopify migration? Compare DIY costs with a complete migration app.',
    href: 'https://apps.shopify.com/shift-it-now',
    label: 'Start demo',
    external: true,
  },
  'ecommerce-replatforming-myths': {
    html: 'Move past the myths that keep merchants stuck on an outdated platform.',
    href: 'https://apps.shopify.com/shift-it-now',
    label: 'Start demo',
    external: true,
  },
  'how-long-does-a-shopify-migration-take': {
    html: 'Planning a Shopify migration? Find out how long your move could take.',
    href: 'https://apps.shopify.com/shift-it-now',
    label: 'Start demo',
    external: true,
  },
  'magento-to-shopify-migration-guide': {
    html: 'Planning a Magento to Shopify move? Read the guide, then test the migration flow.',
    href: 'https://apps.shopify.com/shift-it-now',
    label: 'Start demo',
    external: true,
  },
  'migrate-customer-accounts-to-shopify': {
    html: 'Migrating customer accounts to Shopify? Keep the data that matters and test the flow first.',
    href: 'https://apps.shopify.com/shift-it-now',
    label: 'Start demo',
    external: true,
  },
  'shopify-store-migration-guide-2026': {
    html: 'Planning a Shopify move? Read the guide, then test the migration flow.',
    href: 'https://apps.shopify.com/shift-it-now',
    label: 'Start demo',
    external: true,
  },
  'shopify-vs-squarespace-ecommerce': {
    html: 'Compare Shopify and Squarespace before choosing your next ecommerce platform.',
    href: 'https://apps.shopify.com/shift-it-now',
    label: 'Start demo',
    external: true,
  },
  'squarespace-to-shopify-migration-guide': {
    html: 'Planning a Squarespace to Shopify move? Read the guide, then test the migration flow.',
    href: 'https://apps.shopify.com/shift-it-now',
    label: 'Start demo',
    external: true,
  },
  'store-design-shopify-migration': {
    html: 'Migrating your store design to Shopify? Plan the data and theme work together.',
    href: 'https://apps.shopify.com/shift-it-now',
    label: 'Start demo',
    external: true,
  },
  'switch-ecommerce-platforms-without-customers-noticing': {
    html: 'Switch ecommerce platforms without disrupting your customers.',
    href: 'https://apps.shopify.com/shift-it-now',
    label: 'Start demo',
    external: true,
  },
  'tell-google-youve-moved-shopify-migration': {
    html: 'Moved to Shopify? Help Google discover your new store structure faster.',
    href: 'https://apps.shopify.com/shift-it-now',
    label: 'Start demo',
    external: true,
  },
  'will-i-lose-google-rankings-moving-to-shopify': {
    html: 'Moving to Shopify? Plan your migration with SEO in mind.',
    href: 'https://apps.shopify.com/shift-it-now',
    label: 'Start demo',
    external: true,
  },
  'wix-to-shopify-migration-guide': {
    html: 'Planning a Wix to Shopify move? Read the guide, then test the migration flow.',
    href: 'https://apps.shopify.com/shift-it-now',
    label: 'Start demo',
    external: true,
  },
  'woocommerce-to-shopify-migration-guide': {
    html: 'Planning a WooCommerce to Shopify move? Read the guide, then test the migration flow.',
    href: 'https://apps.shopify.com/shift-it-now',
    label: 'Start demo',
    external: true,
  },
  'wordpress-to-shopify-migration-guide': {
    html: 'Planning a WordPress to Shopify move? Read the guide, then test the migration flow.',
    href: 'https://apps.shopify.com/shift-it-now',
    label: 'Start demo',
    external: true,
  },
};

export function postAnnouncement(slug) {
  return POST_ANNOUNCEMENTS[slug] || BLOGS_ANNOUNCEMENT;
}
