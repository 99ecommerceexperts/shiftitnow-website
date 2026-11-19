/** "November 18, 2026". Dates are stored at 12:00 UTC so the day is the same everywhere. */
export function formatDate(value) {
  if (!value) return '';
  return new Date(value).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

const ENTITIES = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
  rsquo: '’',
  lsquo: '‘',
  rdquo: '”',
  ldquo: '“',
  ndash: '–',
  mdash: '—',
  hellip: '…',
  rarr: '→',
  larr: '←',
  copy: '©',
};

/** Plain text from a fragment of HTML: tags removed, entities decoded, whitespace collapsed. */
export function htmlToText(html) {
  return String(html ?? '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, entity) => {
      if (entity[0] === '#') {
        const code =
          entity[1].toLowerCase() === 'x' ? parseInt(entity.slice(2), 16) : parseInt(entity.slice(1), 10);
        return Number.isFinite(code) ? String.fromCodePoint(code) : match;
      }
      return ENTITIES[entity.toLowerCase()] ?? match;
    })
    .replace(/\s+/g, ' ')
    .trim();
}

/** Keeps only <strong> and <em> from a short piece of copy, escaping everything else. */
export function safeInlineHtml(value) {
  return String(value ?? '')
    .replace(/&(?!#?\w+;)/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/&lt;(\/?)(strong|em)&gt;/gi, '<$1$2>');
}

/**
 * Next.js serves files from public/ only when parentheses in the URL are written literally, not as %28 / %29
 * (which is how some of the original articles link images named like "image (2) (1).png"). Browsers and Firebase
 * Hosting accept both spellings, so normalise to the literal form.
 */
export const normalizeAssetUrl = url => (typeof url === 'string' && url.startsWith('/') ? url.replace(/%28/gi, '(').replace(/%29/gi, ')') : url);

export const normalizeAssetUrlsInHtml = html =>
  String(html ?? '').replace(/(\s(?:src|href|poster)=")(\/[^"]*)(")/g, (_match, open, url, close) => open + normalizeAssetUrl(url) + close);
