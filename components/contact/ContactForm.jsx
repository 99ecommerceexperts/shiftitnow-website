'use client';

import { useRef, useState } from 'react';

// Web3Forms emails each submission to the team. The access key is public by design (it only works for this site).
const ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = '9d0d72d3-0251-43e6-9ddc-b6ad4a4a0010';

const PLATFORMS = [
  'WooCommerce',
  'Magento / Adobe Commerce',
  'Wix',
  'Squarespace',
  'BigCommerce',
  'OpenCart',
  'Other / Custom',
];
const CATALOG_SIZES = ['1 – 500', '500 – 2,500', '2,500 – 10,000', '10,000 – 50,000', '50,000+'];

export default function ContactForm() {
  const form = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const submit = async (event) => {
    event.preventDefault();
    if (!form.current.checkValidity()) {
      form.current.reportValidity();
      return;
    }
    setStatus('sending');
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        body: new FormData(form.current),
        headers: { Accept: 'application/json' },
      });
      const json = await response.json().catch(() => ({}));
      if (!response.ok || json.success === false) throw new Error(json.message || 'Submission failed');
      form.current.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  // Bring the result into view, like the old form did.
  const showResult = (node) => node?.scrollIntoView({ behavior: 'smooth', block: 'center' });

  return (
    <form className="contact-form" id="contactForm" ref={form} onSubmit={submit} noValidate>
      <input type="hidden" name="access_key" value={ACCESS_KEY} />
      <input type="hidden" name="subject" value="New ShiftItNow contact form submission" />
      <input type="hidden" name="from_name" value="ShiftItNow website" />
      {/* Spam honeypot: bots tick it, people never see it. */}
      <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      <div className="form-row">
        <label>
          <span>Full name</span>{' '}
          <input type="text" name="name" required autoComplete="name" placeholder="Jane Patel" />
        </label>{' '}
        <label>
          <span>Work email</span>{' '}
          <input type="email" name="email" required autoComplete="email" placeholder="jane@store.com" />
        </label>
      </div>
      <div className="form-row">
        <label>
          <span>Current platform</span>{' '}
          <select name="platform" required defaultValue="">
            <option value="">Select your platform</option>
            {PLATFORMS.map((platform) => (
              <option key={platform}>{platform}</option>
            ))}
          </select>
        </label>{' '}
        <label>
          <span>Approx. products</span>{' '}
          <select name="catalogSize" required defaultValue="">
            <option value="">Catalog size</option>
            {CATALOG_SIZES.map((size) => (
              <option key={size}>{size}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="form-block">
        <span>Tell us anything we should know</span>{' '}
        <textarea
          name="message"
          rows="4"
          placeholder="Custom fields, B2B, multi-store, target launch date…"
        ></textarea>
      </label>{' '}
      <button type="submit" className="btn btn-primary btn-lg btn-block" disabled={status === 'sending'}>
        {status === 'sending' ? (
          'Sending...'
        ) : (
          <>
            Send message{' '}
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </>
        )}
      </button>
      <p
        className="form-success"
        id="formSuccess"
        hidden={status !== 'success'}
        ref={status === 'success' ? showResult : undefined}
      >
        Thanks! We&apos;ll be in touch within one business day.
      </p>
      <p
        className="form-error"
        id="formError"
        hidden={status !== 'error'}
        ref={status === 'error' ? showResult : undefined}
      >
        Sorry - something went wrong. Email <a href="mailto:team@shiftitnow.com">team@shiftitnow.com</a> and
        we&apos;ll reply directly.
      </p>
    </form>
  );
}
