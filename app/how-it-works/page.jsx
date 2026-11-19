import SiteShell from '@/components/chrome/SiteShell';
import PageHero from '@/components/sections/how-it-works/PageHero';
import Steps from '@/components/sections/how-it-works/Steps';
import Stats from '@/components/sections/shared/Stats';
import Faq from '@/components/sections/how-it-works/Faq';
import Cta from '@/components/sections/shared/Cta';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  path: '/how-it-works',
  title: 'Migrate to Shopify in 4 Steps | Shopify Migration Process',
  description:
    'Learn the Shopify migration process with ShiftItNow. Connect, preview, migrate, and launch your store in as little as 2 hours. Start free today!',
  keywords: 'migrate to shopify, shopify migration process',
});

export default function HowItWorksPage() {
  return (
    <SiteShell>
      <main>
        <PageHero />
        <Steps />
        <Stats />
        <Faq />
        <Cta />
      </main>
    </SiteShell>
  );
}
