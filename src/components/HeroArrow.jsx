import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const HeroArrow = (props) => {
  const { variants } = props;

  return (
    <motion.div
      id="hero-button"
      variants={variants.container}
      initial="initial"
      animate="animate"
      whileHover={{ scale: 1.15 }}
      transition={{ type: 'spring', stiffness: 400 }}
    >
      <svg
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M36 15V57"
          stroke="#B4DAF8"
          strokeWidth="6.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={variants.arrow}
        />
        <motion.path
          d="M57 36L36 57L15 36"
          stroke="#B4DAF8"
          strokeWidth="6.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={variants.arrow}
        />
      </svg>
    </motion.div>
  );
};

HeroArrow.propTypes = {
  variants: PropTypes.shape({
    container: PropTypes.shape({
      animate: PropTypes.shape({
        y: PropTypes.arrayOf(PropTypes.number),
        transition: PropTypes.shape({
          y: PropTypes.shape({
            delay: PropTypes.number,
            type: PropTypes.string,
            duration: PropTypes.number,
            ease: PropTypes.string,
            repeat: PropTypes.number,
            repeatType: PropTypes.string,
            repeatDelay: PropTypes.number,
          }),
        }),
      }),
    }),

    arrow: PropTypes.shape({
      initial: PropTypes.shape({
        opacity: PropTypes.number,
        pathLength: PropTypes.number,
      }),

      animate: PropTypes.shape({
        opacity: PropTypes.number,
        pathLength: PropTypes.number,
        transition: PropTypes.shape({
          duration: PropTypes.number,
          ease: PropTypes.string,
          delay: PropTypes.number,
        }),
      }),
    }),
  }),
};

export default HeroArrow;
