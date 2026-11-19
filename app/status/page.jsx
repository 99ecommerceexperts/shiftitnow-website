import SiteShell from '@/components/chrome/SiteShell';
import PageHero from '@/components/sections/status/PageHero';
import StatusBoard from '@/components/sections/status/StatusBoard';
import { pageMetadata } from '@/lib/seo';

export const metadata = pageMetadata({
  path: '/status',
  title: 'System Status - ShiftItNow',
  description:
    'Live status of the ShiftItNow migration engine, API, dashboard and platform connectors. 90-day uptime history.',
});

export default function StatusPage() {
  return (
    <SiteShell>
      <main>
        <PageHero />
        <StatusBoard />
      </main>
    </SiteShell>
  );
}
