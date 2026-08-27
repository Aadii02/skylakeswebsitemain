// Trainer-1 product data, lifted from the Claude Design handoff in
// desgin-import/skylx-trainer-1-product-page. Item numbers here are the same
// numbers drawn on the exploded assembly, so the drawing balloons, the
// highlight band and the parts manifest all key off `n`.

const BASE = import.meta.env.BASE_URL;

// `y` is how far down the drawing the balloon and its leader line sit;
// `top`/`h` place the highlight band over that part. All percentages.
export const ITEMS = [
  {
    n: 1, name: 'Nose cone', part: 'TRN1-NC-01', qty: '1', matl: 'Molded ABS',
    y: 8.7, top: 2, h: 13.5,
    note: 'Ogive profile with a pre-drilled shoulder eyelet for the shock cord.',
  },
  {
    n: 2, name: 'Parachute', part: 'TRN1-RC-30', qty: '1', matl: '40 gsm ripstop nylon',
    y: 23, top: 16, h: 14.5,
    note: '30 cm canopy, six shroud lines. Packs above the coupler behind the nose.',
  },
  {
    n: 3, name: 'Body tube', part: 'TRN1-BT-30', qty: '1', matl: 'Spiral-wound kraft',
    y: 44, top: 31, h: 26,
    note: '32 mm OD, 0.8 mm wall. Printed with a roll pattern so the fins line up.',
  },
  {
    n: 4, name: 'Flight computer', part: 'TRN1-AV-01', qty: '1', matl: 'FR4 · BMP280',
    y: 62.7, top: 58.5, h: 8.5,
    note: 'Reads barometric apogee, fires the ejection charge, logs peak altitude to EEPROM.',
  },
  {
    n: 5, name: 'Motor mount', part: 'TRN1-MM-18', qty: '1', matl: 'Phenolic + PLA rings',
    y: 72, top: 67.5, h: 9.5,
    note: '18 mm tube on two centering rings, with a steel retainer clip. Takes A, B and C motors.',
  },
  {
    n: 6, name: 'Fin set', part: 'TRN1-FN-03', qty: '3', matl: '2 mm laser-cut basswood',
    y: 86, top: 78, h: 21,
    note: 'Clipped delta. Slots through the tube and bonds to the motor mount for a locked joint.',
  },
];

export const KIT_SUMMARY = [
  { label: 'Apogee · C6', value: '310', unit: 'm' },
  { label: 'Dry mass', value: '85', unit: 'g' },
  { label: 'Length', value: '300', unit: 'mm' },
  { label: 'Build', value: '2–3', unit: 'h' },
];

export const SPEC_GROUPS = [
  {
    title: 'Airframe',
    rows: [
      { k: 'Length', v: '300', u: 'mm' },
      { k: 'Diameter', v: '32', u: 'mm' },
      { k: 'Dry mass', v: '85', u: 'g' },
      { k: 'Liftoff mass, C6', v: '118', u: 'g' },
    ],
  },
  {
    title: 'Propulsion',
    rows: [
      { k: 'Mount', v: '18', u: 'mm' },
      { k: 'Motor classes', v: 'A6 · B6 · C6', u: '' },
      { k: 'Max total impulse', v: '10', u: 'N·s' },
      { k: 'Burn time, C6', v: '1.6', u: 's' },
    ],
  },
  {
    title: 'Recovery',
    rows: [
      { k: 'Type', v: 'Parachute', u: '' },
      { k: 'Canopy', v: '300', u: 'mm' },
      { k: 'Deployment', v: 'Barometric', u: '' },
      { k: 'Descent rate', v: '4.2', u: 'm/s' },
    ],
  },
  {
    title: 'Performance & build',
    rows: [
      { k: 'Apogee, C6', v: '310', u: 'm' },
      { k: 'Max velocity', v: '92', u: 'm/s' },
      { k: 'Stability margin', v: '1.8', u: 'cal' },
      { k: 'Build time', v: '2–3', u: 'h' },
    ],
  },
];

export const PROFILE = [
  { t: 'T+0.0', label: 'Ignition', x: 0 },
  { t: 'T+1.6', label: 'Burnout', x: 22 },
  { t: 'T+7.4', label: 'Apogee 310 m', x: 46 },
  { t: 'T+7.6', label: 'Ejection', x: 68 },
  { t: 'T+52', label: 'Touchdown', x: 100 },
];

export const STEPS = [
  { n: '01', title: 'Motor mount', time: '25 min', body: 'Bond the two centering rings to the 18 mm tube, set the retainer clip, and let it cure before it goes anywhere near the airframe.' },
  { n: '02', title: 'Fin alignment', time: '40 min', body: 'Slot the three fins through the printed guide lines and epoxy them to the motor mount, not just the tube wall.' },
  { n: '03', title: 'Recovery bay', time: '30 min', body: 'Anchor the shock cord inside the forward tube, then fold and pack the chute with wadding underneath it.' },
  { n: '04', title: 'Avionics', time: '20 min', body: 'Seat the flight computer on its sled and bring the arming switch out through the port hole.' },
  { n: '05', title: 'Fillet and check', time: '30 min', body: 'Fillet the fin roots, apply decals, then swing-test on a string to confirm the stability margin before the pad.' },
];

// `light` products sit on a white media panel; the rest use the dark one.
// A product with no `img` renders the blueprint rocket placeholder instead.
export const CATEGORIES = [
  {
    num: '01',
    title: 'Rocket Kits',
    products: [
      { code: 'TRN-1R', name: 'Trainer-1 · Recoverable', desc: 'The full kit on this page — parachute recovery, flight computer, six parts.', img: `${BASE}products/infographic-b.png` },
      { code: 'TRN-1N', name: 'Trainer-1 · Non-Recoverable', desc: 'Same airframe, no recovery bay. Single flight, cheaper, quicker to build.', img: `${BASE}products/rocket-product.png` },
    ],
  },
  {
    num: '02',
    title: 'Recovery Systems',
    products: [
      { code: 'REC-P30', name: 'Parachute · 30 cm Nylon', desc: 'Ripstop canopy with six shroud lines. Spare for the Trainer-1 bay.', img: `${BASE}products/parachute-30cm.png`, light: true },
      { code: 'REC-SC', name: 'Shock Cord & Launch Lug', desc: 'Kevlar tether with heat-shrunk loops, plus the launch-rod guide.', img: `${BASE}products/shock-cord.png`, light: true },
      { code: 'REC-NX', name: 'Nomex Heat Blanket', desc: 'Goes between the ejection charge and the chute. Reusable, unlike wadding.', img: `${BASE}products/nomex-blanket.png`, light: true },
    ],
  },
  {
    num: '03',
    title: 'Avionics & Electronics',
    products: [
      { code: 'AV-FC1', name: 'Mini Flight Computer', desc: 'BMP280 apogee detection, EEPROM altitude log, 9V input, screw terminals.', img: `${BASE}products/flight-computer.png`, light: true },
      { code: 'AV-TLM', name: 'Telemetry Add-On', desc: '915 MHz LoRa board with SMA antenna. Streams altitude and events to the ground.', img: `${BASE}products/telemetry-addon.png`, light: true },
      { code: 'AV-IGN', name: 'Igniter Controller', desc: 'Wireless launch box with continuity test and a keyed safety switch.' },
    ],
  },
  {
    num: '04',
    title: 'Airframe Components',
    products: [
      { code: 'AF-SET', name: 'Trainer-1 Airframe Set', desc: 'Items 1, 3, 5 and 6 from the manifest as a single spares pack.', img: `${BASE}products/exploded-drawing.png`, light: true },
      { code: 'AF-BT', name: 'Kraft Body Tube', desc: '32 mm OD, 0.8 mm wall, 240 mm. Pre-printed fin alignment lines.' },
      { code: 'AF-NC', name: 'Molded Nose Cone', desc: 'ABS ogive with shoulder eyelet. Drop-in replacement for item 1.' },
      { code: 'AF-FIN', name: 'Laser-Cut Fin Set', desc: 'Three 2 mm basswood clipped deltas, cut on the Trainer-1 pattern.' },
    ],
  },
];

export const ALL_PRODUCTS = CATEGORIES.flatMap((c) => c.products);
export const DRAWING_IMG = `${BASE}products/exploded-drawing.png`;
