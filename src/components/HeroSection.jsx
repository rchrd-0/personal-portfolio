import React from 'react';
import { motion } from 'framer-motion';

import '../styles/components/Hero.scss';
import HeroArrow from './HeroArrow';
import heroVariants from '../styles/motionVariants/heroVariants';

const HeroSection = () => {
  return (
    <div id="hero">
      <motion.div
        variants={heroVariants.container}
        initial="initial"
        animate="animate"
      >
        <motion.h1 variants={heroVariants.children}>
          Hey there, I&#8217;m <span>Richard</span>.
        </motion.h1>
        <motion.h2 variants={heroVariants.children}>
          I&#8217;m a front-end web developer.
        </motion.h2>
        <HeroArrow id="hero-button" variants={heroVariants.icon} />
      </motion.div>
    </div>
  );
};

export default HeroSection;
