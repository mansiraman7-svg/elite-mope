export default function StudentDashboard() {
  const upcoming = [
    { title: 'Brand positioning session', date: 'Tue • 7:30 PM' },
    { title: 'Offer refinement sprint', date: 'Thu • 8:00 PM' },
  ];

  return (
    <section className="page-top">
      <div className="section-header">
        <span className="eyebrow">Student dashboard</span>
        <h1>Welcome back, learner.</h1>
      </div>

      <div className="dashboard-grid">
        <div className="card-surface">
          <h3>Progress</h3>
          <div className="progress-rail">
            <span style={{ width: '72%' }} />
          </div>
          <p>72% completed</p>
        </div>

        <div className="card-surface">
          <h3>Upcoming sessions</h3>
          <ul className="stack-list">
            {upcoming.map((item) => (
              <li key={item.title}>{item.title} <span>{item.date}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
