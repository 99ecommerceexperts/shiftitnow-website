'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

/**
 * The dismissible bar above the header. `html` is trusted, hard-coded copy (see lib/announcements.js).
 * Dismissing fades the bar out and removes it for this page view, like the old site; it returns on the next page.
 */
export default function AnnouncementBar({ html, href, label, external = false }) {
  const [state, setState] = useState('open'); // open -> closing -> closed
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  if (state === 'closed') return null;

  const dismiss = () => {
    setState('closing');
    timer.current = setTimeout(() => setState('closed'), 300);
  };
  const closingStyle =
    state === 'closing'
      ? { transition: 'opacity 200ms, max-height 300ms', opacity: 0, maxHeight: 0, overflow: 'hidden' }
      : undefined;
  const arrow = <span aria-hidden="true">&rarr;</span>;

  return (
    <div
      className="announcement-bar"
      id="announcementBar"
      role="region"
      aria-label="Announcement"
      style={closingStyle}
    >
      <div className="container announcement-inner">
        <span className="announce-dot" aria-hidden="true" />
        <span dangerouslySetInnerHTML={{ __html: html }} />
        {external ? (
          <a href={href} className="announce-link" target="_blank" rel="noopener noreferrer">
            {label} {arrow}
          </a>
        ) : (
          <Link href={href} className="announce-link">
            {label} {arrow}
          </Link>
        )}
        <button
          className="announce-close"
          id="announceClose"
          aria-label="Dismiss announcement"
          onClick={dismiss}
        >
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
