import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  const faqs = [
    {
      q: "How does Reusable Landing Tech work?",
      a: "Our launch vehicles autonomously return to the launch pad or offshore droneships using propulsive vertical landing. This slashes turnaround times to just days instead of months and creates a highly sustainable mission cycle."
    },
    {
      q: "Why repurpose automotive parts?",
      a: "By adapting proven, mass-manufactured automotive components for aerospace applications, we bypass the immense costs of custom aerospace tooling. We leverage India's massive, established automotive supply chain to dramatically reduce our manufacturing costs without sacrificing reliability."
    },
    {
      q: "What is the Rideshare Launch Service?",
      a: "Think of it as a 'carpool for satellites'. Instead of paying for a dedicated rocket, multiple clients split the payload capacity of a single launch. This maximizes the efficiency of every launch and minimizes the per-mission cost for small satellite operators."
    },
    {
      q: "Where is SKYLX based and where will it launch from?",
      a: "SKYLX AeroSpace is headquartered in Bengaluru, India. Our primary launch operations leverage existing spaceport infrastructure on India's east coast alongside offshore drone-ship recovery systems."
    },
    {
      q: "How can I book a ride on an upcoming launch?",
      a: "We welcome partnerships and payload bookings directly through our commercial team. Reach out via the contact form below and a rideshare coordinator will connect with you within 48 hours to secure a flight slot."
    }
  ];

  return (
    <section id="faq">
      <div className="faq-section" style={{ maxWidth: '800px', margin: '0 auto', padding: '120px 20px' }}>
        <div className="faq-header reveal">
          <div className="section-label">Got Questions?</div>
          <h2 className="section-title" style={{ fontSize: '2.8rem', marginBottom: '16px' }}>Frequently Asked</h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.05rem' }}>Everything you need to know about our approach to space access.</p>
        </div>

        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '16px', animationDelay: '0.2s' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                onClick={() => toggleFaq(idx)}
                layout
                style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderColor: 'rgba(255, 255, 255, 0.05)',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderRadius: '24px',
                  padding: '24px 32px',
                  cursor: 'pointer',
                  overflow: 'hidden'
                }}
                whileHover={{ 
                  background: 'rgba(96, 165, 250, 0.05)',
                  borderColor: 'rgba(96, 165, 250, 0.6)',
                  y: -2 
                }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ 
                    color: isOpen ? 'var(--accent)' : 'var(--white)', 
                    fontSize: '1.15rem', 
                    fontWeight: '600',
                    transition: 'color 0.3s ease',
                    margin: 0
                  }}>
                    {faq.q}
                  </h3>
                  <motion.div 
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: isOpen ? 'var(--accent)' : 'rgba(255, 255, 255, 0.08)',
                      color: isOpen ? '#000' : 'var(--white)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.4rem',
                      flexShrink: 0
                    }}
                  >
                    +
                  </motion.div>
                </div>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: '24px' }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    >
                      <p style={{ color: 'var(--muted2)', lineHeight: '1.7', fontSize: '0.95rem', margin: 0 }}>
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
