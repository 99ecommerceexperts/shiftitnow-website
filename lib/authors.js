// Author profiles shown on the post page. Posts store only the author's name; the card is looked up here.
// Authors without a profile get a plain card (name only).
const SOCIAL_ICONS = {
  linkedin:
    'M6.94 8.57A1.72 1.72 0 1 1 6.9 5.13a1.72 1.72 0 0 1 .04 3.44Zm-1.45 1.4h2.83V18H5.49V9.97Zm4.6 0h2.72v1.18h.04c.38-.71 1.3-1.45 2.68-1.45 2.86 0 3.4 1.88 3.4 4.33V18h-2.83v-4.14c0-1-.02-2.27-1.38-2.27-1.38 0-1.6 1.08-1.6 2.19V18h-2.83V9.97Z',
  x: 'M18.9 2H22l-6.78 7.75L23 22h-6.1l-4.78-6.24L6.66 22H3.55l7.25-8.29L1.36 2h6.26l4.32 5.7L18.9 2Zm-1.07 18h1.72L6.7 3.9H4.85L17.83 20Z',
  instagram:
    'M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 1.8A3.7 3.7 0 0 0 3.8 7.5v9a3.7 3.7 0 0 0 3.7 3.7h9a3.7 3.7 0 0 0 3.7-3.7v-9a3.7 3.7 0 0 0-3.7-3.7h-9Zm9.75 1.35a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Z',
  youtube:
    'M21.4 7.2a2.98 2.98 0 0 0-2.1-2.1C17.46 4.6 12 4.6 12 4.6s-5.46 0-7.3.5a2.98 2.98 0 0 0-2.1 2.1 31.1 31.1 0 0 0-.5 4.8 31.1 31.1 0 0 0 .5 4.8 2.98 2.98 0 0 0 2.1 2.1c1.84.5 7.3.5 7.3.5s5.46 0 7.3-.5a2.98 2.98 0 0 0 2.1-2.1 31.1 31.1 0 0 0 .5-4.8 31.1 31.1 0 0 0-.5-4.8ZM10.2 15.1V8.9l5.36 3.1-5.36 3.1Z',
};

export const SOCIAL_LABELS = { linkedin: 'LinkedIn', x: 'X', instagram: 'Instagram', youtube: 'YouTube' };
export { SOCIAL_ICONS };

export const AUTHORS = {
  'Abhishek Porwal': {
    role: 'Co-Founder',
    photo: '/assets/abhi.jpg',
    bio: 'Abhishek Porwal is a Shopify Growth Expert, Co-Founder of Expert Village Media Technologies (a Shopify Select Partner with 14+ years of experience and 3,000+ successful Shopify projects), and Founder of Price Mirror and Shift It Now Shopify apps. He shares practical insights on Shopify growth, SEO, CRO, and ecommerce strategies to help merchants scale their businesses.',
    links: {
      linkedin: 'https://in.linkedin.com/in/abhishek-porwal',
      x: 'https://x.com/99shopifyexpert',
      instagram: 'https://www.instagram.com/imabhishek.porwal',
      youtube: 'https://www.youtube.com/@99EcommerceExperts',
    },
  },
};

export const authorProfile = (name) =>
  AUTHORS[name] || { role: 'ShiftItNow', photo: null, bio: null, links: {} };
