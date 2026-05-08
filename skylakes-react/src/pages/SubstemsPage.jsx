import React from 'react';
import { getVehicleCategory } from '../data/vehicles';
import TiltCard from '../components/TiltCard';
import StarsBackground from '../components/StarsBackground';
import Footer from '../components/Footer';

export default function SubstemsPage() {
  const category = getVehicleCategory('substems');

  if (!category) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>Category not found</div>;
  }

  return (
    <>
      <StarsBackground />
      <div style={{ minHeight: '100vh', paddingTop: '120px' }}>
        {/* Header */}
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px 80px' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div
              className="section-label"
              style={{ color: 'var(--accent)', fontWeight: 'bold', marginBottom: '16px' }}
            >
              Advanced Components
            </div>
            <h1 className="section-title" style={{ marginBottom: '24px' }}>
              {category.title}
            </h1>
            <p
              style={{
                color: 'var(--muted2)',
                maxWidth: '800px',
                margin: '0 auto',
                lineHeight: '1.6',
                fontSize: '1.1rem',
              }}
            >
              {category.description}
            </p>
          </div>

          {/* Subsystem Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            {category.vehicles.map((subsystem, idx) => (
              <TiltCard
                key={subsystem.id}
                className="stat-card reveal"
                style={{
                  textAlign: 'left',
                  padding: '32px',
                  height: '100%',
                  transitionDelay: `${idx * 0.15}s`,
                }}
              >
                <h3 style={{ color: 'var(--white)', fontSize: '1.6rem', marginBottom: '12px' }}>
                  {subsystem.name}
                </h3>
                <p
                  style={{
                    color: 'var(--accent)',
                    fontSize: '0.95rem',
                    fontWeight: 'bold',
                    marginBottom: '16px',
                  }}
                >
                  {subsystem.subtitle}
                </p>
                <p style={{ color: 'var(--muted2)', fontSize: '0.95rem', marginBottom: '24px' }}>
                  {subsystem.description}
                </p>

                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ color: 'var(--white)', marginBottom: '12px', fontSize: '1rem' }}>
                    Specifications
                  </h4>
                  {subsystem.specs.map((spec, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderBottom: '1px solid var(--border)',
                        paddingBottom: '8px',
                        marginBottom: '8px',
                      }}
                    >
                      <span style={{ color: 'var(--muted2)' }}>{spec.label}</span>
                      <strong style={{ color: 'var(--white)' }}>{spec.value}</strong>
                    </div>
                  ))}
                </div>
              </TiltCard>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
