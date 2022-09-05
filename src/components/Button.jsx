import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import '../styles/components/Button.scss';

const Button = (props) => {
  const { onClick, text } = props;
  return (
    <motion.button
      type="button"
      whileHover={{
        backgroundColor: '#b4daf8',
        color: '#1f2233',
        scale: 1.03,
        transition: {
          scale: {
            type: 'spring',
            stiffness: 500,
          },
          color: {
            ease: 'easeInOut',
          },
          backgroundColor: {
            ease: 'easeInOut',
          },
        },
      }}
    >
      {text}
    </motion.button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
};

export default Button;
