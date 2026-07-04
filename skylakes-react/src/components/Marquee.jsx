import React from 'react';

const items = [
  'Reusable Launch Vehicles',
  'LEO to GTO Missions',
  'Rideshare Launch Services',
  'Automotive Parts Repurposing',
  'Reusable Landing Tech',
  'Made in India 🇮🇳',
];

export default function Marquee() {
  return (
    <div className="marquee-section" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div className="marquee-group" key={copy}>
            {items.map((item) => (
              <span className="marquee-item" key={item}>
                <span className="marquee-dot"></span>
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
