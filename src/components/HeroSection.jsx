import React from 'react';
import { motion } from 'framer-motion';

import HeroArrow from './HeroArrow';
import heroVariants from '../styles/motionVariants/heroVariants';

const HeroSection = () => {
  return (
    <div className="layout">
      <motion.div
        variants={heroVariants.container}
        initial="initial"
        animate="animate"
      >
        <motion.div id="hero-head" variants={heroVariants.children}>
          Hey there, I&#8217;m <span>Richard</span>.
        </motion.div>
        <motion.div id="hero-subhead" variants={heroVariants.children}>
          I&#8217;m a front-end web developer.
        </motion.div>
        <HeroArrow variants={heroVariants.icon} />
      </motion.div>
    </div>
  );
};

export default HeroSection;
