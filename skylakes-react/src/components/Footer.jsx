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
        <a href="#" className="social-btn">𝕏</a>
        <a href="#" className="social-btn">in</a>
        <a href="#" className="social-btn">▶</a>
        <a href="#" className="social-btn">ig</a>
      </div>
    </div>
    <div>
      <div className="footer-col-title">Company</div>
      <ul className="footer-links">
        <li><a href="#">About Us</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Press</a></li>
        <li><a href="#">Investors</a></li>
      </ul>
    </div>
    <div>
      <div className="footer-col-title">Technology</div>
      <ul className="footer-links">
        <li><a href="#">Rocket Systems</a></li>
        <li><a href="#">Payloads</a></li>
        <li><a href="#">Ground Systems</a></li>
        <li><a href="#">R&D</a></li>
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
