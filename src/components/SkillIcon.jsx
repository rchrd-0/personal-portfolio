import React from 'react';
import PropTypes from 'prop-types';

const SkillIcon = (props) => {
  const { name } = props;
  return (
    <div className="skill-icon">
      <img src="" alt={`${name} icon`} />
      <p>{name}</p>
    </div>
  );
};

SkillIcon.propTypes = {
  name: PropTypes.string,
};

export default SkillIcon;
