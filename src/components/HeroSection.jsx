import React from 'react';
import HeroArrow from './HeroArrow';

const HeroSection = () => {
  return (
    <div className="container">
      <div id="hero-head">
        Hey there, I&#8217;m <span>Richard</span>.
      </div>
      <div id="hero-subhead">I&#8217;m a front-end web developer.</div>
      <HeroArrow />
    </div>
  );
};

export default HeroSection;
