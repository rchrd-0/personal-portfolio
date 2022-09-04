import React from 'react';
import PropTypes from 'prop-types';

import '../styles/components/SectionHeader.scss';

const SectionHeader = (props) => {
  const { sectionNum, sectionName } = props;

  return (
    <div className="section-header">
      <div className="section-num">{sectionNum}</div>
      <div className="section-name">{sectionName}</div>
      <div className="line-separator" />
    </div>
  );
};

SectionHeader.propTypes = {
  sectionNum: PropTypes.string,
  sectionName: PropTypes.string,
};

export default SectionHeader;
