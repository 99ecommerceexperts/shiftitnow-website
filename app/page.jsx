import SiteShell from '@/components/chrome/SiteShell';
import Hero from '@/components/sections/home/Hero';
import MarqueeStrip from '@/components/sections/home/MarqueeStrip';
import PlatformsTeaser from '@/components/sections/home/PlatformsTeaser';
import Features from '@/components/sections/home/Features';
import HowItWorks from '@/components/sections/home/HowItWorks';
import Stats from '@/components/sections/shared/Stats';
import Testimonials from '@/components/sections/home/Testimonials';
import Cta from '@/components/sections/home/Cta';
import { pageMetadata } from '@/lib/seo';

// Testimonials come from the admin; the page is rebuilt in the background at most once a minute.
export const revalidate = 60;

export const metadata = pageMetadata({
  path: '/',
  title: 'ShiftItNow: Shopify Migration App | Move Your Store to Shopify',
  description:
    'Migrate your store to Shopify with ease. Transfer products, customers, orders, and SEO data seamlessly from any platform. Start your ecommerce migration today.',
  keywords: 'shopify migration, ecommerce migration',
});

export default function HomePage() {
  return (
    <SiteShell>
      <main id="top">
        <Hero />
        <MarqueeStrip />
        <PlatformsTeaser />
        <Features />
        <HowItWorks />
        <Stats />
        <Testimonials />
        <Cta />
      </main>
    </SiteShell>
  );
}
