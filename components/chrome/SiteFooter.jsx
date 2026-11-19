'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSyncExternalStore } from 'react';
import { navLinkProps } from '@/lib/nav';
import { SHOPIFY_APP_URL } from '@/lib/site';

const SOCIALS = [
  ['is-instagram', 'https://www.instagram.com/shiftitnow/', 'Instagram'],
  ['is-linkedin', 'https://www.linkedin.com/company/shiftitnow/', 'LinkedIn'],
  ['is-youtube', 'https://www.youtube.com/@99EcommerceExperts', 'YouTube'],
];
const PRODUCT = [
  ['/features', 'Features'],
  ['/platforms', 'Platforms'],
  ['/how-it-works', 'How it works'],
  ['/pricing', 'Pricing'],
  ['/blogs', 'Blogs'],
];
// The old footer linked every migration to the platforms page.
const MIGRATIONS = [
  'WooCommerce - Shopify',
  'Magento - Shopify',
  'Wix - Shopify',
  'Squarespace - Shopify',
  'BigCommerce - Shopify',
  'OpenCart - Shopify',
];
const COMPANY = [
  ['/about', 'About'],
  ['/contact', 'Contact'],
  ['/faq', 'FAQ'],
  ['/privacy', 'Privacy'],
  ['/terms', 'Terms'],
  ['/status', 'Status'],
];

// The year is rendered with the server's clock, then the browser's, so a page built last December never shows a stale year.
const subscribeNever = () => () => {};
const currentYear = () => new Date().getFullYear();

export default function SiteFooter() {
  const pathname = usePathname();
  const link = (href) => navLinkProps(pathname, 'footer', href);
  const year = useSyncExternalStore(subscribeNever, currentYear, currentYear);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand">
              <img src="/assets/logo.webp" alt="" className="brand-mark" />
              <span className="brand-name">
                Shift<span className="brand-accent">It</span>Now
              </span>
            </Link>
            <p>The Shopify migration app for merchants who need it done right - the first time.</p>
            <div className="footer-socials" aria-label="Social media links">
              {SOCIALS.map(([modifier, href, label]) => (
                <a
                  key={label}
                  className={`footer-social-link ${modifier}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                ></a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              {PRODUCT.map(([href, label]) => (
                <li key={href}>
                  <Link href={href} {...link(href)}>
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={SHOPIFY_APP_URL} target="_blank" rel="noopener noreferrer">
                  Shopify App Store
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Migrations</h4>
            <ul>
              {MIGRATIONS.map((label) => (
                <li key={label}>
                  <Link href="/platforms" {...link('/platforms')}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              {COMPANY.map(([href, label]) => (
                <li key={href}>
                  <Link href={href} {...link(href)}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy;{' '}
            <span id="year" suppressHydrationWarning>
              {year}
            </span>{' '}
            ShiftItNow. Made for Shopify merchants who don&apos;t have time to lose.
          </p>
          <p className="footer-meta">
            Shopify is a trademark of Shopify Inc. ShiftItNow is an independent app and is not endorsed by
            Shopify Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
