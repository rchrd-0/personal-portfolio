import React from 'react';
import { motion } from 'framer-motion';

import '../styles/components/Footer.scss';

const Footer = () => {
  return (
    <footer>
      Richard Li
      <motion.span
        initial={{ scale: 1 }}
        animate={{ scale: 2 }}
        transition={{
          scale: {
            repeat: Infinity,
            duration: 2.5,
            repeatType: 'reverse',
          },
        }}
      >
        &#xb7;
      </motion.span>
      {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
