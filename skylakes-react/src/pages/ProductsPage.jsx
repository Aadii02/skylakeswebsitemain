import React, { useEffect, useMemo, useRef, useState } from 'react';
import StarsBackground from '../components/StarsBackground';
import Footer from '../components/Footer';
import {
  ITEMS, KIT_SUMMARY, SPEC_GROUPS, PROFILE, STEPS, CATEGORIES, ALL_PRODUCTS, DRAWING_IMG,
} from '../data/trainer1';
import './ProductsPage.css';

// Trainer-1 product page, recreated from the Claude Design handoff in
// desgin-import/skylx-trainer-1-product-page. Layout follows the mockup; type
// and colour come from the site palette so the page sits with the rest of the
// site. Reserve posts to the same endpoint the contact form uses.

const ENDPOINT = import.meta.env.VITE_CONTACT_FORM_ENDPOINT
  || 'https://formsubmit.co/ajax/contact@skylakes.space';

function PlaceholderRocket({ code }) {
  return (
    <div className="pp-media-placeholder">
      <svg width="60" height="60" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
        <path d="M24 3C19 13 17 22 17 31h14c0-9-2-18-7-28z" />
        <path d="M17 31l-7 8v-6l7-6M31 31l7 8v-6l-7-6M21 39h6v5h-6z" />
      </svg>
      <span className="pp-media-code">SKYLX // {code}</span>
    </div>
  );
}

export default function ProductsPage() {
  const [selected, setSelected] = useState(null);
  const [activeCat, setActiveCat] = useState('all');
  const [reserved, setReserved] = useState([]);
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  const [status, setStatus] = useState({ loading: false, sent: false, error: '' });
  const [toast, setToast] = useState('');
  const toastTimer = useRef(null);

  useEffect(() => () => clearTimeout(toastTimer.current), []);

  const flash = (message) => {
    setToast(message);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(''), 3200);
  };

  const toggleReserve = (code, name) => {
    setStatus({ loading: false, sent: false, error: '' });
    setReserved((prev) => {
      if (prev.includes(code)) {
        flash(`Removed · ${name}`);
        return prev.filter((c) => c !== code);
      }
      flash(`Added · ${name} — send the list below to reserve it.`);
      return [...prev, code];
    });
  };

  const selItem = useMemo(() => ITEMS.find((i) => i.n === selected) || null, [selected]);
  const reservedProducts = useMemo(
    () => ALL_PRODUCTS.filter((p) => reserved.includes(p.code)),
    [reserved],
  );

  const sendReservation = async (event) => {
    event.preventDefault();
    const address = email.trim();
    if (!address || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address)) {
      setStatus({ loading: false, sent: false, error: 'Enter a valid email address so we can reach you.' });
      return;
    }
    setStatus({ loading: true, sent: false, error: '' });
    const lines = reservedProducts.map((p) => `- ${p.code} · ${p.name}`).join('\n');
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: address,
          email: address,
          subject: 'New SKYLX Reservation',
          message: `New pre-launch reservation from ${address} via skylakes.space/products.\n\nItems:\n${lines}\n\nNote:\n${note.trim() || 'None provided.'}`,
        }),
      });
      if (!response.ok) throw new Error('failed');
      setStatus({ loading: false, sent: true, error: '' });
      flash('Reservation sent — we will email you when checkout opens.');
      setNote('');
    } catch {
      setStatus({
        loading: false,
        sent: false,
        error: 'We could not send that right now. Please try again or email contact@skylakes.space.',
      });
    }
  };

  return (
    <>
      <StarsBackground />
      <div className="products-page">
        <div className="pp-bg-glow" aria-hidden="true" />

        <div className="pp-designation">
          <div className="pp-designation-inner">
            <span>Designation <b>Trainer-1</b></span>
            <span>DWG <b>SKYLX-TRN1-001</b></span>
            <span>Rev <b>02</b></span>
            <span>Motor <b>18 mm · A–C</b></span>
            <span>Status <b className="pp-accent">Pre-launch</b></span>
          </div>
        </div>

        <main className="pp-main">

          {/* ── Drawing sheet + readout ─────────────────────────────── */}
          <section className="pp-hero" id="drawing">
            <div className="pp-sheet">
              <div className="pp-sheet-head">
                <span>Exploded assembly — pick an item</span>
                <span>SKYLX-TRN1-EXP-001</span>
              </div>
              <div className="pp-sheet-body">
                <div className="pp-drawing">
                  <img src={DRAWING_IMG} alt="Trainer-1 exploded assembly drawing" />
                  <div
                    className={`pp-highlight${selItem ? ' is-on' : ''}`}
                    style={selItem ? { top: `${selItem.top}%`, height: `${selItem.h}%` } : undefined}
                    aria-hidden="true"
                  />
                  {ITEMS.map((it) => (
                    <React.Fragment key={it.n}>
                      <span
                        className={`pp-leader${selected === it.n ? ' is-on' : ''}`}
                        style={{ top: `${it.y}%` }}
                        aria-hidden="true"
                      />
                      <button
                        type="button"
                        className={`pp-balloon${selected === it.n ? ' is-on' : ''}`}
                        style={{ top: `${it.y}%` }}
                        onMouseEnter={() => setSelected(it.n)}
                        onFocus={() => setSelected(it.n)}
                        onClick={() => setSelected(it.n)}
                        aria-label={`Item ${it.n}, ${it.name}`}
                        aria-pressed={selected === it.n}
                      >
                        {it.n}
                      </button>
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="pp-titleblock">
                <div><span>Title</span><b>Trainer-1 kit assembly</b></div>
                <div><span>Scale</span><b>1:2</b></div>
                <div><span>Rev</span><b>02</b></div>
                <div><span>Sheet</span><b>1 of 1</b></div>
              </div>
            </div>

            <div className="pp-readout-col">
              <h1 className="pp-title">Trainer<span className="pp-accent">-1</span></h1>
              <p className="pp-lede">
                A 30 cm airframe on an 18 mm motor mount. Six parts, wood glue, one afternoon.
                It reaches about 310 m on a C6 and comes back on a 30 cm chute.
              </p>

              <div className="pp-readout">
                <div className="pp-readout-head">
                  {selItem ? `Item ${selItem.n} of ${ITEMS.length}` : 'Kit summary'}
                </div>
                <div className="pp-readout-body">
                  {selItem ? (
                    <div>
                      <div className="pp-readout-title">
                        <span className="pp-readout-n">{selItem.n}</span>
                        <span>{selItem.name}</span>
                      </div>
                      <dl className="pp-readout-meta">
                        <dt>Part</dt><dd>{selItem.part}</dd>
                        <dt>Qty</dt><dd>{selItem.qty}</dd>
                        <dt>Matl</dt><dd>{selItem.matl}</dd>
                      </dl>
                      <p className="pp-readout-note">{selItem.note}</p>
                    </div>
                  ) : (
                    <div className="pp-summary">
                      {KIT_SUMMARY.map(({ label, value, unit }) => (
                        <div className="pp-summary-cell" key={label}>
                          <span className="pp-mono-label">{label}</span>
                          <span className="pp-summary-value">{value}<i>{unit}</i></span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="pp-pricebox">
                <div>
                  <div className="pp-mono-label">Kit price</div>
                  <div className="pp-price">Coming soon</div>
                  <div className="pp-price-note">Motor sold separately. Pricing announced at launch.</div>
                </div>
                <button
                  type="button"
                  className={`pp-btn${reserved.includes('TRN-1R') ? ' is-on' : ''}`}
                  onClick={() => toggleReserve('TRN-1R', 'Trainer-1 · Recoverable')}
                >
                  {reserved.includes('TRN-1R') ? 'Added ✓' : 'Reserve kit'}
                </button>
              </div>
            </div>
          </section>

          {/* ── Parts manifest ──────────────────────────────────────── */}
          <section className="pp-section">
            <header className="pp-section-head">
              <h2>Parts Manifest</h2>
              <span className="pp-mono-label">Item numbers match the drawing</span>
            </header>
            <div className="pp-manifest">
              <div className="pp-manifest-head pp-manifest-row">
                <span>Item</span><span>Part No.</span><span>Qty</span><span>Material</span><span>Description</span>
              </div>
              {ITEMS.map((it) => (
                <div
                  key={it.n}
                  className={`pp-manifest-row pp-manifest-item${selected === it.n ? ' is-on' : ''}`}
                  onMouseEnter={() => setSelected(it.n)}
                >
                  <span className="pp-manifest-n">{it.n}</span>
                  <span className="pp-mono">{it.part}</span>
                  <span className="pp-mono pp-dim">{it.qty}</span>
                  <span>{it.matl}</span>
                  <span className="pp-manifest-desc">{it.name} — <i>{it.note}</i></span>
                </div>
              ))}
            </div>
            <p className="pp-manifest-foot">
              Also in the box — shock cord, launch lug, ejection wadding, decal sheet, printed
              manual. Not included — motor, igniter, wood glue.
            </p>
          </section>

          {/* ── Specification ───────────────────────────────────────── */}
          <section className="pp-section" id="specs">
            <header className="pp-section-head">
              <h2>Specification</h2>
              <span className="pp-mono-label">Figures at sea level, calm air</span>
            </header>
            <div className="pp-specs">
              {SPEC_GROUPS.map((g) => (
                <div key={g.title}>
                  <div className="pp-spec-title">{g.title}</div>
                  {g.rows.map((r) => (
                    <div className="pp-spec-row" key={r.k}>
                      <span>{r.k}</span>
                      <span className="pp-mono pp-spec-v">{r.v}</span>
                      <span className="pp-mono pp-spec-u">{r.u}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="pp-profile">
              <div className="pp-mono-label">Flight profile · C6 motor</div>
              <div className="pp-profile-track">
                {PROFILE.map((e) => (
                  <div
                    className="pp-profile-event"
                    key={e.t}
                    style={{
                      left: `${e.x}%`,
                      transform: `translateX(${e.x === 0 ? '0' : e.x === 100 ? '-100%' : '-50%'})`,
                    }}
                  >
                    <span className="pp-profile-tick" />
                    <span className="pp-profile-t">{e.t}</span>
                    <span className="pp-profile-label">{e.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Build sequence ──────────────────────────────────────── */}
          <section className="pp-section" id="build">
            <header className="pp-section-head">
              <h2>Build Sequence</h2>
              <span className="pp-mono-label">2–3 h total · steps run in order</span>
            </header>
            {STEPS.map((s) => (
              <div className="pp-step" key={s.n}>
                <span className="pp-step-n">{s.n}</span>
                <span className="pp-step-title">{s.title}</span>
                <span className="pp-step-body">{s.body}</span>
                <span className="pp-mono pp-step-time">{s.time}</span>
              </div>
            ))}
          </section>

          {/* ── Catalogue ───────────────────────────────────────────── */}
          <section className="pp-section" id="catalog">
            <header className="pp-section-head">
              <h2>Components &amp; Spares</h2>
              <span className="pp-mono-label">Reserve individually</span>
            </header>

            <div className="pp-chips">
              <button
                type="button"
                className={`pp-chip${activeCat === 'all' ? ' is-on' : ''}`}
                onClick={() => setActiveCat('all')}
              >
                All
              </button>
              {CATEGORIES.map((c) => (
                <button
                  type="button"
                  key={c.title}
                  className={`pp-chip${activeCat === c.title ? ' is-on' : ''}`}
                  onClick={() => setActiveCat(c.title)}
                >
                  {c.title}
                </button>
              ))}
            </div>

            {CATEGORIES.filter((c) => activeCat === 'all' || activeCat === c.title).map((cat) => (
              <section className="pp-cat" key={cat.title}>
                <div className="pp-cat-head">
                  <div className="pp-cat-title">
                    <span className="pp-cat-num">{cat.num}</span>
                    <h3>{cat.title}</h3>
                  </div>
                  <span className="pp-mono-label">
                    / {String(cat.products.length).padStart(2, '0')} Items
                  </span>
                </div>
                <div className="pp-cards">
                  {cat.products.map((p) => {
                    const on = reserved.includes(p.code);
                    return (
                      <article className="pp-card" key={p.code}>
                        <div className={`pp-card-media${p.light ? ' is-light' : ''}`}>
                          {p.img ? (
                            <img src={p.img} alt={p.name} loading="lazy" decoding="async" />
                          ) : (
                            <PlaceholderRocket code={p.code} />
                          )}
                          <span className={`pp-badge${p.light ? ' is-light' : ''}`}>
                            <i /> Pre-launch
                          </span>
                        </div>
                        <div className="pp-card-body">
                          <div className="pp-mono-label">{p.code}</div>
                          <h4>{p.name}</h4>
                          <p>{p.desc}</p>
                          <div className="pp-card-foot">
                            <div>
                              <div className="pp-mono-label">Price</div>
                              <div className="pp-card-price">Coming soon</div>
                            </div>
                            <button
                              type="button"
                              className={`pp-btn pp-btn-sm${on ? ' is-on' : ''}`}
                              onClick={() => toggleReserve(p.code, p.name)}
                            >
                              {on ? 'Added ✓' : 'Reserve'}
                            </button>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </section>

          {/* ── Reservation ─────────────────────────────────────────── */}
          {reservedProducts.length > 0 && (
            <section className="pp-section pp-reserve" id="reserve">
              <header className="pp-section-head">
                <h2>Your Reservation</h2>
                <span className="pp-mono-label">
                  {String(reservedProducts.length).padStart(2, '0')} items · nothing is charged
                </span>
              </header>
              <ul className="pp-reserve-list">
                {reservedProducts.map((p) => (
                  <li key={p.code}>
                    <span className="pp-mono">{p.code}</span>
                    <span>{p.name}</span>
                    <button type="button" onClick={() => toggleReserve(p.code, p.name)} aria-label={`Remove ${p.name}`}>
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              {status.sent ? (
                <p className="pp-reserve-sent">
                  Reservation sent. We&apos;ll email {email.trim()} when checkout opens.
                </p>
              ) : (
                <form className="pp-reserve-form" onSubmit={sendReservation} noValidate>
                  <input
                    type="email"
                    className="pp-input"
                    placeholder="Your email address"
                    aria-label="Your email address"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setStatus((s) => ({ ...s, error: '' })); }}
                    required
                  />
                  <input
                    type="text"
                    className="pp-input"
                    placeholder="Anything we should know? (optional)"
                    aria-label="Note"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    maxLength={500}
                  />
                  <button type="submit" className="pp-btn" disabled={status.loading}>
                    {status.loading ? 'Sending…' : 'Send reservation'}
                  </button>
                </form>
              )}
              {status.error ? <p className="pp-reserve-error">{status.error}</p> : null}
            </section>
          )}

          {/* ── Custom work ─────────────────────────────────────────── */}
          <section className="pp-section">
            <div className="pp-custom">
              <div>
                <h2>Building something else?</h2>
                <p>
                  We cut airframes, machine mounts, and write flight firmware to spec. Send
                  drawings or a mission profile and we&apos;ll quote it.
                </p>
              </div>
              <a className="pp-btn pp-btn-lg" href="mailto:contact@skylakes.space?subject=Custom%20build%20enquiry">
                Contact Engineering
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                  <path d="M5 12h13M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
            <p className="pp-safety">
              Fly per local range safety code. Adult supervision for ages under 16.
            </p>
          </section>
        </main>

        {toast ? (
          <div className="pp-toast" role="status">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
              <path d="M4 12l5 5L20 6" />
            </svg>
            <span>{toast}</span>
          </div>
        ) : null}
      </div>
      <Footer />
    </>
  );
}
