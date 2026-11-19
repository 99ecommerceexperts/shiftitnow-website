import SiteShell from '@/components/chrome/SiteShell';
import PageHero from '@/components/sections/privacy/PageHero';
import Policy from '@/components/sections/privacy/Policy';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  path: '/privacy',
  title: 'Privacy Policy - ShiftItNow',
  description:
    "How ShiftItNow handles your data - what we collect, what we don't, how it's secured, and your rights under GDPR and CCPA.",
});

export default function PrivacyPage() {
  return (
    <SiteShell>
      <main>
        <PageHero />
        <Policy />
      </main>
    </SiteShell>
  );
}
