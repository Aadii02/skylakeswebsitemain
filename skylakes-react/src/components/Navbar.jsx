import React from 'react';


export default function Navbar() {
  return (
    <nav>
      <div className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
    <img src={`${import.meta.env.BASE_URL}logo.png`} alt="SKYLX Logo" style={{ height: '72px', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; document.getElementById('nav-fallback-text').style.display = 'block'; }} />
    <span id="nav-fallback-text" style={{ display: 'none' }}>SKYLX</span>
  </div>
  <ul className="nav-links">
    <li><a href="#mission">Mission</a></li>
    <li><a href="#vehicles">Vehicles</a></li>
    <li><a href="#tech">Technology</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <a href="#contact" className="btn-primary" style={{ fontSize: '0.65rem', padding: '12px 24px' }}>Launch With Us</a>
    </nav>
  );
}
