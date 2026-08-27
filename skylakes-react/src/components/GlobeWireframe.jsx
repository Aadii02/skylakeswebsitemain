import React, { useEffect, useRef } from 'react';

// Orbital reference frame: a wireframe sphere drawn on a 2D canvas.
// Points are projected properly off the unit sphere rather than faked with
// flattened ellipses, so meridians converge at the poles and every line is
// split into a bright front hemisphere and a dim far side.

const ACCENT = '96,165,250';   // --accent
const LIGHT = '147,197,253';   // --accent2
const TAU = Math.PI * 2;

const TILT = 0.42;             // north pole tipped toward the viewer
const LAT_LINES = 11;
const MERIDIANS = 18;
const SEGMENTS = 96;
// Each track is a circle of radius `r` (in globe radii) inclined by `inc` off
// the equator and rolled by `roll` in the picture plane. A track projects to an
// ellipse with semi-axes 1 and sin(inc + TILT), so inc near PI/2 - TILT reads as
// a near-polar ring and inc near 0 as a flat equatorial band. Keep r * 0.36
// under 0.5 or the track runs off the canvas.
const ORBITS = [
  { r: 1.34, inc: 0.2, roll: -0.36, alpha: 1, dash: [5, 7], speed: -1 / 5200, phase: 0 },
  { r: 1.2, inc: 1.13, roll: 0.3, alpha: 0.72, dash: [3, 6], speed: 1 / 7400, phase: 2.1 },
  { r: 1.28, inc: 0.72, roll: -1.05, alpha: 0.6, dash: [4, 9], speed: -1 / 9100, phase: 4.4 },
  { r: 1.12, inc: 0.44, roll: 0.92, alpha: 0.42, dash: null, speed: 0, phase: 0 },
];

const STATIONS = [
  { lat: 0.24, lon: 1.35 },    // east coast spaceport
  { lat: 0.5, lon: 4.1 },
  { lat: -0.31, lon: 2.6 },
];

export default function GlobeWireframe() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let dpr = 1;
    let w = 0;
    let h = 0;
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = Math.round(canvas.clientWidth * dpr);
      h = Math.round(canvas.clientHeight * dpr);
      canvas.width = w;
      canvas.height = h;
    };
    resize();

    const cosT = Math.cos(TILT);
    const sinT = Math.sin(TILT);

    // unit sphere -> screen, plus which hemisphere the point is on
    const project = (lat, lon, cx, cy, R) => {
      const cl = Math.cos(lat);
      const x = cl * Math.sin(lon);
      const y = Math.sin(lat);
      const z = cl * Math.cos(lon);
      return {
        x: cx + R * x,
        y: cy - R * (y * cosT - z * sinT),
        front: y * sinT + z * cosT > 0,
      };
    };

    // stroke a closed curve, breaking it wherever it crosses the limb so the
    // far side can be drawn thinner and dimmer
    const strokeSplit = (pointAt, front, back, only) => {
      let run = [];
      let runFront = false;
      const flush = () => {
        if (run.length > 1 && (only === undefined || only === runFront)) {
          ctx.beginPath();
          ctx.moveTo(run[0].x, run[0].y);
          for (let i = 1; i < run.length; i++) ctx.lineTo(run[i].x, run[i].y);
          const style = runFront ? front : back;
          ctx.strokeStyle = style.color;
          ctx.lineWidth = style.width * dpr;
          ctx.stroke();
        }
      };
      for (let i = 0; i <= SEGMENTS; i++) {
        const p = pointAt(i / SEGMENTS);
        if (run.length === 0) {
          run = [p];
          runFront = p.front;
        } else if (p.front === runFront) {
          run.push(p);
        } else {
          const seam = run[run.length - 1];
          run.push(p);
          flush();
          run = [seam, p];
          runFront = p.front;
        }
      }
      flush();
    };

    // orbit circle -> screen: incline about x, apply the camera tilt, then roll
    // the resulting ellipse in the picture plane
    const tracks = ORBITS.map((o) => ({
      ...o,
      cosI: Math.cos(o.inc),
      sinI: Math.sin(o.inc),
      cosRoll: Math.cos(o.roll),
      sinRoll: Math.sin(o.roll),
    }));
    const orbitPoint = (o, a, cx, cy, R) => {
      const x1 = Math.cos(a);
      const y1 = -Math.sin(a) * o.sinI;
      const z1 = Math.sin(a) * o.cosI;
      const ys = y1 * cosT - z1 * sinT;
      const r = R * o.r;
      return {
        x: cx + r * (x1 * o.cosRoll - ys * o.sinRoll),
        y: cy - r * (x1 * o.sinRoll + ys * o.cosRoll),
        front: y1 * sinT + z1 * cosT > 0,
      };
    };

    const draw = (t) => {
      const cx = w / 2;
      const cy = h / 2;
      const R = Math.min(w, h) * 0.36;
      const spin = reduceMotion ? 0.7 : (t / 26000) * TAU;
      ctx.clearRect(0, 0, w, h);

      // atmospheric bloom behind the sphere
      const glow = ctx.createRadialGradient(
        cx - R * 0.22, cy - R * 0.28, R * 0.05, cx, cy, R * 1.28,
      );
      glow.addColorStop(0, `rgba(${LIGHT},0.13)`);
      glow.addColorStop(0.55, `rgba(${ACCENT},0.05)`);
      glow.addColorStop(1, `rgba(${ACCENT},0)`);
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.28, 0, TAU);
      ctx.fillStyle = glow;
      ctx.fill();

      const sats = tracks.map((o) => (o.speed
        ? orbitPoint(o, o.phase + (reduceMotion ? 1.1 : t * o.speed), cx, cy, R)
        : null));

      const drawSat = (p, alpha) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 8 * dpr, 0, TAU);
        ctx.fillStyle = `rgba(${ACCENT},${0.18 * alpha})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3 * dpr, 0, TAU);
        ctx.fillStyle = `rgba(${LIGHT},${0.95 * alpha})`;
        ctx.fill();
      };

      // one depth pass over every track: `near` picks the hemisphere drawn
      const drawTracks = (near) => {
        ctx.save();
        for (let i = 0; i < tracks.length; i++) {
          const o = tracks[i];
          ctx.setLineDash(o.dash ? o.dash.map((d) => d * dpr) : []);
          strokeSplit(
            (u) => orbitPoint(o, u * TAU, cx, cy, R),
            { color: `rgba(${LIGHT},${0.5 * o.alpha})`, width: 1.05 },
            { color: `rgba(${ACCENT},${0.16 * o.alpha})`, width: 0.8 },
            near,
          );
          const sat = sats[i];
          if (sat && sat.front === near) drawSat(sat, near ? o.alpha : 0.4 * o.alpha);
        }
        ctx.restore();
      };

      // far halves first, so the globe occludes them
      drawTracks(false);

      // globe body
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, TAU);
      ctx.fillStyle = 'rgba(6,12,26,0.55)';
      ctx.fill();

      for (let i = 1; i <= LAT_LINES; i++) {
        const lat = -Math.PI / 2 + (i * Math.PI) / (LAT_LINES + 1);
        strokeSplit(
          (u) => project(lat, spin + u * TAU, cx, cy, R),
          { color: `rgba(${LIGHT},0.22)`, width: 0.75 },
          { color: `rgba(${ACCENT},0.07)`, width: 0.6 },
        );
      }

      for (let i = 0; i < MERIDIANS; i++) {
        const lon = spin + (i * Math.PI) / MERIDIANS;
        strokeSplit(
          (u) => project(u * TAU, lon, cx, cy, R),
          { color: `rgba(${LIGHT},0.25)`, width: 0.8 },
          { color: `rgba(${ACCENT},0.075)`, width: 0.6 },
        );
      }

      // limb last, so it sits cleanly over every line end
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, TAU);
      ctx.strokeStyle = `rgba(${LIGHT},0.55)`;
      ctx.lineWidth = 1.2 * dpr;
      ctx.stroke();

      // near halves ride over the sphere
      drawTracks(true);

      // ground stations on the near face
      for (let i = 0; i < STATIONS.length; i++) {
        const s = STATIONS[i];
        const p = project(s.lat, spin + s.lon, cx, cy, R);
        if (!p.front) continue;
        const pulse = reduceMotion ? 0.5 : (Math.sin(t / 900 + i * 2.1) + 1) / 2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, (3 + pulse * 5) * dpr, 0, TAU);
        ctx.fillStyle = `rgba(${ACCENT},${0.16 - pulse * 0.11})`;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.9 * dpr, 0, TAU);
        ctx.fillStyle = `rgba(${LIGHT},0.9)`;
        ctx.fill();
      }
    };

    let raf = 0;
    const loop = (t) => {
      draw(t);
      raf = requestAnimationFrame(loop);
    };

    const ro = new ResizeObserver(() => {
      resize();
      if (!raf) draw(performance.now());
    });
    ro.observe(canvas);

    // only animate while the section is actually on screen
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !reduceMotion) {
        if (!raf) raf = requestAnimationFrame(loop);
      } else {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    }, { threshold: 0 });
    io.observe(canvas);

    draw(performance.now());

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <div className="globe-canvas">
      <canvas ref={canvasRef} aria-hidden="true" />
    </div>
  );
}
