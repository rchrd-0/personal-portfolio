import React from 'react';
import PropTypes from 'prop-types';

import PreviewCarousel from './ProjectCarousel';
import Button from './Button';

const ProjectItem = (props) => {
  const { name, url, desc, imgs, index } = props;

  return (
    <div className={`project-item ${index % 2 === 0 ? 'ltr' : 'rtl'}`}>
      <PreviewCarousel imgs={imgs} />
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
  imgs: PropTypes.arrayOf(PropTypes.string),
  index: PropTypes.number,
};

export default ProjectItem;
