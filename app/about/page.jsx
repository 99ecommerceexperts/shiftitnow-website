import SiteShell from '@/components/chrome/SiteShell';
import PageHero from '@/components/sections/about/PageHero';
import Mission from '@/components/sections/about/Mission';
import Story from '@/components/sections/about/Story';
import Cta from '@/components/sections/about/Cta';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  path: '/about',
  title: 'ShiftItNow: Shopify Store Migration App | Migration to Shopify',
  description:
    'Learn how ShiftItNow simplifies migration to Shopify. Our Shopify store migration app helps move data accurately and efficiently. Contact us today!',
  keywords: 'migration to shopify, shopify store migration app',
});

export default function AboutPage() {
  return (
    <SiteShell>
      <main>
        <PageHero />
        <Mission />
        <Story />
        <Cta />
      </main>
    </SiteShell>
  );
}
