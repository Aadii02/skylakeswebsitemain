import React from 'react';
import { getVehicleCategory } from '../data/vehicles';
import TiltCard from '../components/TiltCard';
import StarsBackground from '../components/StarsBackground';
import Footer from '../components/Footer';

export default function ModelRocketsPage() {
  const category = getVehicleCategory('model-rockets');

  if (!category) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>Category not found</div>;
  }

  return (
    <>
      <StarsBackground />
      <div style={{ minHeight: '100vh', paddingTop: '120px' }}>
        {/* Vehicle Cards */}
        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px 80px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '32px',
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            {category.vehicles.map((vehicle, idx) => (
              <TiltCard
                key={vehicle.id}
                className="stat-card reveal"
                style={{
                  textAlign: 'left',
                  padding: '32px',
                  height: '100%',
                  transitionDelay: `${idx * 0.15}s`,
                }}
              >
                <h3 style={{ color: 'var(--white)', fontSize: '1.6rem', marginBottom: '12px' }}>
                  {vehicle.name} <span style={{ color: 'var(--muted)', fontSize: '1rem' }}>{vehicle.tagline}</span>
                </h3>
                <p
                  style={{
                    color: 'var(--accent)',
                    fontSize: '0.95rem',
                    fontWeight: 'bold',
                    marginBottom: '24px',
                  }}
                >
                  {vehicle.subtitle}
                </p>

                <div style={{ marginBottom: '20px' }}>
                  {vehicle.specs.map((spec, i) => (
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

                <h4 style={{ color: 'var(--white)', marginBottom: '8px', fontSize: '1.1rem' }}>
                  Target Payloads
                </h4>
                <p style={{ color: 'var(--muted2)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  {vehicle.targetPayloads}
                </p>
              </TiltCard>
            ))}
            </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
