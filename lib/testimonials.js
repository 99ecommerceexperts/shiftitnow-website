// Home-page testimonials shown until the admin's reviews load (and whenever the content API is unreachable).
// Same shape as the API's /reviews response: store_name is the person or company, country holds the role line.
export const DEFAULT_TESTIMONIALS = [
  {
    id: 1,
    store_name: 'VROODA IL',
    country: 'Founder, Vrooda',
    review_text:
      'very efficient tool for migrating products and customers, and other critical data between Shopify stores. great job',
    avatar_url: null,
    rating: 5,
  },
  {
    id: 2,
    store_name: "Chef's Mandala Gourmet Store",
    country: "Founder, Chef's Mandala Gourmet Store",
    review_text:
      'Shift It Now is an efficient and reliable tool for migrating products, collections, customers, and other critical data between Shopify stores with minimal friction. Its intuitive interface allows even non-technical users to perform complex migrations safely, reducing the risk of errors or lost data.',
    avatar_url: null,
    rating: 5,
  },
  {
    id: 3,
    store_name: 'Sedonuts and Coffee',
    country: 'Founder, Sedonuts and Coffee',
    review_text:
      'We have successfully migrated from WordPress to Shopify, and this app has been very helpful and easy to use. The team has been very supportive throughout the process, and the support has been excellent. Thank you!',
    avatar_url: null,
    rating: 5,
  },
];

// Avatar circles without a photo: initials on one of the brand gradients, cycling by position.
const GRADIENTS = [
  'linear-gradient(135deg, #f2b544, #e8821c)',
  'linear-gradient(135deg, #5fb1c0, #2e7d8e)',
  'linear-gradient(135deg, #11324a, #1a4d5c)',
];
export const gradientFor = (index) => GRADIENTS[index % GRADIENTS.length];

const FILLER = new Set(['and', 'of', 'the', 'for', '&']);

/** "Chef's Mandala Gourmet Store" -> "CM", "VROODA IL" -> "VR", "Sedonuts and Coffee" -> "SC". */
export function initials(name) {
  let words = String(name || '')
    .trim()
    .split(/\s+/)
    .filter((word) => word && !FILLER.has(word.toLowerCase()));
  // A trailing short all-caps token ("IL", "UK") is a suffix, not part of the name.
  if (words.length > 1 && /^[A-Z]{1,2}$/.test(words[words.length - 1])) words = words.slice(0, -1);
  if (words.length > 1) return (words[0][0] + words[1][0]).toUpperCase();
  return (words[0] || '?').slice(0, 2).toUpperCase();
}
