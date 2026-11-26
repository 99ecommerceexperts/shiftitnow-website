'use client';

import { useEffect, useRef, useState } from 'react';

const COUPON_CODE = 'BFCM30';

export default function AnnouncementBar() {
  const [state, setState] = useState('open'); // open -> closing -> closed
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);
  const copyTimer = useRef(null);
  useEffect(
    () => () => {
      clearTimeout(timer.current);
      clearTimeout(copyTimer.current);
    },
    [],
  );

  if (state === 'closed') return null;

  const dismiss = () => {
    setState('closing');
    timer.current = setTimeout(() => setState('closed'), 300);
  };
  const closingStyle =
    state === 'closing'
      ? { transition: 'opacity 200ms, max-height 300ms', opacity: 0, maxHeight: 0, overflow: 'hidden' }
      : undefined;

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(COUPON_CODE);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = COUPON_CODE;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      textarea.remove();
    }
    setCopied(true);
    clearTimeout(copyTimer.current);
    copyTimer.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="announcement-bar"
      id="announcementBar"
      role="region"
      aria-label="Announcement"
      style={closingStyle}
    >
      <div className="announcement-inner">
        <div className="announce-marquee">
          <div className="announce-track">
            {Array.from({ length: 12 }, (_, index) => (
              <span className="announce-message" key={index} aria-hidden={index > 0}>
                BFCM Special: Get <strong>30% off</strong> with code
              </span>
            ))}
          </div>
        </div>
        <button
          type="button"
          className={`announce-code${copied ? ' copied' : ''}`}
          onClick={copyCode}
          aria-label={`Copy coupon code ${COUPON_CODE}`}
          title="Copy coupon code"
        >
          <span>{COUPON_CODE}</span>
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {copied ? (
              <path d="m5 12 4 4L19 6" />
            ) : (
              <>
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </>
            )}
          </svg>
        </button>
        <span className="sr-only" aria-live="polite">
          {copied ? 'Coupon code copied' : ''}
        </span>
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
