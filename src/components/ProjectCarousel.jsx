import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

import '../styles/components/ProjectCarousel.scss';

const PreviewCarousel = (props) => {
  const { imgs } = props;
  const [[page, direction], setPage] = useState([0, 0]);

  const imgIndex = wrap(0, imgs.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="carousel">
      <button type="button" id="left" onClick={() => paginate(-1)}>
        left
      </button>
      <button type="button" id="right" onClick={() => paginate(1)}>
        right
      </button>
      <img src={imgs[imgIndex]} alt="" />
    </div>
  );
};

export default PreviewCarousel;
