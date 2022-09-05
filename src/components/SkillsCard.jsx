import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/SkillsCard.scss';

const SkillsCard = (props) => {
  const { children, cardName } = props;
  return (
    <div className="card-wrapper">
      <h1>{cardName}</h1>
      <div className="card">{children}</div>
    </div>
  );
};

SkillsCard.propTypes = {
  children: PropTypes.node,
  cardName: PropTypes.string,
};

export default SkillsCard;
