import React from 'react';


export default function Blog() {
  return (
    <section id="blog">
      <div className="blog-section">
    <div className="blog-inner">
      <div className="blog-header reveal">
        <div>
          <div className="section-label">Latest Updates</div>
          <h2 className="section-title">Beyond Earth Blog</h2>
        </div>
        <a href="#" className="btn-outline" style={{ whiteSpace: 'nowrap' }}>View All Posts</a>
      </div>
      <div className="blog-grid">
        <div className="blog-card reveal">
          <img className="blog-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISRO_headquarters.jpg/1280px-ISRO_headquarters.jpg" alt="Blog 1" loading="lazy" decoding="async" />
          <div className="blog-body">
            <span className="blog-tag">Technology</span>
            <div className="blog-title">How Reusable Rockets Will Halve India's Launch Costs by 2027</div>
            <p className="blog-excerpt">An inside look at SKYLX' propulsion roadmap and what it means for commercial satellite operators across South Asia.</p>
          </div>
        </div>
        <div className="blog-card reveal" style={{ transitionDelay: '0.15s' }}>
          <img className="blog-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/PSLV-C37_lifts_off.jpg/800px-PSLV-C37_lifts_off.jpg" alt="Blog 2" loading="lazy" decoding="async" />
          <div className="blog-body">
            <span className="blog-tag">Industry</span>
            <div className="blog-title">India's Space Economy: From ₹16,000 Cr to ₹1 Trillion by 2040</div>
            <p className="blog-excerpt">The Indian space sector is at an inflection point. SKYLX breaks down the opportunities, challengers, and the massive growth ahead.</p>
          </div>
        </div>
        <div className="blog-card reveal" style={{ transitionDelay: '0.3s' }}>
          <div style={{ width: '100%', height: '200px', background: 'linear-gradient(135deg, #0d1b2a 0%, #1e3a5f 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="30" stroke="rgba(96,165,250,0.4)" strokeWidth="1"/>
              <circle cx="40" cy="40" r="20" stroke="rgba(96,165,250,0.3)" strokeWidth="1"/>
              <circle cx="40" cy="40" r="8" fill="rgba(96,165,250,0.5)"/>
              <path d="M40 10 V18 M40 62 V70 M10 40 H18 M62 40 H70" stroke="rgba(96,165,250,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div className="blog-body">
            <span className="blog-tag">Mission</span>
            <div className="blog-title">SKYLX Announces Partnership with Indian Defence Research Lab</div>
            <p className="blog-excerpt">A new collaboration accelerating hypersonic vehicle research and dual-use aerospace technologies for national security and commercial applications.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </section>
  );
}
