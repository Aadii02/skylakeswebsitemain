import React, { useState } from 'react';
import SlideButton from './SlideButton';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    loading: false,
    error: ''
  });

  const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    if (status.error) {
      setStatus((prev) => ({ ...prev, error: '' }));
    }
  };

  const validate = () => {
    const firstName = formData.firstName.trim();
    const email = formData.email.trim();

    if (!firstName) {
      return 'First name is required.';
    }
    if (!email) {
      return 'Email is required.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return 'Please enter a valid email address.';
    }
    return '';
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationError = validate();
    if (validationError) {
      setStatus({ submitted: false, loading: false, error: validationError });
      return;
    }

    if (!endpoint) {
      setStatus({
        submitted: false,
        loading: false,
        error: 'Signup endpoint is not configured yet. Set VITE_CONTACT_FORM_ENDPOINT to enable submissions.'
      });
      return;
    }

    setStatus({ submitted: false, loading: true, error: '' });

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: formData.firstName.trim(),
          lastName: formData.lastName.trim(),
          email: formData.email.trim()
        })
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setStatus({ submitted: true, loading: false, error: '' });
      setFormData({ firstName: '', lastName: '', email: '' });
    } catch {
      setStatus({
        submitted: false,
        loading: false,
        error: 'We could not submit right now. Please try again or email contact@skylakes.space.'
      });
    }
  };

  return (
    <section id="contact">
      <div className="community-section">
        <div className="community-inner">
          <div className="reveal">
            <div className="section-label">Stay Connected</div>
            <h2 className="section-title">Join the SKYLX<br/>Community</h2>
            <p className="community-sub">Be first to hear about launch updates, engineering breakthroughs, and India's next giant leap in space. No spam — only the stars.</p>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <input
                  className="form-input"
                  type="text"
                  placeholder="First Name"
                  aria-label="First Name"
                  value={formData.firstName}
                  onChange={handleChange('firstName')}
                  required
                />
                <input
                  className="form-input"
                  type="text"
                  placeholder="Last Name"
                  aria-label="Last Name"
                  value={formData.lastName}
                  onChange={handleChange('lastName')}
                />
              </div>
              <input
                className="form-email"
                type="email"
                placeholder="Your Email Address"
                aria-label="Email Address"
                value={formData.email}
                onChange={handleChange('email')}
                required
              />
              <SlideButton
                type="submit"
                disabled={status.loading || status.submitted}
                fullWidth={true}
              >
                {status.loading
                  ? 'Submitting...'
                  : status.submitted
                  ? "✓ You're On The List!"
                  : 'Launch Into the Network'}
              </SlideButton>
            </form>

            {status.error ? (
              <p style={{ color: '#fca5a5', marginTop: '12px', fontSize: '0.9rem' }}>{status.error}</p>
            ) : null}

            <div className="social-squares" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '32px' }}>
              <a href="mailto:Contact@skylakes.space" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: '24px 12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', color: 'var(--white)', textDecoration: 'none', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(96,165,250,0.1)'; e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.color = 'var(--accent)'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.color = 'var(--white)'; }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>Email</span>
              </a>
              <a href="https://www.linkedin.com/company/skylakes-aerospace/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: '24px 12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', color: 'var(--white)', textDecoration: 'none', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(96,165,250,0.1)'; e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.color = 'var(--accent)'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.color = 'var(--white)'; }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>LinkedIn</span>
              </a>
              <a href="https://www.instagram.com/skylx.space?igsh=bjBwMXgzdm84azg0" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '12px', padding: '24px 12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', color: 'var(--white)', textDecoration: 'none', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(96,165,250,0.1)'; e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.color = 'var(--accent)'; }} onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.color = 'var(--white)'; }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>Instagram</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
