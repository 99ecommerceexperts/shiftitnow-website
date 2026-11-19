export default function AlternativesComparison() {
  return (
    <section className="section compare-section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot"></span> The honest comparison
          </span>
          <h2>ShiftItNow vs. the alternatives.</h2>
          <p className="section-sub">
            There are other ways to move a store. Most are slower, lossier, or both. Here's the side-by-side.
          </p>
        </div>
        <div className="compare-wrap">
          <table className="compare-table">
            <thead>
              <tr>
                <th>Capability</th>
                <th>ShiftItNow</th>
                <th>Generic migration apps</th>
                <th>Manual CSV export</th>
                <th>Hire an agency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Free demo migration on real data</th>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-partial">Sample only</span>
                </td>
                <td>
                  <span className="compare-no">×</span>
                </td>
                <td>
                  <span className="compare-no">×</span>
                </td>
              </tr>
              <tr>
                <th>Customers + order history</th>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-partial">Customers only</span>
                </td>
                <td>
                  <span className="compare-partial">Manual reconcile</span>
                </td>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
              </tr>
              <tr>
                <th>Auto 301 SEO redirects</th>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-no">×</span>
                </td>
                <td>
                  <span className="compare-no">×</span>
                </td>
                <td>
                  <span className="compare-partial">If asked</span>
                </td>
              </tr>
              <tr>
                <th>Smart field mapping (metafields)</th>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-no">×</span>
                </td>
                <td>
                  <span className="compare-no">×</span>
                </td>
                <td>
                  <span className="compare-partial">If asked</span>
                </td>
              </tr>
              <tr>
                <th>Delta sync during cutover</th>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-no">×</span>
                </td>
                <td>
                  <span className="compare-no">×</span>
                </td>
                <td>
                  <span className="compare-partial">Sometimes</span>
                </td>
              </tr>
              <tr>
                <th>7-day one-click rollback</th>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-no">×</span>
                </td>
                <td>
                  <span className="compare-no">×</span>
                </td>
                <td>
                  <span className="compare-no">×</span>
                </td>
              </tr>
              <tr>
                <th>Refund if migration fails</th>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-no">×</span>
                </td>
                <td>
                  <span className="compare-no">N/A</span>
                </td>
                <td>
                  <span className="compare-no">×</span>
                </td>
              </tr>
              <tr>
                <th>24/7 human migration support</th>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
                <td>
                  <span className="compare-partial">Email only</span>
                </td>
                <td>
                  <span className="compare-no">×</span>
                </td>
                <td>
                  <span className="compare-yes">✓</span>
                </td>
              </tr>
              <tr>
                <th>Typical timeline</th>
                <td>2 hrs – 3 days</td>
                <td>1–7 days</td>
                <td>2–4 weeks</td>
                <td>4–8 weeks</td>
              </tr>
              <tr>
                <th>Typical cost (10k SKUs)</th>
                <td>Free / $49 / $99 (one-time)</td>
                <td>$200–$600</td>
                <td>Free (your time)</td>
                <td>$8k–$25k</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="compare-note">
          Comparison reflects publicly stated capabilities as of January 2026. Independent review of
          capabilities welcomed.
        </p>
      </div>
    </section>
  );
}
