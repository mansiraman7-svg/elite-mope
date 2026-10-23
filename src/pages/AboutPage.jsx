import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <section className="page-top">
      <div className="section-header">
        <span className="eyebrow">About Elite Mope</span>
        <h1>Built for people who want more than passive content.</h1>
      </div>

      <div className="text-grid">
        <div className="card-surface">
          <h3>Our mission</h3>
          <p>
            Elite Mope by MD creates practical growth systems that help students and professionals build stronger offers, sharper positioning, and better outcomes.
          </p>
        </div>
        <div className="card-surface">
          <h3>Our approach</h3>
          <p>
            We combine strategic insight, action-oriented learning, and sharp communication frameworks into a premium learning journey.
          </p>
        </div>
      </div>

      <div className="cta-row centered-row">
        <Link to="/courses" className="primary-btn">View courses</Link>
      </div>
    </section>
  );
}
