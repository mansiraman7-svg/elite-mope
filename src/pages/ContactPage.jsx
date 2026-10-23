export default function ContactPage() {
  return (
    <section className="page-top">
      <div className="section-header">
        <span className="eyebrow">Contact</span>
        <h1>Let’s talk about your next step.</h1>
      </div>

      <div className="contact-grid">
        <div className="card-surface">
          <h3>Connect</h3>
          <ul className="contact-list">
            <li>Email: hello@elitemope.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Instagram: @elitemopebymd</li>
          </ul>
        </div>

        <form className="card-surface contact-form">
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea rows="4" placeholder="Tell us what you need help with" />
          </label>
          <button type="button" className="primary-btn">Send message</button>
        </form>
      </div>
    </section>
  );
}
