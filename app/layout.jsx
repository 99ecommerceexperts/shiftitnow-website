import '../styles/styles.css';
import '../styles/mobile.css';
import Script from 'next/script';
import ClientEffects from '@/components/effects/ClientEffects';
import ScrollProgress from '@/components/effects/ScrollProgress';
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '@/lib/site';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  icons: { icon: [{ url: '/assets/logo.webp', type: 'image/webp' }] },
  openGraph: { siteName: SITE_NAME, locale: 'en_US', images: [DEFAULT_OG_IMAGE] },
  twitter: { card: 'summary_large_image' },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A1F2E',
};

const GTM_ID = 'GTM-NJDS338C';
const GA_ID = 'G-75MFFCX1S2';
const CLARITY_ID = 'xjp076zmko';
const CRISP_ID = '608e8b46-cfdf-429d-9af3-6583e7cdc6b5';
// Analytics, session recording and live chat only run in production so local development never pollutes them.
const trackers = process.env.NODE_ENV === 'production';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {trackers && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        <ScrollProgress />
        {children}
        <ClientEffects />

        {trackers && (
          <>
            <Script
              id="gtm"
              strategy="afterInteractive"
            >{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}</Script>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="gtag"
              strategy="afterInteractive"
            >{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${GA_ID}');`}</Script>
            <Script
              id="clarity"
              strategy="afterInteractive"
            >{`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_ID}");`}</Script>
            <Script
              id="crisp"
              strategy="lazyOnload"
            >{`window.$crisp=[];window.CRISP_WEBSITE_ID="${CRISP_ID}";(function(){var d=document;var s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=true;d.getElementsByTagName("head")[0].appendChild(s);})();`}</Script>
          </>
        )}
      </body>
    </html>
  );
}
