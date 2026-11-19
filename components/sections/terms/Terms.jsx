import Link from 'next/link';

export default function Terms() {
  return (
    <section className="section" style={{ background: 'var(--white)' }}>
      <div className="container">
        <div className="prose">
          <span className="updated">Last updated: 14 January 2026</span>
          <p>
            These Terms of Service ("Terms") govern your access to and use of ShiftItNow ("the Service")
            provided by ShiftItNow Inc. ("we", "us"). By installing or using the Service you accept these
            Terms.
          </p>
          <h2>1. The service</h2>
          <p>
            ShiftItNow is a Shopify app that migrates store data from a source platform (e.g. WooCommerce,
            Magento, Wix, Squarespace, BigCommerce, OpenCart) to a Shopify store. We provide the engine, the
            field mapping, and human support. You provide source access and a Shopify destination.
          </p>
          <h2>2. Your account</h2>
          <ul>
            <li>You must be 16 or older and have authority to bind your business.</li>
            <li>
              You're responsible for keeping credentials secure and notifying us of any unauthorized access.
            </li>
            <li>One Shopify shop per active subscription unless you're on the custom migration agreement.</li>
          </ul>
          <h2>3. Your data</h2>
          <p>
            You retain all rights to your store data. By using the Service you grant us a limited,
            non-exclusive license to process that data <em>solely</em> to perform the migration. We delete
            migration data within 30 days of project completion (sooner on request).
          </p>
          <p>
            See our <Link href="/privacy">Privacy Policy</Link> for full details on data handling.
          </p>
          <h2>4. Acceptable use</h2>
          <p>Don't use the Service to:</p>
          <ul>
            <li>Migrate data you don't own or have permission to migrate.</li>
            <li>Bypass rate limits, reverse-engineer the engine, or resell access.</li>
            <li>
              Move illegal content, malware, or anything that would violate Shopify's Acceptable Use Policy on
              the destination store.
            </li>
          </ul>
          <h2>5. Billing</h2>
          <ul>
            <li>Subscriptions are billed monthly or annually via Shopify Billing.</li>
            <li>One-off migration projects are quoted upfront and invoiced on project sign-off.</li>
            <li>All prices exclude applicable taxes (VAT, GST, sales tax). Taxes are added at checkout.</li>
            <li>
              Failed payments after 14 days result in suspension; data is preserved for 30 more days before
              deletion.
            </li>
          </ul>
          <h2>6. Cancellations & refunds</h2>
          <p>
            You can cancel any subscription at any time from your Shopify admin. We don't pro-rate unused time
            on monthly plans; annual plans are refunded for unused months minus any used migration credits.
          </p>
          <p>
            <strong>Migration guarantee:</strong> if we can't deliver a clean migration (defined as ≥99%
            record accuracy on the agreed scope), we refund 100% of the migration fee - no haggling, no forms.
          </p>
          <h2>7. Service availability</h2>
          <p>
            We target 99.9% monthly uptime on the migration engine and dashboard, measured at{' '}
            <Link href="/status">status.shiftitnow.app</Link>. Scheduled maintenance windows are announced 72
            hours in advance.
          </p>
          <h2>8. Warranties & liability</h2>
          <p>
            The Service is provided "as is" - we make no warranties beyond those expressly stated here and in
            our SLA. Our total liability for any claim is capped at the fees you paid us in the 12 months
            before the claim arose.
          </p>
          <p>
            Nothing in these Terms limits liability for fraud, gross negligence, or anything else that can't
            be limited under applicable law.
          </p>
          <h2>9. Termination</h2>
          <p>
            We can suspend or terminate the Service for material breach of these Terms with 14 days' written
            notice (or immediately for security or legal reasons). On termination, you can export your data
            for 30 days, after which it's deleted.
          </p>
          <h2>10. Changes</h2>
          <p>
            We may update these Terms with at least 30 days' notice for material changes (sent to account
            email). Continued use after the effective date means you accept the updated Terms.
          </p>
          <h2>11. Governing law</h2>
          <p>
            These Terms are governed by the laws of the State of Delaware, USA, without regard to its
            conflict-of-laws rules. Disputes will be resolved by arbitration in San Francisco, CA, except for
            injunctive relief which may be sought in any competent court.
          </p>
          <h2>12. Contact</h2>
          <p>
            Questions about these Terms? <a href="mailto:team@shiftitnow.com">team@shiftitnow.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}
