import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { vehicleCategories } from '../data/vehicles';
import VehicleSilhouette from './VehicleSilhouette';
import './VehicleFamily.css';

const vehicles = vehicleCategories['model-rockets'].vehicles;

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
            {vehicles.map((vehicle, index) => (
              <button
                key={vehicle.id}
                type="button"
                className={`vf-vehicle vf-vehicle-${index + 1}`}
                aria-pressed={vehicle.id === selectedId}
                onClick={() => setSelectedId(vehicle.id)}
              >
                <VehicleSilhouette vehicleId={vehicle.id} />
                <span className="vf-vehicle-name">{vehicle.name}</span>
                <span className="vf-vehicle-payload">{vehicle.leoPayload} to LEO</span>
              </button>
            ))}
          </div>
          <div className="vf-padline" aria-hidden="true"></div>
          <p className="vf-scale-note">Illustrative scale — vehicle images gonna release soon.</p>

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
