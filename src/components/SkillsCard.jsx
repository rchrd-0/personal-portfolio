import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/SkillsCard.scss';

const SkillsCard = (props) => {
  const { children } = props;
  return <div className="card">{children}</div>;
};

SkillsCard.propTypes = {
  children: PropTypes.node,
};

export default SkillsCard;
