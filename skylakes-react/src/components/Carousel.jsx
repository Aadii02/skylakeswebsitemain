import React, { useRef, useState, useEffect, useCallback } from 'react';

/**
 * Scroll-snap carousel with animated arrows, dots, and optional autoplay.
 * Autoplay pauses while hovered or while the user is touching the track.
 */
export default function Carousel({ children, autoPlay = 6000, className = '' }) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const indexRef = useRef(0);
  const pausedRef = useRef(false);
  const slides = React.Children.toArray(children);
  const count = slides.length;

  const scrollTo = useCallback((i) => {
    const track = trackRef.current;
    if (!track || count === 0) return;
    const clamped = ((i % count) + count) % count;
    const slide = track.children[clamped];
    if (slide) {
      track.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' });
    }
  }, [count]);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    let best = 0;
    let bestDist = Infinity;
    Array.from(track.children).forEach((el, i) => {
      const dist = Math.abs(el.offsetLeft - track.scrollLeft);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    indexRef.current = best;
    setIndex(best);
  };

  useEffect(() => {
    if (!autoPlay || count < 2) return;
    const timer = setInterval(() => {
      if (!pausedRef.current) {
        scrollTo(indexRef.current + 1);
      }
    }, autoPlay);
    return () => clearInterval(timer);
  }, [autoPlay, count, scrollTo]);

  return (
    <div
      className={`carousel ${className}`}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
      onTouchStart={() => { pausedRef.current = true; }}
      onTouchEnd={() => { pausedRef.current = false; }}
    >
      <div className="carousel-track" ref={trackRef} onScroll={handleScroll}>
        {slides.map((child, i) => (
          <div className="carousel-slide" key={i}>{child}</div>
        ))}
      </div>

      <div className="carousel-controls">
        <button className="carousel-arrow" onClick={() => scrollTo(index - 1)} aria-label="Previous slide">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div className="carousel-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot ${i === index ? 'active' : ''}`}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button className="carousel-arrow" onClick={() => scrollTo(index + 1)} aria-label="Next slide">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
