export default function AdminDashboard() {
  const stats = [
    { label: 'Enrollments', value: '128' },
    { label: 'Revenue', value: '₹48.2k' },
    { label: 'Active learners', value: '82' },
  ];

  return (
    <section className="page-top">
      <div className="section-header">
        <span className="eyebrow">Admin dashboard</span>
        <h1>Operations overview</h1>
      </div>

      <div className="stats-grid admin-grid">
        {stats.map((item) => (
          <div key={item.label} className="stat-box admin-box">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="card-surface">
          <h3>Recent enrollments</h3>
          <ul className="stack-list">
            <li>Ritika — Starter Accelerator</li>
            <li>Imran — Business Bootcamp</li>
            <li>Sameera — Signature Growth</li>
          </ul>
        </div>

        <div className="card-surface">
          <h3>Security check</h3>
          <p>Use Firebase custom claims to grant admin access.</p>
          <p className="muted">Only authenticated admins should create or update course documents.</p>
        </div>
      </div>
    </section>
  );
}
