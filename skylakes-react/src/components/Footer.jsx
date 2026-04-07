import React from 'react';


export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
    <div className="footer-brand">
      <div className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
        <img src={`${import.meta.env.BASE_URL}logo.png`} alt="SKYLX Logo" style={{ height: '40px', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; document.getElementById('footer-fallback-text').style.display = 'block'; }} />
        <span id="footer-fallback-text" style={{ display: 'none', fontSize: '1.2rem' }}>SKYLX AeroSpace</span>
      </div>
      <p className="footer-tagline">Reaching Further. Building Smarter.<br/>India's commercial space future starts here.</p>
      <div className="footer-social">
        <a href="mailto:contact@skylakes.space" className="social-btn" aria-label="Email SKYLX">@</a>
        <a href="https://www.linkedin.com/company/skylakes-aerospace/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="SKYLX on LinkedIn">in</a>
        <a href="https://www.instagram.com/skylx.space/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="SKYLX on Instagram">ig</a>
      </div>
    </div>
    <div>
      <div className="footer-col-title">Company</div>
      <ul className="footer-links">
        <li><a href="#mission">About Us</a></li>
        <li><a href="mailto:contact@skylakes.space?subject=Career%20Inquiry%20at%20SKYLX">Careers</a></li>
        <li><a href="mailto:contact@skylakes.space?subject=Press%20Inquiry%20at%20SKYLX">Press</a></li>
        <li><a href="mailto:contact@skylakes.space?subject=Investor%20Relations%20at%20SKYLX">Investors</a></li>
      </ul>
    </div>
    <div>
      <div className="footer-col-title">Technology</div>
      <ul className="footer-links">
        <li><a href="#vehicles">Rocket Systems</a></li>
        <li><a href="#vehicles">Payloads</a></li>
        <li><a href="#tech">Ground Systems</a></li>
        <li><a href="#tech">R&amp;D</a></li>
      </ul>
    </div>
    <div>
      <div className="footer-col-title">About</div>
      <p style={{ color: 'var(--muted)', fontSize: '0.875rem', lineHeight: '1.75' }}>SKYLX AeroSpace is pioneering India's private space revolution — building the rockets that will carry India's ambitions to orbit and beyond.</p>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="footer-copy">© 2026 SKYLX AeroSpace Pvt. Ltd. All rights reserved.</div>
    <div className="footer-made">Made in <span>India 🇮🇳</span> for the Universe</div>
  </div>
    </footer>
  );
}
