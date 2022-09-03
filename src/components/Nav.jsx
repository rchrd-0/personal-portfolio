import React from 'react';
import { motion } from 'framer-motion';

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
        rchrd<span>.co</span>
        <motion.span id="after" variants={navVariants.left.after}>
          des
        </motion.span>
      </motion.div>
      <div id="right">
        <ul>
          <motion.li variants={navVariants.right} whileHover="hover">
            <a>About</a>
          </motion.li>
          <motion.li variants={navVariants.right} whileHover="hover">
            <a>Projects</a>
          </motion.li>
          <motion.li variants={navVariants.right} whileHover="hover">
            <a>Contact</a>
          </motion.li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
