import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-wrapper">
        <section className="footer-brand">
          <a href="#home" className="footer-logo">
            <span className="brand-icon">
              <i className="bi bi-cpu"></i>
            </span>
            <span>NexaAI</span>
          </a>

          <p>
            A premium AI automation platform built for modern teams that want
            faster workflows, cleaner decisions, and scalable operations.
          </p>

          <div className="footer-social">
            <a href="#" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
            <a href="#" aria-label="GitHub"><i className="bi bi-github"></i></a>
          </div>
        </section>

        <nav className="footer-links" aria-label="Footer Navigation">
          <div>
            <h4>Product</h4>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Testimonials</a>
          </div>

          <div>
            <h4>Platform</h4>
            <a href="#features">AI Engine</a>
            <a href="#features">Analytics</a>
            <a href="#features">Security</a>
          </div>

          <div>
            <h4>Contact</h4>
            <a href="mailto:hello@nexaai.com">hello@nexaai.com</a>
            <a href="#pricing">Start Free</a>
            <a href="#home">Book Demo</a>
          </div>
        </nav>
      </div>

      <div className="container footer-bottom">
        <p>© 2026 NexaAI. All rights reserved.</p>
        <span>Built for the Next-Gen AI Platform Speed Run.</span>
      </div>
    </footer>
  );
}

export default Footer;