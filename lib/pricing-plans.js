import { SHOPIFY_APP_URL } from './site';

// Migration pricing tiers. The calculator picks the smallest tier whose limits cover everything being moved.
const imports = ({ products, customers, orders, pages, posts }) => [
  `Imports up to ${products.toLocaleString('en-US')} products`,
  `Imports up to ${customers.toLocaleString('en-US')} customers`,
  `Imports up to ${orders.toLocaleString('en-US')} orders`,
  `Imports up to ${pages} pages`,
  `Imports up to ${posts} posts`,
  '24/7 dedicated support',
];

const FREE_LIMITS = { products: 30, customers: 30, orders: 30, pages: 2, posts: 2 };
const GROWTH_LIMITS = { products: 1000, customers: 500, orders: 500, pages: 10, posts: 10 };
const SCALE_LIMITS = { products: 5000, customers: 1000, orders: 1000, pages: 50, posts: 50 };

export const PLANS = {
  free: {
    id: 'free',
    name: 'Free',
    priceStr: 'Free',
    priceMeta: 'No service charge',
    isFree: true,
    isContact: false,
    limits: FREE_LIMITS,
    features: imports(FREE_LIMITS),
    cta: 'Get started - install free',
    ctaHref: SHOPIFY_APP_URL,
  },
  growth: {
    id: 'growth',
    name: 'Growth',
    priceStr: '$49',
    priceMeta: 'One-time fee · all data, all preserved',
    isFree: false,
    isContact: false,
    limits: GROWTH_LIMITS,
    features: imports(GROWTH_LIMITS),
    cta: 'Continue - Install Growth',
    ctaHref: SHOPIFY_APP_URL,
  },
  scale: {
    id: 'scale',
    name: 'Scale',
    priceStr: '$99',
    priceMeta: 'One-time fee · all data, all preserved',
    isFree: false,
    isContact: false,
    limits: SCALE_LIMITS,
    features: imports(SCALE_LIMITS),
    cta: 'Continue - Install Scale',
    ctaHref: SHOPIFY_APP_URL,
  },
  enterprise: {
    id: 'enterprise',
    name: 'Contact us',
    priceStr: 'Contact us',
    priceMeta: 'Contact our sales team',
    isFree: false,
    isContact: true,
    limits: { products: Infinity, customers: Infinity, orders: Infinity, pages: Infinity, posts: Infinity },
    features: ['Your store exceeds the listed plan limits', 'Contact us to discuss your migration'],
    cta: 'Talk to sales',
    ctaHref: '/contact',
  },
};

/** The three tiers shown as cards under the calculator. */
export const PLAN_TIERS = [PLANS.free, PLANS.growth, PLANS.scale];

/** The cheapest plan that covers every count; anything bigger goes to sales. */
export function recommend(counts) {
  const tier = PLAN_TIERS.find((plan) =>
    Object.keys(plan.limits).every((key) => (counts[key] || 0) <= plan.limits[key]),
  );
  return tier || PLANS.enterprise;
}

/** Share (0-100) of the plan's product/customer/order capacity the largest count uses. */
export function capacityUsed(plan, counts) {
  if (plan.isContact) return 100;
  const shares = ['products', 'customers', 'orders']
    .filter((key) => plan.limits[key] !== Infinity && counts[key] > 0)
    .map((key) => counts[key] / plan.limits[key]);
  return shares.length ? Math.round(Math.min(Math.max(...shares), 1) * 100) : 0;
}
