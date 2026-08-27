import React, { useState } from 'react';
import SlideButton from './SlideButton';
import { TILE_CHANNELS } from '../data/communityIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitted: false,
    loading: false,
    error: ''
  });

  const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT || 'https://formsubmit.co/ajax/contact@skylakes.space';

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

    setStatus({ submitted: false, loading: true, error: '' });

    try {
      const fullName = `${formData.firstName.trim()} ${formData.lastName.trim()}`.trim();
      const visitorMessage = formData.message.trim();
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: fullName,
          email: formData.email.trim(),
          subject: 'New SKYLX Enquiry',
          message: `New enquiry from ${fullName || 'Unknown Name'} (${formData.email.trim()}) via skylakes.space contact form.\n\nVisitor message:\n${visitorMessage || 'No additional message provided.'}`
        })
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setStatus({ submitted: true, loading: false, error: '' });
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    } catch {
      setStatus({
        submitted: false,
        loading: false,
        error: 'We could not submit right now. Please try again or email contact@skylakes.space.'
      });
    }
  };

  return (
    <>
      <section id="contact">
        <div className="community-section">
          <div className="community-inner">
            <div className="reveal">
              <div className="section-label">Stay Connected</div>
              <h2 className="section-title">Join the SKYLX<br/>Community</h2>
              <p className="community-sub">
                Before SkyLakes builds rockets, it&apos;s building a community of people who care
                about rockets. This is where that happens — students, hobbyists, and engineers
                comparing builds, debating designs, and getting the first look at every
                milestone. If you&apos;re curious about how a reusable launch vehicle actually gets
                made in India, this is the room to be in.
              </p>
            </div>
            <div className="reveal" style={{ transitionDelay: '0.15s' }}>
              <div className="social-squares">
                {TILE_CHANNELS.map(({ key, label, href, icon }) => (
                  <a
                    key={key}
                    className="social-square"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {icon}
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ask">
        <div className="community-section ask-section">
          <div className="community-inner">
            <div className="reveal">
              <div className="section-label">Get in Touch</div>
              <h2 className="section-title">More Questions?</h2>
              <p className="community-sub">
                Payload enquiry, press, partnership, or just curious how any of this works —
                fill in the form and send it our way. We read every one.
              </p>
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
              <textarea
                className="form-email"
                placeholder="Your Message (Optional)"
                aria-label="Message"
                value={formData.message}
                onChange={handleChange('message')}
                rows={3}
                maxLength={1000}
                style={{ marginTop: '12px', minHeight: '96px', resize: 'vertical' }}
              />
              <SlideButton
                type="submit"
                disabled={status.loading || status.submitted}
                fullWidth={true}
              >
                {status.loading
                  ? 'Submitting...'
                  : status.submitted
                  ? '✓ Message Received'
                  : 'Send It Our Way'}
              </SlideButton>
            </form>

            {status.error ? (
              <p style={{ color: '#fca5a5', marginTop: '12px', fontSize: '0.9rem' }}>{status.error}</p>
            ) : null}

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
