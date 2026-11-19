import { DEFAULT_CTA_LABEL } from '@/lib/post-defaults';
import { SHOPIFY_APP_URL } from '@/lib/site';

/** Fallback call-to-action for posts whose body does not carry its own `.blog-inline-cta` block. */
export default function InlineCta() {
  return (
    <div className="blog-inline-cta">
      <a href={SHOPIFY_APP_URL} target="_blank" rel="noopener noreferrer" className="blog-inline-cta-link">
        <span>{DEFAULT_CTA_LABEL}</span>
        <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
