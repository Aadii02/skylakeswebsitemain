import React from 'react';
import './Products.css'; // create this or add styles to App.css

const vehicles = [
  {
    name: 'SKYLX-S',
    tag: 'Small Lift',
    payload: '~50 kg to LEO',
    cost: 'Sub ₹15Cr',
    desc: 'Our entry-level reusable launch vehicle for small satellite missions.',
  },
  {
    name: 'SKYLX-M',
    tag: 'Medium Lift',
    payload: '~150 kg to LEO',
    cost: 'Sub ₹25Cr',
    desc: 'Optimized for rideshare and dedicated small satellite constellations.',
  },
  {
    name: 'SKYLX-H',
    tag: 'Heavy Lift',
    payload: '~300 kg to LEO',
    cost: 'Sub ₹40Cr',
    desc: 'High-capacity reusable vehicle for demanding mission profiles.',
  },
];

const Products = () => {
  return (
    <section id="products" className="reveal">
      <h2>Launch Vehicles</h2>
      <p className="section-sub">Affordable. Reusable. Indian.</p>
      <div className="products-grid">
        {vehicles.map((v) => (
          <div className="product-card" key={v.name}>
            <h3>{v.name}</h3>
            <span className="tag">{v.tag}</span>
            <p>{v.desc}</p>
            <ul>
              <li>Payload: {v.payload}</li>
              <li>Target Cost: {v.cost}</li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;