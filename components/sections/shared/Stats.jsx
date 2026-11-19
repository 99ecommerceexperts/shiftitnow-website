import StatNum from '@/components/ui/StatNum';

const STATS = [
  { target: '1', unit: 'M+', label: 'Products migrated to Shopify' },
  { target: '50', unit: '+', label: 'Merchants moved successfully' },
  { target: '99.98', unit: '%', label: 'Data accuracy guarantee' },
  {
    target: '24',
    unit: (
      <>
        <span className="stat-slash">/</span>7
      </>
    ),
    label: 'Expert support availability',
  },
];

export default function Stats() {
  return (
    <section className="section stats">
      <div className="container">
        <div className="stat-grid">
          {STATS.map((stat) => (
            <div className="stat" key={stat.label}>
              <div className="stat-value">
                <StatNum target={stat.target} />
                <div className="stat-unit">{stat.unit}</div>
              </div>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
