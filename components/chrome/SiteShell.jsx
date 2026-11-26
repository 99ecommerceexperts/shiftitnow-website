import AnnouncementBar from './AnnouncementBar';
import JsonLd from './JsonLd';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';
import { siteStructuredData } from '@/lib/structured-data';

/**
 * Everything around a page's <main>: announcement bar, header, footer and the site-wide structured data.
 * Each page renders its own shell so it can set an optional wrapper class
 * (the old site put `pricing-page` / `blog-post-page` on <body>; the CSS targets the wrapper instead).
 */
export default function SiteShell({
  children,
  pageClass,
  structuredData = siteStructuredData,
}) {
  const shell = (
    <>
      <AnnouncementBar />
      <SiteHeader />
      {children}
      <SiteFooter />
      <JsonLd data={structuredData} />
    </>
  );
  return pageClass ? <div className={pageClass}>{shell}</div> : shell;
}
