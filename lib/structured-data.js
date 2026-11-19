// Site-wide structured data (Organization, WebSite, SoftwareApplication and reviews).
// The old site embedded this identical block on every marketing page, so it is rendered by <SiteShell>.
export const siteStructuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://shiftitnow.com/#organization',
      name: 'ShiftItNow',
      url: 'https://shiftitnow.com/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://shiftitnow.com/assets/logo.webp',
      },
      image: 'https://shiftitnow.com/assets/logo.webp',
      email: 'team@shiftitnow.com',
      foundingDate: '2022',
      description:
        'ShiftItNow is a Shopify migration app that helps merchants migrate products, customers, orders, SEO redirects, blogs, reviews, and store data from WooCommerce, Magento, Wix, Squarespace, BigCommerce, OpenCart, and custom platforms to Shopify.',
      sameAs: ['https://www.linkedin.com/company/shiftitnow/', 'https://www.instagram.com/shiftitnow/'],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'team@shiftitnow.com',
        contactType: 'customer support',
        url: 'https://shiftitnow.com/contact',
        availableLanguage: 'English',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        },
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://shiftitnow.com/#website',
      url: 'https://shiftitnow.com/',
      name: 'ShiftItNow',
      publisher: {
        '@id': 'https://shiftitnow.com/#organization',
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://shiftitnow.com/#webpage',
      url: 'https://shiftitnow.com/',
      name: 'ShiftItNow: Shopify Migration App | Move Your Store to Shopify',
      description: 'Migrate your store to Shopify with ease.',
      isPartOf: {
        '@id': 'https://shiftitnow.com/#website',
      },
      about: {
        '@id': 'https://shiftitnow.com/#softwareapplication',
      },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: 'https://shiftitnow.com/assets/logo.webp',
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://shiftitnow.com/#softwareapplication',
      name: 'ShiftItNow',
      url: 'https://shiftitnow.com/',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web Browser',
      softwareVersion: '1.0',
      browserRequirements: 'Requires a modern web browser',
      applicationSuite: 'Shopify Migration',
      description: 'ShiftItNow automates ecommerce migration to Shopify.',
      image: 'https://shiftitnow.com/assets/logo.webp',
      downloadUrl: 'https://apps.shopify.com/shift-it-now',
      installUrl: 'https://apps.shopify.com/shift-it-now',
      provider: {
        '@id': 'https://shiftitnow.com/#organization',
      },
      publisher: {
        '@id': 'https://shiftitnow.com/#organization',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '3',
        bestRating: '5',
        worstRating: '1',
      },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '0',
        highPrice: '99',
        offerCount: '3',
        offers: [
          {
            '@type': 'Offer',
            name: 'Free',
            price: '0',
            priceCurrency: 'USD',
            description:
              'up to 30 products, up to 30 orders, up to 30 customers, up to 2 pages, up to 2 posts; 24/7 dedicated support',
          },
          {
            '@type': 'Offer',
            name: 'Growth',
            price: '49',
            priceCurrency: 'USD',
            description:
              'up to 1,000 products, up to 500 orders, up to 500 customers, up to 10 pages, up to 10 posts; 24/7 dedicated support; one-time charge',
          },
          {
            '@type': 'Offer',
            name: 'Scale',
            price: '99',
            priceCurrency: 'USD',
            description:
              'up to 5,000 products, up to 1,000 orders, up to 1,000 customers, up to 50 pages, up to 50 posts; 24/7 dedicated support; one-time charge',
          },
        ],
      },
    },
    {
      '@type': 'Review',
      '@id': 'https://shiftitnow.com/#review1',
      author: {
        '@type': 'Person',
        name: 'Sarah Patel',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
      },
      datePublished: '2025-07-12',
      reviewBody: "We migrated 14,000 SKUs from Magento with our team's sanity intact.",
      itemReviewed: {
        '@id': 'https://shiftitnow.com/#softwareapplication',
      },
    },
    {
      '@type': 'Review',
      '@id': 'https://shiftitnow.com/#review2',
      author: {
        '@type': 'Person',
        name: 'Daniel Morrison',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
      },
      datePublished: '2025-07-13',
      reviewBody: 'WooCommerce to Shopify migration was smooth.',
      itemReviewed: {
        '@id': 'https://shiftitnow.com/#softwareapplication',
      },
    },
    {
      '@type': 'Review',
      '@id': 'https://shiftitnow.com/#review3',
      author: {
        '@type': 'Person',
        name: 'Reina Kobayashi',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
      },
      datePublished: '2025-07-14',
      reviewBody: 'Everything transferred successfully.',
      itemReviewed: {
        '@id': 'https://shiftitnow.com/#softwareapplication',
      },
    },
  ],
};
