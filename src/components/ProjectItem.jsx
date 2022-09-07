import React from 'react';
import PropTypes from 'prop-types';

import ImageCarousel from './ImageCarousel';
import Button from './Button';

const ProjectItem = (props) => {
  // const { name, url, imgs, index, children } = props;
  const { project, index, children } = props;

  return (
    // <div className={`project-item ${index % 2 === 0 ? 'ltr' : 'rtl'}`}>
    <div className={`project-item ${index === 'right' ? 'ltr' : 'rtl'}`}>
      <ImageCarousel imgs={project.imgs} />
      <div className="details">
        <h2>{project.name}</h2>
        {children}
        <div className="button-container">
          <Button
            onClick={() =>
              window.open(`https://github.com/rchrd-0/${project.url}`, '_blank')
            }
            text="repo"
          />
          <Button
            onClick={() =>
              window.open(`https://rchrd-0.github.io/${project.url}`, '_blank')
            }
            text="Live demo"
          />
        </div>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    imgs: PropTypes.arrayOf(PropTypes.string),
  }),
  children: PropTypes.node,
  index: PropTypes.string,
  // name: PropTypes.string,
  // url: PropTypes.string,
  // desc: PropTypes.string,
  // imgs: PropTypes.arrayOf(PropTypes.string),
  // index: PropTypes.number,
};

export default ProjectItem;
