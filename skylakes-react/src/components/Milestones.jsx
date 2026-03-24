import React from 'react';
import TiltCard from './TiltCard';


export default function Milestones() {
  return (
    <section id="vehicles">
      <div className="milestones-section">
        <div className="milestones-header reveal">
          <div className="section-label" style={{ color: 'var(--accent)', fontWeight: 'bold' }}>LEO to GTO Missions</div>
          <h2 className="section-title">SKYLX Launch Vehicles</h2>
          <p style={{ color: 'var(--muted2)', maxWidth: '800px', margin: '20px auto 40px', lineHeight: '1.6', fontSize: '1.1rem' }}>
            SKYLX is developing a family of three fully reusable launch vehicles designed to serve the complete commercial launch market — from small satellite constellations to large government and commercial payloads. All three vehicles are built with reusability as a core design principle, enabling rapid turnaround and significantly reduced launch costs.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* SKYLX-S */}
          <TiltCard className="stat-card reveal" style={{ textAlign: 'left', padding: '32px', height: '100%' }}>
            <h3 style={{ color: 'var(--white)', fontSize: '1.6rem', marginBottom: '12px' }}>SKYLX-S <span style={{ color: 'var(--muted)', fontSize: '1rem' }}>Small LV</span></h3>
            <p style={{ color: 'var(--accent)', fontSize: '0.95rem', fontWeight: 'bold', marginBottom: '24px' }}>Dedicated, affordable access to orbit</p>
            
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: '8px', marginBottom: '8px' }}>
                <span style={{ color: 'var(--muted2)' }}>LEO Payload</span>
                <strong style={{ color: 'var(--white)' }}>Up to 500 kg</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: '8px', marginBottom: '8px' }}>
                <span style={{ color: 'var(--muted2)' }}>SSO Payload</span>
                <strong style={{ color: 'var(--white)' }}>Up to 350 kg</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: '8px', marginBottom: '8px' }}>
                <span style={{ color: 'var(--muted2)' }}>Reusability</span>
                <strong style={{ color: 'var(--white)' }}>Fully Reusable</strong>
              </div>
            </div>
            
            <h4 style={{ color: 'var(--white)', marginBottom: '8px', fontSize: '1.1rem' }}>Target Payloads</h4>
            <p style={{ color: 'var(--muted2)', fontSize: '0.9rem', lineHeight: '1.5' }}>CubeSats (1U-16U), MicroSats, RideShare slots for small spacecraft, Earth observation satellites, technology demonstrators.</p>
          </TiltCard>

          {/* SKYLX-M */}
          <TiltCard className="stat-card reveal" style={{ textAlign: 'left', padding: '32px', height: '100%' }}>
            <h3 style={{ color: 'var(--white)', fontSize: '1.6rem', marginBottom: '12px' }}>SKYLX-M <span style={{ color: 'var(--muted)', fontSize: '1rem' }}>Medium LV</span></h3>
            <p style={{ color: 'var(--accent)', fontSize: '0.95rem', fontWeight: 'bold', marginBottom: '24px' }}>The versatile, high-cadence workhorse</p>
            
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: '8px', marginBottom: '8px' }}>
                <span style={{ color: 'var(--muted2)' }}>LEO Payload</span>
                <strong style={{ color: 'var(--white)' }}>Up to 6,000 kg</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: '8px', marginBottom: '8px' }}>
                <span style={{ color: 'var(--muted2)' }}>GTO Payload</span>
                <strong style={{ color: 'var(--white)' }}>Up to 2,200 kg</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: '8px', marginBottom: '8px' }}>
                <span style={{ color: 'var(--muted2)' }}>Reusability</span>
                <strong style={{ color: 'var(--white)' }}>Fully Reusable</strong>
              </div>
            </div>
            
            <h4 style={{ color: 'var(--white)', marginBottom: '8px', fontSize: '1.1rem' }}>Target Payloads</h4>
            <p style={{ color: 'var(--muted2)', fontSize: '0.9rem', lineHeight: '1.5' }}>Medium-class satellites (2,000-6,000 kg), internet constellations, ISS cargo missions, deep space probe insertion.</p>
          </TiltCard>

          {/* SKYLX-H */}
          <TiltCard className="stat-card reveal" style={{ textAlign: 'left', padding: '32px', height: '100%' }}>
            <h3 style={{ color: 'var(--white)', fontSize: '1.6rem', marginBottom: '12px' }}>SKYLX-H <span style={{ color: 'var(--muted)', fontSize: '1rem' }}>Heavy LV</span></h3>
            <p style={{ color: 'var(--accent)', fontSize: '0.95rem', fontWeight: 'bold', marginBottom: '24px' }}>Maximum performance. Built for the largest missions</p>
            
            <div style={{ marginBottom: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: '8px', marginBottom: '8px' }}>
                <span style={{ color: 'var(--muted2)' }}>LEO Payload</span>
                <strong style={{ color: 'var(--white)' }}>Up to 25,000 kg</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: '8px', marginBottom: '8px' }}>
                <span style={{ color: 'var(--muted2)' }}>GTO Payload</span>
                <strong style={{ color: 'var(--white)' }}>Up to 9,500 kg</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: '8px', marginBottom: '8px' }}>
                <span style={{ color: 'var(--muted2)' }}>Reusability</span>
                <strong style={{ color: 'var(--white)' }}>Fully Reusable</strong>
              </div>
            </div>
            
            <h4 style={{ color: 'var(--white)', marginBottom: '8px', fontSize: '1.1rem' }}>Target Payloads</h4>
            <p style={{ color: 'var(--muted2)', fontSize: '0.9rem', lineHeight: '1.5' }}>Very large commercial satellites, national security payloads, space station modules, lunar cargo missions, Mars trajectory.</p>
          </TiltCard>

        </div>
      </div>
    </section>
  );
}
