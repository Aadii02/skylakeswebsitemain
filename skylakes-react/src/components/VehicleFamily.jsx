import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { vehicleCategories } from '../data/vehicles';
import './VehicleFamily.css';

const vehicles = vehicleCategories['model-rockets'].vehicles;

/*
 * Blueprint silhouettes for the SKYLX family — single-stick vehicles that
 * grow taller and wider S -> M -> H. Proportions are illustrative; no real
 * vehicle dimensions are published yet.
 */

function SilhouetteS() {
  return (
    <svg className="vf-svg vf-svg-s" viewBox="0 0 64 240" fill="none" aria-hidden="true">
      <path className="vf-draw" d="M32 4 C40 18 42 34 42 52 L42 210 L37 222 L27 222 L22 210 L22 52 C24 34 24 18 32 4 Z" vectorEffect="non-scaling-stroke" />
      <path className="vf-draw" d="M22 202 L8 234 M42 202 L56 234" vectorEffect="non-scaling-stroke" />
      <path className="vf-draw" d="M27 222 L24 233 L40 233 L37 222" vectorEffect="non-scaling-stroke" />
      <path className="vf-draw" d="M15 88 h7 v14 h-7 Z M42 88 h7 v14 h-7 Z" vectorEffect="non-scaling-stroke" />
      <path className="vf-detail" d="M22 84 L42 84 M22 120 Q32 128 42 120 M22 160 Q32 168 42 160" vectorEffect="non-scaling-stroke" />
      <path className="vf-detail vf-dash" d="M32 14 L32 216" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function SilhouetteM() {
  return (
    <svg className="vf-svg vf-svg-m" viewBox="0 0 72 372" fill="none" aria-hidden="true">
      <path className="vf-draw" d="M36 4 C46 20 49 40 49 64 L49 338 L43 352 L29 352 L23 338 L23 64 C23 40 26 20 36 4 Z" vectorEffect="non-scaling-stroke" />
      <path className="vf-draw" d="M23 328 L8 366 M49 328 L64 366" vectorEffect="non-scaling-stroke" />
      <path className="vf-draw" d="M30 352 L27 364 L45 364 L42 352" vectorEffect="non-scaling-stroke" />
      <path className="vf-draw" d="M15 100 h8 v16 h-8 Z M49 100 h8 v16 h-8 Z" vectorEffect="non-scaling-stroke" />
      <path className="vf-detail" d="M23 96 L49 96 M23 160 Q36 170 49 160 M23 240 Q36 250 49 240" vectorEffect="non-scaling-stroke" />
      <path className="vf-detail vf-dash" d="M36 14 L36 346" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function SilhouetteH() {
  return (
    <svg className="vf-svg vf-svg-h" viewBox="0 0 112 504" fill="none" aria-hidden="true">
      {/* wide payload fairing over a single heavy core */}
      <path className="vf-draw" d="M56 6 C70 24 84 48 84 88 L84 160 L28 160 L28 88 C28 48 42 24 56 6 Z" vectorEffect="non-scaling-stroke" />
      <path className="vf-draw" d="M28 160 L34 184 L78 184 L84 160" vectorEffect="non-scaling-stroke" />
      <path className="vf-draw" d="M34 184 L78 184 L78 452 L71 468 L41 468 L34 452 Z" vectorEffect="non-scaling-stroke" />
      <path className="vf-draw" d="M34 440 L16 486 M78 440 L96 486" vectorEffect="non-scaling-stroke" />
      <path className="vf-draw" d="M41 468 L38 481 L48 481 L45 468 M52 468 L50 481 L62 481 L60 468 M67 468 L64 481 L74 481 L71 468" vectorEffect="non-scaling-stroke" />
      <path className="vf-draw" d="M26 196 h8 v18 h-8 Z M78 196 h8 v18 h-8 Z" vectorEffect="non-scaling-stroke" />
      <path className="vf-detail" d="M34 250 L78 250 M34 310 Q56 322 78 310 M34 380 Q56 392 78 380" vectorEffect="non-scaling-stroke" />
      <path className="vf-detail vf-dash" d="M56 18 L56 460" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

const silhouettes = {
  'skylx-s': SilhouetteS,
  'skylx-m': SilhouetteM,
  'skylx-h': SilhouetteH,
};

export default function VehicleFamily() {
  const [selectedId, setSelectedId] = useState('skylx-m');
  const selected = vehicles.find((v) => v.id === selectedId);

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

        <div className="vf-wrap reveal">
          <div className="vf-stage" role="group" aria-label="SKYLX vehicle family — select a vehicle to view specifications">
            {vehicles.map((vehicle, index) => {
              const Silhouette = silhouettes[vehicle.id];
              return (
                <button
                  key={vehicle.id}
                  type="button"
                  className={`vf-vehicle vf-vehicle-${index + 1}`}
                  aria-pressed={vehicle.id === selectedId}
                  onClick={() => setSelectedId(vehicle.id)}
                >
                  <Silhouette />
                  <span className="vf-vehicle-name">{vehicle.name}</span>
                  <span className="vf-vehicle-payload">{vehicle.leoPayload} to LEO</span>
                </button>
              );
            })}
          </div>
          <div className="vf-padline" aria-hidden="true"></div>
          <p className="vf-scale-note">Illustrative scale — vehicle dimensions to be published.</p>

          <div className="vf-panel" aria-live="polite">
            <div className="vf-panel-head">
              <h3 className="vf-panel-name">
                {selected.name} <span className="vf-panel-tagline">{selected.tagline}</span>
              </h3>
              <p className="vf-panel-subtitle">{selected.subtitle}</p>
            </div>
            <div className="vf-panel-hero">
              <span className="vf-panel-hero-num">{selected.leoPayload}</span>
              <span className="vf-panel-hero-label">Payload to LEO</span>
            </div>
            <div className="vf-panel-specs">
              {selected.specs.map((spec) => (
                <div className="vf-spec-row" key={spec.label}>
                  <span className="vf-spec-label">{spec.label}</span>
                  <strong className="vf-spec-value">{spec.value}</strong>
                </div>
              ))}
            </div>
            <p className="vf-panel-targets">
              <span className="vf-panel-targets-label">Target payloads — </span>
              {selected.targetPayloads}
            </p>
            <Link to="/vehicles" className="vf-panel-link">View all vehicles →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
