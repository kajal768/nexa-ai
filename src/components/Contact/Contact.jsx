import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container contact-wrapper">
        <div className="contact-content">
          <span className="section-kicker">
            <i className="bi bi-send-fill"></i>
            Contact Sales
          </span>

          <h2 id="contact-title">Ready to automate your next workflow?</h2>

          <p>
            Tell us what you want to automate and our AI team will help you map
            the fastest path from manual work to intelligent execution.
          </p>

          <div className="contact-points">
            <div>
              <i className="bi bi-lightning-charge-fill"></i>
              <span>Fast onboarding</span>
            </div>

            <div>
              <i className="bi bi-shield-check"></i>
              <span>Secure AI workflows</span>
            </div>

            <div>
              <i className="bi bi-clock-history"></i>
              <span>24 hour response</span>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <label>
            <span>Name</span>
            <input type="text" placeholder="Your name" />
          </label>

          <label>
            <span>Email</span>
            <input type="email" placeholder="you@company.com" />
          </label>

          <label>
            <span>Company</span>
            <input type="text" placeholder="Company name" />
          </label>

          <label>
            <span>What do you want to automate?</span>
            <textarea placeholder="Tell us about your workflow..." rows="5"></textarea>
          </label>

          <button type="button">
            Send Request <i className="bi bi-arrow-right-short"></i>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;