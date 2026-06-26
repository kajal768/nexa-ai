import { useState } from "react";
import "./Header.css";

function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <nav className="container nav-shell" aria-label="Primary Navigation">
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-icon"><i className="bi bi-cpu"></i></span>
          <span>NexaAI</span>
        </a>

        <ul className="nav-links desktop-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#testimonials">Proof</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="#pricing" className="nav-cta desktop-cta">
          Get Started <i className="bi bi-arrow-right-short"></i>
        </a>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`}></i>
        </button>
      </nav>

      <div className={`mobile-overlay ${open ? "show" : ""}`} onClick={closeMenu}></div>

      <aside className={`mobile-drawer ${open ? "show" : ""}`} aria-label="Mobile Navigation">
        <div className="drawer-top">
          <span className="drawer-label">Navigation</span>
          <button onClick={closeMenu} aria-label="Close menu">
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <a onClick={closeMenu} href="#home"><i className="bi bi-house-door"></i> Home</a>
        <a onClick={closeMenu} href="#features"><i className="bi bi-grid-1x2"></i> Features</a>
        <a onClick={closeMenu} href="#pricing"><i className="bi bi-credit-card"></i> Pricing</a>
        <a onClick={closeMenu} href="#testimonials"><i className="bi bi-chat-heart"></i> Proof</a>
        <a onClick={closeMenu} href="#contact"><i className="bi bi-envelope"></i> Contact</a>

        <a onClick={closeMenu} href="#pricing" className="drawer-cta">
          Start Automating <i className="bi bi-arrow-right-short"></i>
        </a>
      </aside>
    </header>
  );
}

export default Header;