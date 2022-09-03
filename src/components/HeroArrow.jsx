import React from 'react';

const HeroArrow = () => {
  return (
    <div id="hero-button">
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30 12.5V47.5"
          stroke="#B4DAF8"
          strokeWidth="6.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M47.5 30L30 47.5L12.5 30"
          stroke="#B4DAF8"
          strokeWidth="6.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default HeroArrow;
