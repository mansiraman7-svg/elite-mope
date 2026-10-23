import { Link } from 'react-router-dom';

export default function HomePage() {
  const stats = [
    { label: 'Courses', value: '03' },
    { label: 'Students', value: '450+' },
    { label: 'Success stories', value: '92%' },
  ];

  return (
    <>
      <section className="hero-panel">
        <div className="hero-copy">
          <span className="eyebrow">Growth. Clarity. Confidence.</span>
          <h1>Premium learning experiences for ambitious professionals.</h1>
          <p>
            Elite Mope by MD helps founders, creators, and growth-minded learners turn ambition into a clear, repeatable path.
          </p>

          <div className="cta-row">
            <Link to="/courses" className="primary-btn">Explore courses</Link>
            <Link to="/about" className="secondary-btn">Why Elite Mope</Link>
          </div>

          <div className="stats-grid">
            {stats.map((item) => (
              <div key={item.label} className="stat-box">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-card card-surface">
          <p className="mini-label">Featured track</p>
          <h3>Business Bootcamp</h3>
          <ul>
            <li>Position your offer clearly</li>
            <li>Build conversion systems</li>
            <li>Scale with confidence</li>
          </ul>
          <div className="price-box">₹999</div>
          <Link to="/courses/business-bootcamp" className="primary-btn small-button">
            Enroll now
          </Link>
        </div>
      </section>

      <section className="section-block">
        <div className="section-header center">
          <span className="eyebrow">Why students choose us</span>
          <h2>Designed for clarity, conversion, and momentum.</h2>
        </div>

        <div className="feature-grid">
          <div className="feature-card card-surface">
            <h3>Practical frameworks</h3>
            <p>Simple systems tailored to real business situations and learner goals.</p>
          </div>
          <div className="feature-card card-surface">
            <h3>Premium support</h3>
            <p>Clear guidance, accountability structure, and direct action plans.</p>
          </div>
          <div className="feature-card card-surface">
            <h3>Mobile-first access</h3>
            <p>Study on your phone, view progress, and work from anywhere.</p>
          </div>
        </div>
      </section>
    </>
  );
}
