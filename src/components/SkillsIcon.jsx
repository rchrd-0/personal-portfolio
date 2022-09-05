import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/SkillsIcon.scss';
import { getImage, getName } from '../utils/skillMap';

const SkillIcon = (props) => {
  const { skill } = props;

  return (
    <div className="skill-icon">
      <img src={getImage(skill)} alt={`${getName(skill)} icon`} />
      <span>{getName(skill)}</span>
    </div>
  );
};

SkillIcon.propTypes = {
  skill: PropTypes.string,
};

export default SkillIcon;
