import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/SectionHeader.scss';

const SectionHeader = (props) => {
  const { sectionNum, sectionName } = props;

  return (
    <div className="section-header">
      <span className="section-num">{sectionNum}</span>
      <h1 className="section-name">{sectionName}</h1>
      <div className="line-separator" />
    </div>
  );
};

SectionHeader.propTypes = {
  sectionNum: PropTypes.string,
  sectionName: PropTypes.string,
};

export default SectionHeader;
