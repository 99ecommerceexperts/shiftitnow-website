import '../../styles/pricing-calc.css';
import SiteShell from '@/components/chrome/SiteShell';
import PriceCalculator from '@/components/pricing/PriceCalculator';
import Hero from '@/components/sections/pricing/Hero';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  path: '/pricing',
  title: 'Shopify Migration Pricing | Migration Services - ShiftItNow',
  description:
    'Explore Shopify migration pricing with ShiftItNow. Get transparent Shopify migration services, a free demo, and instant plan estimates. Migrate today!',
  keywords: 'shopify migration services, shopify migration pricing',
});

export default function PricingPage() {
  return (
    <SiteShell pageClass="pricing-page">
      {/* The calculator's price figure uses an italic serif that the other pages don't need. */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,700&display=swap"
        precedence="default"
      />
      <main>
        <Hero />
        <PriceCalculator />
      </main>
    </SiteShell>
  );
}
