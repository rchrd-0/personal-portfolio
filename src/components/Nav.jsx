import React from 'react';
import { motion } from 'framer-motion';

import '../styles/components/Nav.scss';
import navVariants from '../styles/motionVariants/navVariants';

const Nav = () => {
  return (
    <nav>
      <motion.div
        id="left"
        variants={navVariants.left}
        whileHover="hover"
        initial="initial"
        animate="animate"
      >
        <a href="#hero">
          rchrd<span>.co</span>
          <motion.span id="after" variants={navVariants.left.after}>
            des
          </motion.span>
        </a>
      </motion.div>
      <div id="right">
        <ul>
          <motion.li variants={navVariants.right} whileHover="hover">
            <a href="#profile">Profile</a>
          </motion.li>
          <motion.li variants={navVariants.right} whileHover="hover">
            <a href="#projects">Projects</a>
          </motion.li>
          <motion.li variants={navVariants.right} whileHover="hover">
            <a href="#contact">Contact</a>
          </motion.li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
