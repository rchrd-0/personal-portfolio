import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const ProjectItem = (props) => {
  const { projectName, projectId, direction } = props;

  return (
    <div className="project-item">
      {direction === 'right' ? (
        <>
          <div className="preview">carousel placeholder</div>
          <div className="details">
            <h2>{projectName}</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
              ex fugiat nemo cupiditate corporis quos reiciendis ipsa ea vero
              nihil.
            </p>
            <div className="button-container">
              <Button
                onClick={() =>
                  window.open(
                    `https://github.com/rchrd-0/${projectId}`,
                    '_blank'
                  )
                }
                text="repo"
              />
              <Button
                onClick={() =>
                  window.open(
                    `https://rchrd-0.github.io/${projectId}`,
                    '_blank'
                  )
                }
                text="Live demo"
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="details">
            <h2>{projectName}</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem
              ex fugiat nemo cupiditate corporis quos reiciendis ipsa ea vero
              nihil.
            </p>
            <div className="button-container">
              <Button
                onClick={() =>
                  window.open(
                    `https://github.com/rchrd-0/${projectId}`,
                    '_blank'
                  )
                }
                text="repo"
              />
              <Button
                onClick={() =>
                  window.open(
                    `https://rchrd-0.github.io/${projectId}`,
                    '_blank'
                  )
                }
                text="Live demo"
              />
            </div>
          </div>
          <div className="preview">carousel placeholder</div>
        </>
      )}
    </div>
  );
};

ProjectItem.propTypes = {
  projectName: PropTypes.string,
  projectId: PropTypes.string,
  direction: PropTypes.string,
};

export default ProjectItem;
