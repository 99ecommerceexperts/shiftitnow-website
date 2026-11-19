import SiteShell from '@/components/chrome/SiteShell';
import PageHero from '@/components/sections/features/PageHero';
import FeaturesGrid from '@/components/sections/features/FeaturesGrid';
import WhatGetsMigrated from '@/components/sections/shared/WhatGetsMigrated';
import AlternativesComparison from '@/components/sections/features/AlternativesComparison';
import Testimonials from '@/components/sections/features/Testimonials';
import Cta from '@/components/sections/shared/Cta';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  path: '/features',
  ogTitle: 'ShiftItNow: Shopify Migration App | Move Your Store to Shopify',
  title: 'Shopify Data Migration App | Move Store Data Fast - ShiftItNow',
  description:
    'Migrate your store with ShiftItNow, the Shopify migration app for products, customers, orders, reviews, blogs, and SEO data. Zero downtime. Start today!',
  keywords: 'shopify data migration, shopify migration app',
});

export default function FeaturesPage() {
  return (
    <SiteShell>
      <main>
        <PageHero />
        <FeaturesGrid />
        <WhatGetsMigrated />
        <AlternativesComparison />
        <Testimonials />
        <Cta />
      </main>
    </SiteShell>
  );
}
