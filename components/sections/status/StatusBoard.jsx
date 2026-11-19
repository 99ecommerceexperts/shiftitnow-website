import Link from 'next/link';

export default function StatusBoard() {
  return (
    <section className="section" style={{ background: 'var(--off-white)' }}>
      <div className="container" style={{ maxWidth: '880px' }}>
        <div className="status-overall">
          <span className="status-overall-dot"></span>
          <div className="status-overall-text">
            <strong>All systems operational</strong> <span>Updated just now · 90-day uptime: 99.987%</span>
          </div>
        </div>
        <h2 style={{ fontSize: '1.25rem', margin: '8px 0 18px', color: 'var(--gray-900)' }}>Core services</h2>
        <div className="status-grid">
          <div className="status-row">
            <div className="status-row-name">
              <strong>Migration engine</strong> <span>Processing migrations and delta syncs</span>
              <div className="uptime-strip" aria-label="90-day uptime">
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span> <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span> <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span> <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span> <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span> <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
              </div>
            </div>
            <span className="status-pill status-pill-ok">
              <span className="status-pill-dot"></span> Operational
            </span>
          </div>
          <div className="status-row">
            <div className="status-row-name">
              <strong>Merchant dashboard</strong> <span>app.shiftitnow.app</span>
              <div className="uptime-strip" aria-label="90-day uptime">
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span> <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span> <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span> <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span> <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span> <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
              </div>
            </div>
            <span className="status-pill status-pill-ok">
              <span className="status-pill-dot"></span> Operational
            </span>
          </div>
          <div className="status-row">
            <div className="status-row-name">
              <strong>Public API</strong> <span>api.shiftitnow.app</span>
              <div className="uptime-strip" aria-label="90-day uptime">
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span> <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span> <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span> <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span> <span className="uptime-bar uptime-bar-warn"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span> <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
              </div>
            </div>
            <span className="status-pill status-pill-ok">
              <span className="status-pill-dot"></span> Operational
            </span>
          </div>
          <div className="status-row">
            <div className="status-row-name">
              <strong>Webhook delivery</strong> <span>Outbound webhooks to your apps</span>
              <div className="uptime-strip" aria-label="90-day uptime">
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span> <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span> <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span> <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span> <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span> <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
                <span className="uptime-bar"></span>
              </div>
            </div>
            <span className="status-pill status-pill-ok">
              <span className="status-pill-dot"></span> Operational
            </span>
          </div>
        </div>
        <h2 style={{ fontSize: '1.25rem', margin: '40px 0 18px', color: 'var(--gray-900)' }}>
          Platform connectors
        </h2>
        <div className="status-grid">
          <div className="status-row">
            <div className="status-row-name">
              <strong>WooCommerce</strong>
              <span>REST API connector</span>
            </div>
            <span className="status-pill status-pill-ok">
              <span className="status-pill-dot"></span> Operational
            </span>
          </div>
          <div className="status-row">
            <div className="status-row-name">
              <strong>Magento / Adobe Commerce</strong>
              <span>REST + bridge module</span>
            </div>
            <span className="status-pill status-pill-ok">
              <span className="status-pill-dot"></span> Operational
            </span>
          </div>
          <div className="status-row">
            <div className="status-row-name">
              <strong>Wix</strong>
              <span>Wix Stores OAuth</span>
            </div>
            <span className="status-pill status-pill-ok">
              <span className="status-pill-dot"></span> Operational
            </span>
          </div>
          <div className="status-row">
            <div className="status-row-name">
              <strong>Squarespace</strong>
              <span>Commerce API</span>
            </div>
            <span className="status-pill status-pill-warn">
              <span className="status-pill-dot"></span> Degraded - vendor
            </span>
          </div>
          <div className="status-row">
            <div className="status-row-name">
              <strong>BigCommerce</strong>
              <span>Management API v2/v3 connector</span>
            </div>
            <span className="status-pill status-pill-ok">
              <span className="status-pill-dot"></span> Operational
            </span>
          </div>
          <div className="status-row">
            <div className="status-row-name">
              <strong>OpenCart</strong>
              <span>Guided connector</span>
            </div>
            <span className="status-pill status-pill-ok">
              <span className="status-pill-dot"></span> Operational
            </span>
          </div>
          <div className="status-row">
            <div className="status-row-name">
              <strong>Shopify destination</strong>
              <span>Admin API + GraphQL</span>
            </div>
            <span className="status-pill status-pill-ok">
              <span className="status-pill-dot"></span> Operational
            </span>
          </div>
        </div>
        <h2 style={{ fontSize: '1.25rem', margin: '40px 0 18px', color: 'var(--gray-900)' }}>
          Recent incidents
        </h2>
        <div className="status-grid">
          <div className="status-row">
            <div className="status-row-name">
              <strong>Squarespace connector - degraded response times</strong>{' '}
              <span>
                Vendor-side rate limiting affecting new connections · 12 Jan 2026 · Ongoing, monitoring
              </span>
            </div>
            <span className="status-pill status-pill-warn">
              <span className="status-pill-dot"></span> Monitoring
            </span>
          </div>
          <div className="status-row">
            <div className="status-row-name">
              <strong>Public API - elevated 5xx errors</strong>{' '}
              <span>15 min partial outage caused by a deploy regression · 04 Jan 2026 · Resolved</span>
            </div>
            <span className="status-pill status-pill-ok">
              <span className="status-pill-dot"></span> Resolved
            </span>
          </div>
          <div className="status-row">
            <div className="status-row-name">
              <strong>Scheduled maintenance - engine v4.2</strong>{' '}
              <span>
                22 min planned downtime, all migrations paused and resumed cleanly · 18 Dec 2025 · Completed
              </span>
            </div>
            <span className="status-pill status-pill-ok">
              <span className="status-pill-dot"></span> Completed
            </span>
          </div>
        </div>
        <p style={{ marginTop: '40px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          Subscribe to status updates:{' '}
          <Link href="/contact" className="link-accent">
            contact us
          </Link>{' '}
          · RSS feed at <code>/status.rss</code>
        </p>
      </div>
    </section>
  );
}
