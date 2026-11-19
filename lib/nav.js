// Which header/footer link is "current" for a route. Mirrors the rules the old script.js applied
// (syncSiteChromeActiveState): every blog route highlights "Blogs"; About/Privacy/Terms/Status only
// highlight in the footer.
const SHARED = ['/platforms', '/features', '/how-it-works', '/pricing', '/faq', '/contact'];
const FOOTER_ONLY = ['/about', '/privacy', '/terms', '/status'];

function normalise(pathname = '/') {
  const path = pathname.replace(/\/+$/, '');
  return path || '/';
}

/** The href that should be marked current for this pathname, or null. */
export function activeHref(pathname, area) {
  const path = normalise(pathname);
  if (path === '/blogs' || path === '/blog' || path.startsWith('/blog/')) return '/blogs';
  if (SHARED.includes(path)) return path;
  if (area === 'footer' && FOOTER_ONLY.includes(path)) return path;
  return null;
}

/** Props for a nav link: merges `nav-active` into its classes and sets aria-current. */
export function navLinkProps(pathname, area, href, className) {
  const active = activeHref(pathname, area) === href;
  return {
    className: [className, active ? 'nav-active' : ''].filter(Boolean).join(' ') || undefined,
    'aria-current': active ? 'page' : undefined,
  };
}
