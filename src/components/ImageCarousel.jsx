import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

import ChevronLeft from './ChevronLeft';
import ChevronRight from './ChevronRight';
import carouselVariants from '../styles/motionVariants/carouselVariants';
import '../styles/components/ProjectCarousel.scss';

const ImageCarousel = (props) => {
  const { imgs } = props;
  const [[page, direction], setPage] = useState([0, 0]);

  const imgIndex = wrap(0, imgs.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="carousel">
      <ChevronLeft onClick={() => paginate(-1)} />
      <ChevronRight onClick={() => paginate(1)} />
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={imgs[imgIndex]}
          img={imgs[imgIndex]}
          variants={carouselVariants}
          custom={direction}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={carouselVariants.transition}
        />
      </AnimatePresence>
    </div>
  );
};

ImageCarousel.propTypes = {
  imgs: PropTypes.arrayOf(PropTypes.string),
};

export default ImageCarousel;
