import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import chevronVariants from '../styles/motionVariants/chevronVariants';

const ChevronLeft = (props) => {
  const { onClick } = props;
  return (
    <motion.button
      className="chevron left"
      type="button"
      variants={chevronVariants.button}
      whileHover="hover"
      whileTap="tap"
      onClick={onClick}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M43 56L17 30L43 4"
          stroke="#f9f3d7"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={chevronVariants.chevron}
        />
      </svg>
    </motion.button>
  );
};

ChevronLeft.propTypes = {
  onClick: PropTypes.func,
};

export default ChevronLeft;
