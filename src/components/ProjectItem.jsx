import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const ProjectItem = (props) => {
  const { name, url, desc, index } = props;

  return (
    <div className={`project-item ${index % 2 === 0 ? 'ltr' : 'rtl'}`}>
      <div className="preview">carousel placeholder</div>
      <div className="details">
        <h2>{name}</h2>
        <p>{desc}</p>
        <div className="button-container">
          <Button
            onClick={() =>
              window.open(`https://github.com/rchrd-0/${url}`, '_blank')
            }
            text="repo"
          />
          <Button
            onClick={() =>
              window.open(`https://rchrd-0.github.io/${url}`, '_blank')
            }
            text="Live demo"
          />
        </div>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  desc: PropTypes.string,
  index: PropTypes.number,
};

export default ProjectItem;
