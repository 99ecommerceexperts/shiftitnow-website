import SiteShell from '@/components/chrome/SiteShell';
import PageHero from '@/components/sections/platforms/PageHero';
import PlatformsGrid from '@/components/sections/platforms/PlatformsGrid';
import PlatformDeepDive from '@/components/sections/platforms/PlatformDeepDive';
import WhatGetsMigrated from '@/components/sections/shared/WhatGetsMigrated';
import ComparisonTable from '@/components/sections/platforms/ComparisonTable';
import Stats from '@/components/sections/shared/Stats';
import Cta from '@/components/sections/shared/Cta';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  path: '/platforms',
  title: 'Ecommerce Platform Migration to Shopify | ShiftItNow',
  description:
    'Explore ecommerce platform migration services from WooCommerce, Magento, Wix, and more to Shopify. Migrate your store with ShiftItNow today!',
  keywords: 'ecommerce platform migration, ecommerce platform migration services',
});

export default function PlatformsPage() {
  return (
    <SiteShell>
      <main>
        <PageHero />
        <PlatformsGrid />
        <PlatformDeepDive />
        <WhatGetsMigrated />
        <ComparisonTable />
        <Stats />
        <Cta />
      </main>
    </SiteShell>
  );
}
