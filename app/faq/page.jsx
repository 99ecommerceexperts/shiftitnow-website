import SiteShell from '@/components/chrome/SiteShell';
import PageHero from '@/components/sections/faq/PageHero';
import Faq from '@/components/sections/faq/Faq';
import Cta from '@/components/sections/faq/Cta';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  path: '/faq',
  title: 'Shopify Migration FAQ | Ecommerce Data Migration Questions',
  description:
    'Get answers to Shopify migration FAQ topics, including ecommerce data migration, SEO, timelines, supported platforms, and pricing. Learn more today!',
  keywords: 'ecommerce data migration, shopify migration faq',
});

export default function FaqPage() {
  return (
    <SiteShell>
      <main>
        <PageHero />
        <Faq />
        <Cta />
      </main>
    </SiteShell>
  );
}
