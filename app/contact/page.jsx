import SiteShell from '@/components/chrome/SiteShell';
import PageHero from '@/components/sections/contact/PageHero';
import ContactWaitlist from '@/components/sections/contact/ContactWaitlist';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  path: '/contact',
  title: 'Contact ShiftItNow - Shopify Migration Experts',
  description:
    'Get in touch with ShiftItNow. Our Shopify migration experts provide custom quotes, migration walk-throughs, and tailored guidance. Contact us today!',
  keywords: 'ecommerce store migration services, shopify migration experts',
});

export default function ContactPage() {
  return (
    <SiteShell>
      <main>
        <PageHero />
        <ContactWaitlist />
      </main>
    </SiteShell>
  );
}
