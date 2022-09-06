import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import chevronVariants from '../styles/motionVariants/chevronVariants';

const ChevronRight = (props) => {
  const { onClick } = props;
  return (
    <motion.button
      className="chevron right"
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
          d="M17 56L43 30L17 4"
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

ChevronRight.propTypes = {
  onClick: PropTypes.func,
};

export default ChevronRight;
