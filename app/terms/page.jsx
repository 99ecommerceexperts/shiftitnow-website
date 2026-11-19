import SiteShell from '@/components/chrome/SiteShell';
import PageHero from '@/components/sections/terms/PageHero';
import Terms from '@/components/sections/terms/Terms';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  path: '/terms',
  title: 'Terms of Service - ShiftItNow',
  description:
    'The terms that govern your use of ShiftItNow - written in plain English with no surprise clauses.',
});

export default function TermsPage() {
  return (
    <SiteShell>
      <main>
        <PageHero />
        <Terms />
      </main>
    </SiteShell>
  );
}
