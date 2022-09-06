import React, { useState, useEffect } from 'react';

import SectionContainer from './SectionContainer';
import SectionHeader from './SectionHeader';
import ProjectItem from './ProjectItem';
import importAll from '../utils/importAll';
import getProjects from '../utils/projectMap';
import '../styles/components/Projects.scss';

const Projects = () => {
  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    const projects = getProjects();
    const images = importAll(
      require.context('../assets/projectPreviews/', false, /\.(png|jpe?g|svg)$/)
    );

    setProjectList(
      projects.map((obj) => ({
        ...obj,
        imgs: images[obj.id],
      }))
    );
  }, []);

  return (
    <SectionContainer id="projects">
      <SectionHeader sectionNum="03" sectionName="Featured projects" />
      <div className="item-wrapper">
        {projectList.map((item, index) => (
          <ProjectItem
            key={item.id}
            url={item.url}
            name={item.name}
            desc={item.desc}
            imgs={item.imgs}
            index={index}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Projects;
