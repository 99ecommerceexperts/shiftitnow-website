'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navLinkProps } from '@/lib/nav';
import { SHOPIFY_APP_URL } from '@/lib/site';

const NAV = [
  ['/platforms', 'Platforms'],
  ['/features', 'Features'],
  ['/how-it-works', 'How it works'],
  ['/pricing', 'Pricing'],
  ['/blogs', 'Blogs'],
  ['/faq', 'FAQ'],
];
const MOBILE_NAV = [...NAV, ['/about', 'About'], ['/contact', 'Talk to sales']];

function ShopifyButtonIcon() {
  return <img src="/assets/icons8-shopify.svg" alt="" width="18" height="18" className="btn-shopify-icon" />;
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const link = (href, className) => navLinkProps(pathname, 'header', href, className);
  const closeMenu = () => setOpen(false);

  // Escape or growing past the mobile breakpoint closes it too.
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 768) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  // Header gets a shadow once the page has scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="siteHeader">
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="ShiftItNow home">
          <img src="/assets/logo.webp" alt="" className="brand-mark" />
          <span className="brand-name">
            Shift<span className="brand-accent">It</span>Now
          </span>
        </Link>

        <nav className="primary-nav" aria-label="Primary">
          <ul>
            {NAV.map(([href, label]) => (
              <li key={href}>
                <Link href={href} {...link(href)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-cta">
          <Link href="/contact" {...link('/contact', 'btn btn-ghost btn-sm')}>
            Talk to sales
          </Link>
          <a
            href={SHOPIFY_APP_URL}
            className="btn btn-primary btn-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ShopifyButtonIcon />
            Install on Shopify
          </a>
          <button
            className="nav-toggle"
            id="navToggle"
            aria-expanded={open}
            aria-controls="mobileMenu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div className="mobile-menu" id="mobileMenu" hidden={!open} data-open={open ? 'true' : 'false'}>
        <ul>
          {MOBILE_NAV.map(([href, label]) => (
            <li key={href}>
              <Link href={href} {...link(href)} onClick={closeMenu}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={SHOPIFY_APP_URL}
          className="btn btn-primary btn-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ShopifyButtonIcon />
          Install on Shopify
        </a>
      </div>
    </header>
  );
}
