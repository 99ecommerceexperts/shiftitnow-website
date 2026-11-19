export default function ComparisonTable() {
  return (
    <section className="section compare-section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot"></span> Side by side
          </span>
          <h2>What migrates, by platform.</h2>
          <p className="section-sub">
            Every platform stores data differently. Here's the honest cheat-sheet for what comes across in
            each migration.
          </p>
        </div>
        <div className="compare-wrap">
          <table className="compare-table">
            <thead>
              <tr>
                <th>Capability</th>
                <th>
                  <span className="compare-platform-cell">
                    <span className="compare-logo" style={{ background: '#7b519c' }}>
                      <img src="/assets/Logo-White.webp" alt="" />
                    </span>{' '}
                    Woo
                  </span>
                </th>
                <th>
                  <span className="compare-platform-cell">
                    <span className="compare-logo" style={{ background: '#f26322' }}>
                      <img
                        src="/assets/magento-2-logo-svgrepo-com.svg"
                        alt=""
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </span>{' '}
                    Magento
                  </span>
                </th>
                <th>
                  <span className="compare-platform-cell">
                    <span className="compare-logo" style={{ background: '#0c6efc' }}>
                      <img
                        src="/assets/wix-svgrepo-com.svg"
                        alt=""
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </span>{' '}
                    Wix
                  </span>
                </th>
                <th>
                  <span className="compare-platform-cell">
                    <span className="compare-logo" style={{ background: '#000' }}>
                      <img src="/assets/squarespace-svgrepo-com.svg" alt="" />
                    </span>{' '}
                    Squarespace
                  </span>
                </th>
                <th>
                  <span className="compare-platform-cell">
                    <span className="compare-logo" style={{ background: '#34313f' }}>
                      <img
                        src="/assets/bigcommerce-svgrepo-com.svg"
                        alt=""
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </span>{' '}
                    BigCommerce
                  </span>
                </th>
                <th>
                  <span className="compare-platform-cell">
                    <span className="compare-logo" style={{ background: '#f15a24' }}>
                      <img
                        src="/assets/opencart-svgrepo-com.svg"
                        alt=""
                        style={{ filter: 'brightness(0) invert(1)' }}
                      />
                    </span>{' '}
                    OpenCart
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Products</th>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
              </tr>
              <tr>
                <th>Customers</th>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
              </tr>
              <tr>
                <th>Orders</th>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
              </tr>
              <tr>
                <th>Pages</th>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
              </tr>
              <tr>
                <th>Blog posts</th>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
              </tr>
              <tr>
                <th>Status</th>
                <td>
                  <span
                    className="compare-partial"
                    style={{ background: 'rgba(34, 160, 107, 0.12)', color: '#1a7a4d' }}
                  >
                    Live
                  </span>
                </td>
                <td>
                  <span
                    className="compare-partial"
                    style={{ background: 'rgba(34, 160, 107, 0.12)', color: '#1a7a4d' }}
                  >
                    Live
                  </span>
                </td>
                <td>
                  <span
                    className="compare-partial"
                    style={{ background: 'rgba(34, 160, 107, 0.12)', color: '#1a7a4d' }}
                  >
                    Live
                  </span>
                </td>
                <td>
                  <span
                    className="compare-partial"
                    style={{ background: 'rgba(34, 160, 107, 0.12)', color: '#1a7a4d' }}
                  >
                    Live
                  </span>
                </td>
                <td>
                  <span
                    className="compare-partial"
                    style={{ background: 'rgba(34, 160, 107, 0.12)', color: '#1a7a4d' }}
                  >
                    Live
                  </span>
                </td>
                <td>
                  <span
                    className="compare-partial"
                    style={{ background: 'rgba(34, 160, 107, 0.12)', color: '#1a7a4d' }}
                  >
                    Live
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="compare-note">
          Scroll horizontally to see all platforms · "Partial" features are available on Scale; contact us for
          requirements beyond its limits
        </p>
      </div>
    </section>
  );
}
