import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StarsBackground from '../components/StarsBackground';
import Footer from '../components/Footer';
import posts from '../data/blogPosts';

const featuredStory = {
  tag: 'Featured Analysis',
  title: 'Why reusable small-lift systems change the launch economics',
  excerpt:
    'SkyLakes Aerospace is engineering a reusable launch stack built around cost per kilogram, fast turnaround, and high-frequency access to orbit. This is the operating model that turns launch from a rare event into a repeatable service.',
};

const articles = posts;

const signalCards = [
  {
    title: 'Reusable architecture',
    text: 'Design decisions optimized for repeat flight, rapid refurbishment, and lower marginal cost per launch.',
  },
  {
    title: 'High-frequency launches',
    text: 'A system built for operational cadence, not one-off demonstrations.',
  },
  {
    title: 'Vertically integrated',
    text: 'Propulsion, avionics, structures, and recovery systems under one engineering stack.',
  },
];

function NewsletterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topics, setTopics] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const url = 'https://formspree.io/f/YOUR_FORM_ID';
    try {
      const form = new FormData();
      form.append('name', name);
      form.append('email', email);
      form.append('topics', topics);

      const res = await fetch(url, {
        method: 'POST',
        body: form,
        headers: {
          Accept: 'application/json',
        },
      });

      if (res.ok) {
        setStatus('thanks');
        setName('');
        setEmail('');
        setTopics('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="reveal" style={{ display: 'grid', gap: '16px', maxWidth: '720px', margin: '0 auto' }}>
      <div className="form-row">
        <input value={name} onChange={(e) => setName(e.target.value)} name="name" className="form-input" type="text" placeholder="Your name" aria-label="Your name" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" className="form-input" type="email" placeholder="Email address" aria-label="Email address" required />
      </div>
      <textarea
        value={topics}
        onChange={(e) => setTopics(e.target.value)}
        name="topics"
        className="form-email"
        placeholder="What topics do you want updates on?"
        aria-label="Topics of interest"
        rows="4"
        style={{ resize: 'vertical', marginBottom: '0' }}
      />
      <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginTop: '8px' }}>
        <button className="btn-primary" type="submit">{status === 'sending' ? 'Sending…' : 'Join Updates'}</button>
        <Link to="/vehicles" className="btn-outline" style={{ textDecoration: 'none' }}>
          Explore Vehicles
        </Link>
      </div>
      {status === 'thanks' && <div className="form-success" style={{ color: 'var(--accent)', textAlign: 'center', marginTop: '8px' }}>Thanks — we sent a confirmation to your email.</div>}
      {status === 'error' && <div className="form-error" style={{ color: 'var(--accent)', textAlign: 'center', marginTop: '8px' }}>Something went wrong, please try again.</div>}
    </form>
  );
}

export default function BlogPage() {
  return (
    <>
      <StarsBackground />
      <main id="blog" style={{ paddingTop: '120px', minHeight: '100vh', position: 'relative', zIndex: 1 }}>
        <section className="blog-page-hero-section" style={{ padding: '40px 60px 0' }}>
          <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
            <div className="reveal" style={{ textAlign: 'center', marginBottom: '64px' }}>
              <div className="section-label">Latest Updates</div>
              <h1 className="section-title" style={{ marginBottom: '18px' }}>
                Beyond Earth Blog
              </h1>
              <p style={{ color: 'var(--muted2)', maxWidth: '820px', margin: '0 auto', lineHeight: '1.7', fontSize: '1.05rem' }}>
                Technical notes, market signals, and mission updates from SkyLakes Aerospace. The tone stays grounded: measured engineering, clear outcomes, and a deep-tech perspective.
              </p>
            </div>

            <div className="reveal" style={{ marginBottom: '24px' }}>
              <div
                className="blog-feature-panel"
                style={{
                  minHeight: '420px',
                  padding: '40px 32px',
                  border: '1px solid var(--border)',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  background:
                    'radial-gradient(circle at 50% 30%, rgba(96,165,250,0.18) 0%, transparent 28%), radial-gradient(circle at 50% 70%, rgba(30,64,175,0.22) 0%, transparent 26%), linear-gradient(135deg, rgba(4,6,13,0.98) 0%, rgba(8,13,26,0.96) 48%, rgba(12,18,35,0.98) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  boxShadow: '0 24px 80px rgba(0,0,0,0.25)',
                }}
              >
                <div className="blog-feature-label" style={{ color: 'var(--accent)', fontFamily: 'Montserrat, monospace', fontSize: '0.68rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '18px' }}>
                  Deep Tech / Blog
                </div>
                <div
                  className="blog-feature-title"
                  style={{
                    fontFamily: 'Barlow Condensed, sans-serif',
                    fontSize: 'clamp(1.8rem, 3.2vw, 3rem)',
                    lineHeight: 0.96,
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                    maxWidth: '14ch',
                  }}
                >
                  {featuredStory.title}
                </div>
                <div className="blog-feature-copy" style={{ color: 'var(--muted2)', lineHeight: '1.75', fontSize: '1rem', maxWidth: '58ch' }}>
                  {featuredStory.excerpt}
                </div>
                <div className="blog-feature-cta" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '28px' }}>
                  <Link to="/blog/reusable-launch-economics" className="btn-primary" style={{ textDecoration: 'none' }}>
                    Read Post
                  </Link>
                  <a href="#signals" className="btn-outline" style={{ textDecoration: 'none' }}>
                    Read More Posts
                  </a>
                </div>
              </div>
            </div>

            <div className="blog-page-side-grid" style={{ display: 'grid', gap: '16px', gridTemplateColumns: '1fr', marginBottom: '24px' }}>
              <div className="stat-card reveal" style={{ padding: '28px' }}>
                <div className="section-label" style={{ marginBottom: '12px' }}>Positioning</div>
                <h3 style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '2rem', textTransform: 'uppercase', marginBottom: '12px' }}>
                  Precision-driven deep tech
                </h3>
                <p style={{ color: 'var(--muted2)', lineHeight: '1.75', fontSize: '0.96rem' }}>
                  SkyLakes Aerospace is not framed as a generic startup. The content here reinforces technical credibility, operational discipline, and measurable launch outcomes.
                </p>
              </div>

              <div className="stat-card reveal" style={{ padding: '28px' }}>
                <div className="section-label" style={{ marginBottom: '12px' }}>Focus Areas</div>
                <div style={{ display: 'grid', gap: '14px' }}>
                  {signalCards.map((item) => (
                    <div key={item.title} style={{ paddingBottom: '14px', borderBottom: '1px solid var(--border)' }}>
                      <h4 style={{ marginBottom: '6px', fontSize: '1rem', color: 'var(--white)' }}>{item.title}</h4>
                      <p style={{ color: 'var(--muted2)', fontSize: '0.9rem', lineHeight: '1.7' }}>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="blog-page-signals-section" style={{ padding: '72px 60px 0' }} id="signals">
          <div className="blog-section" style={{ paddingTop: '0', paddingBottom: '0', background: 'transparent', borderTop: 'none' }}>
            <div className="blog-inner">
              <div className="blog-header reveal">
                <div>
                  <div className="section-label">Research Signals</div>
                  <h2 className="section-title">Engineering notes and market analysis</h2>
                </div>
                <a href="#signals" className="btn-outline" style={{ whiteSpace: 'nowrap', textDecoration: 'none' }}>
                  View All Posts
                </a>
              </div>

              <div className="blog-grid">
                {articles.map((post, index) => (
                  <Link
                    to={`/blog/${post.slug}`}
                    key={post.slug}
                    className="blog-card reveal"
                    style={{ transitionDelay: `${index * 0.12}s`, textDecoration: 'none', color: 'inherit' }}
                  >
                    <div
                      style={{
                        width: '100%',
                        height: '210px',
                        background: index === 0
                          ? 'linear-gradient(135deg, rgba(8,13,26,0.95) 0%, rgba(30,64,175,0.65) 100%)'
                          : index === 1
                            ? 'linear-gradient(135deg, rgba(4,6,13,0.95) 0%, rgba(96,165,250,0.5) 100%)'
                            : 'linear-gradient(135deg, rgba(10,16,32,0.95) 0%, rgba(59,130,246,0.55) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '24px',
                      }}
                    >
                      <div style={{ textAlign: 'center' }}>
                        <div className="blog-tag" style={{ marginBottom: '8px' }}>{post.tag}</div>
                        <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '2rem', textTransform: 'uppercase', lineHeight: 1.05 }}>
                          {index + 1}
                        </div>
                      </div>
                    </div>
                    <div className="blog-body">
                      <div style={{ color: 'var(--muted)', fontSize: '0.74rem', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '10px' }}>{post.meta}</div>
                      <div className="blog-title" style={{ fontSize: '1rem' }}>{post.title}</div>
                      <p className="blog-excerpt">{post.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="blog-page-newsletter-section" style={{ padding: '84px 60px 40px' }}>
          <div className="community-section" style={{ padding: '84px 0', marginTop: '20px' }}>
            <div className="community-inner">
              <div className="reveal">
                <div className="section-label">Mission Log</div>
                <h2 className="section-title">Stay close to the engineering cadence</h2>
                <p className="community-sub">
                  Get concise updates on reusable launch architecture, vehicle development, and the business of lowering cost per kilogram to orbit.
                </p>
              </div>
              <NewsletterForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
