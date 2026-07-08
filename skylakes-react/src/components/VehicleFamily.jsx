import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { vehicleCategories } from '../data/vehicles';
import './VehicleFamily.css';

const vehicles = vehicleCategories['model-rockets'].vehicles;

/*
 * Blueprint silhouettes for the SKYLX family. Cores per vehicle follow the
 * documented first-stage spec (S: single, M: dual, H: triple). Relative
 * heights are illustrative — no real vehicle dimensions are published yet.
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
    <svg className="vf-svg vf-svg-m" viewBox="0 0 120 372" fill="none" aria-hidden="true">
      {/* upper stage + fairing riding on the dual-core first stage */}
      <path className="vf-draw" d="M60 4 C68 16 72 28 72 44 L72 96 L48 96 L48 44 C48 28 52 16 60 4 Z" vectorEffect="non-scaling-stroke" />
      <path className="vf-draw" d="M48 96 L26 120 L94 120 L72 96" vectorEffect="non-scaling-stroke" />
      {/* core A */}
      <path className="vf-draw" d="M26 120 L46 120 L46 342 L41 354 L31 354 L26 342 Z" vectorEffect="non-scaling-stroke" />
      <path className="vf-draw" d="M26 336 L14 368 M31 354 L29 364 L43 364 L41 354" vectorEffect="non-scaling-stroke" />
      {/* core B */}
      <path className="vf-draw" d="M74 120 L94 120 L94 342 L89 354 L79 354 L74 342 Z" vectorEffect="non-scaling-stroke" />
      <path className="vf-draw" d="M94 336 L106 368 M79 354 L77 364 L91 364 L89 354" vectorEffect="non-scaling-stroke" />
      {/* grid fins on the outer faces */}
      <path className="vf-draw" d="M19 128 h7 v14 h-7 Z M94 128 h7 v14 h-7 Z" vectorEffect="non-scaling-stroke" />
      <path className="vf-detail" d="M48 44 L72 44 M26 152 L46 152 M74 152 L94 152 M26 220 Q36 228 46 220 M74 220 Q84 228 94 220" vectorEffect="non-scaling-stroke" />
      <path className="vf-detail vf-dash" d="M36 128 L36 348 M84 128 L84 348" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

function SilhouetteH() {
  return (
    <svg className="vf-svg vf-svg-h" viewBox="0 0 140 504" fill="none" aria-hidden="true">
      {/* payload fairing + center core */}
      <path className="vf-draw" d="M70 6 C80 20 86 40 86 66 L86 130 L54 130 L54 66 C60 40 60 20 70 6 Z" vectorEffect="non-scaling-stroke" />
      <path className="vf-draw" d="M54 130 L59 146 L81 146 L86 130" vectorEffect="non-scaling-stroke" />
      <path className="vf-draw" d="M59 146 L81 146 L81 460 L76 472 L64 472 L59 460 Z" vectorEffect="non-scaling-stroke" />
      <path className="vf-draw" d="M59 454 L47 488 M81 454 L93 488 M64 472 L62 482 L78 482 L76 472" vectorEffect="non-scaling-stroke" />
      {/* side boosters */}
      <path className="vf-draw" d="M23 154 C29 162 34 170 34 182 L34 460 L29 472 L17 472 L12 460 L12 182 C12 170 17 162 23 154 Z" vectorEffect="non-scaling-stroke" />
      <path className="vf-draw" d="M117 154 C123 162 128 170 128 182 L128 460 L123 472 L111 472 L106 460 L106 182 C106 170 111 162 117 154 Z" vectorEffect="non-scaling-stroke" />
      <path className="vf-draw" d="M12 454 L2 488 M34 454 L44 488 M106 454 L96 488 M128 454 L138 488" vectorEffect="non-scaling-stroke" />
      {/* grid fins on the outer faces */}
      <path className="vf-draw" d="M5 190 h7 v16 h-7 Z M128 190 h7 v16 h-7 Z" vectorEffect="non-scaling-stroke" />
      <path className="vf-detail" d="M59 200 L81 200 M12 260 Q23 268 34 260 M106 260 Q117 268 128 260 M59 320 Q70 328 81 320" vectorEffect="non-scaling-stroke" />
      <path className="vf-detail vf-dash" d="M70 16 L70 466 M23 164 L23 466 M117 164 L117 466" vectorEffect="non-scaling-stroke" />
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
