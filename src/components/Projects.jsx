import React, { useEffect } from 'react';

import SectionContainer from './SectionContainer';
import SectionHeader from './SectionHeader';
import ProjectItem from './ProjectItem';
import importAll from '../utils/importAll';
import getProject from '../utils/projectMap';
import '../styles/components/Projects.scss';

const Projects = () => {
  // useEffect(() => {
  //   // const imgs = importAll(
  //   //   require.context('../assets/projectPreviews/', false, /\.(png|jpe?g|svg)$/)
  //   // );
  // }, []);

  return (
    <SectionContainer id="projects">
      <SectionHeader sectionNum="03" sectionName="Featured projects" />
      <div className="item-wrapper">
        <ProjectItem projectName="Foo" projectId="foo" direction="right" />
        <ProjectItem projectName="Bar" projectId="bar" direction="left" />
      </div>
    </SectionContainer>
  );
};

export default Projects;
