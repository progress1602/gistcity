import React from 'react';

interface FlagProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Nigeria Flag
 * Aspect 2:3 vertical tricolor (Green-White-Green)
 */
export const NigeriaFlag: React.FC<FlagProps> = ({ className, size = 'md' }) => {
  const sizeClasses = className || (
    size === 'sm' ? 'w-8 h-5' : size === 'lg' ? 'w-16 h-10' : 'w-12 h-8'
  );

  return (
    <span
      role="img"
      aria-label="Flag of Nigeria"
      className={`inline-flex items-center justify-center ${sizeClasses} rounded-md overflow-hidden shadow-md ring-1 ring-white/20 shrink-0 select-none`}
    >
      <svg viewBox="0 0 6 3" className="w-full h-full block" preserveAspectRatio="none">
        <rect width="2" height="3" fill="#008751" />
        <rect x="2" width="2" height="3" fill="#ffffff" />
        <rect x="4" width="2" height="3" fill="#008751" />
      </svg>
    </span>
  );
};

/**
 * United States Flag
 * Stars and Stripes
 */
export const UnitedStatesFlag: React.FC<FlagProps> = ({ className, size = 'md' }) => {
  const sizeClasses = className || (
    size === 'sm' ? 'w-8 h-5' : size === 'lg' ? 'w-16 h-10' : 'w-12 h-8'
  );

  return (
    <span
      role="img"
      aria-label="Flag of the United States"
      className={`inline-flex items-center justify-center ${sizeClasses} rounded-md overflow-hidden shadow-md ring-1 ring-white/20 shrink-0 select-none`}
    >
      <svg viewBox="0 0 7410 3900" className="w-full h-full block" preserveAspectRatio="none">
        <path fill="#b31942" d="M0 0h7410v3900H0" />
        <path stroke="#FFF" strokeWidth="300" d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" />
        <path fill="#0a3161" d="M0 0h2964v2100H0" />
        <g fill="#FFF">
          <g id="us-d-node">
            <g id="us-c-node">
              <g id="us-e-node">
                <g id="us-b-node">
                  <path id="us-star" d="m247 90 70.534 217.082-184.66-134.164h228.253L176.466 307.082z" />
                  <use href="#us-star" y="420" />
                  <use href="#us-star" y="840" />
                  <use href="#us-star" y="1260" />
                </g>
                <use href="#us-star" y="1680" />
              </g>
              <use href="#us-b-node" x="247" y="210" />
            </g>
            <use href="#us-c-node" x="494" />
          </g>
          <use href="#us-d-node" x="988" />
          <use href="#us-c-node" x="1976" />
          <use href="#us-e-node" x="2470" />
        </g>
      </svg>
    </span>
  );
};

/**
 * United Kingdom Flag
 * Official Union Flag
 */
export const UnitedKingdomFlag: React.FC<FlagProps> = ({ className, size = 'md' }) => {
  const sizeClasses = className || (
    size === 'sm' ? 'w-8 h-5' : size === 'lg' ? 'w-16 h-10' : 'w-12 h-8'
  );

  return (
    <span
      role="img"
      aria-label="Flag of the United Kingdom"
      className={`inline-flex items-center justify-center ${sizeClasses} rounded-md overflow-hidden shadow-md ring-1 ring-white/20 shrink-0 select-none`}
    >
      <svg viewBox="0 0 60 30" className="w-full h-full block" preserveAspectRatio="none">
        <clipPath id="uk-flag-a">
          <path d="M0 0v30h60V0z" />
        </clipPath>
        <clipPath id="uk-flag-b">
          <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
        </clipPath>
        <g clipPath="url(#uk-flag-a)">
          <path d="M0 0v30h60V0z" fill="#012169" />
          <path d="m0 0 60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
          <path d="m0 0 60 30m0-30L0 30" clipPath="url(#uk-flag-b)" stroke="#C8102E" strokeWidth="4" />
          <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
          <path d="M30 0v30M0 15h60" stroke="#C8102E" strokeWidth="6" />
        </g>
      </svg>
    </span>
  );
};
