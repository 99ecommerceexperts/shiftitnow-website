import Link from 'next/link';

export default function Policy() {
  return (
    <section className="section" style={{ background: 'var(--white)' }}>
      <div className="container">
        <div className="prose">
          <span className="updated">Last updated: 14 January 2026</span>
          <p>
            ShiftItNow Inc. ("ShiftItNow", "we") is a Shopify migration platform. This policy explains what
            personal data we process, why, for how long, and the rights you have. We are the data controller
            for our own marketing/account data and a data processor for the store data you migrate through us.
          </p>
          <h2>1. The short version</h2>
          <ul>
            <li>We never sell your data. Ever.</li>
            <li>We only process the data you (or your source platform) explicitly share with us.</li>
            <li>
              Source store credentials are encrypted at rest and revoked the moment your migration completes.
            </li>
            <li>
              Migration data is deleted from our systems within 30 days of project completion (sooner on
              request).
            </li>
            <li>We're SOC 2 Type II certified, GDPR compliant, and CCPA compliant.</li>
          </ul>
          <h2>2. What we collect</h2>
          <h3>Account data</h3>
          <ul>
            <li>Name, work email, company name</li>
            <li>Billing address and Shopify shop domain</li>
            <li>Communication preferences</li>
          </ul>
          <h3>Migration data (processed on your behalf)</h3>
          <ul>
            <li>Source store credentials (encrypted, short-lived)</li>
            <li>Product, customer and order records during transfer only</li>
            <li>Content (blog posts, pages, redirects) during transfer only</li>
          </ul>
          <h3>Telemetry</h3>
          <ul>
            <li>Anonymous app usage (which features are clicked, error reports)</li>
            <li>IP address and device type for fraud prevention</li>
            <li>Cookies for session management - no third-party trackers on our marketing site</li>
          </ul>
          <h2>3. How we use it</h2>
          <p>
            We process personal data to: provide and improve the migration service; communicate about your
            account and migrations; meet legal obligations (tax, fraud prevention); and - only with explicit
            opt-in - send product updates.
          </p>
          <h2>4. Who we share it with</h2>
          <p>
            We share data with sub-processors who help us run the service: AWS (hosting), Stripe (billing),
            Sentry (error tracking), Postmark (transactional email). All are bound by data-processing
            agreements and are GDPR-compliant. A current list is available on request.
          </p>
          <p>
            We do not share, sell or rent your data to advertisers, data brokers, or AI training providers.
          </p>
          <h2>5. Where it lives</h2>
          <p>
            Account data is stored in <strong>EU-West-1 (Ireland)</strong> by default; US customers may opt
            into US-East-1 (Virginia). Migration data is processed in the region nearest your Shopify shop's
            primary location and deleted within 30 days.
          </p>
          <h2>6. Security</h2>
          <ul>
            <li>TLS 1.3 in transit, AES-256 at rest</li>
            <li>SOC 2 Type II audit completed annually</li>
            <li>Least-privilege access; all production access is MFA-gated and audit-logged</li>
            <li>
              Bug bounty program - see <Link href="/contact">contact</Link> to participate
            </li>
          </ul>
          <h2>7. Your rights</h2>
          <p>Under GDPR, CCPA and similar laws, you can:</p>
          <ul>
            <li>Access the personal data we hold on you</li>
            <li>Correct or delete it</li>
            <li>Export it in a portable format</li>
            <li>Object to processing or withdraw consent</li>
            <li>Lodge a complaint with your local data protection authority</li>
          </ul>
          <p>
            Email <a href="mailto:team@shiftitnow.com">team@shiftitnow.com</a> with any request - we respond
            within 14 days.
          </p>
          <h2>8. Cookies</h2>
          <p>
            We use one first-party session cookie (required to log in). We do not use third-party analytics,
            advertising cookies, or fingerprinting. There is no cookie banner because there is nothing to
            consent to.
          </p>
          <h2>9. Children</h2>
          <p>ShiftItNow is a B2B product. We don't knowingly process data from anyone under 16.</p>
          <h2>10. Changes</h2>
          <p>
            If we make a material change, we'll email account holders at least 30 days before it takes effect.
            Minor edits are reflected in the "Last updated" date above.
          </p>
          <h2>11. Contact</h2>
          <p>
            Data Protection Officer
            <br /> ShiftItNow Inc.
            <br /> <a href="mailto:team@shiftitnow.com">team@shiftitnow.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}
