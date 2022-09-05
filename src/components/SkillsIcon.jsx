import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import '../styles/components/SkillsIcon.scss';
import { getImage, getName } from '../utils/skillMap';

const SkillIcon = (props) => {
  const { skill } = props;

  return (
    <motion.div
      className="skill-icon"
      whileHover={{
        scale: 1.05,
        transition: {
          type: 'spring',
          stiffness: 500,
        },
      }}
    >
      <img src={getImage(skill)} alt={`${getName(skill)} icon`} />
      <span>{getName(skill)}</span>
    </motion.div>
  );
};

SkillIcon.propTypes = {
  skill: PropTypes.string,
};

export default SkillIcon;
