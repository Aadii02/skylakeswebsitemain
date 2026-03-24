import React from 'react';

export default function SlideButton({ href, onClick, children, disabled, type = "button", fullWidth }) {
  const content = (
    <div className={`slide-btn__inner ${fullWidth ? 'full-width' : ''}`}>
      <div className="slide-btn__fill"></div>

      <div className="slide-btn__text-wrap">
        <span className="slide-btn__label-default">{children}</span>
        <span className="slide-btn__label-hover">{children}</span>
      </div>

      <div className="slide-btn__icon">
        {disabled ? (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className={`slide-btn ${disabled ? 'disabled' : ''} ${fullWidth ? 'full-width' : ''}`}>
        {content}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick} 
      disabled={disabled} 
      className={`slide-btn ${disabled ? 'disabled' : ''} ${fullWidth ? 'full-width' : ''}`} 
      type={type}
    >
      {content}
    </button>
  );
}
