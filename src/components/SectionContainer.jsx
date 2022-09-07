import React from 'react';
import PropTypes from 'prop-types';

const SectionContainer = (props) => {
  const { id, children } = props;
  return <div id={`${id}`}>{children}</div>;
};

SectionContainer.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
};

export default SectionContainer;
