import React from 'react';
import './TrustBar.css';

const badges = [
  '🇮🇳 Registered in India',
  '🛸 IN-SPACe Pipeline',
  '🏆 iDEX Eligible',
  '📡 Faridabad, NCR'
];

export default function TrustBar() {
  return (
    <div className="trustbar-wrap">
      {badges.map((badge) => (
        <div key={badge} className="trustbar-pill">{badge}</div>
      ))}
    </div>
  );
}
