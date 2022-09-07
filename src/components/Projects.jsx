import React, { useState, useEffect } from 'react';

import SectionContainer from './SectionContainer';
import SectionHeader from './SectionHeader';
import ProjectItem from './ProjectItem';
import importAll from '../utils/importAll';
import getProjects from '../utils/projectMap';
import '../styles/components/Projects.scss';

const Projects = () => {
  const [projectList, setProjectList] = useState([]);

  const thisProject = (id) => projectList.find((project) => project.id === id);

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
        {projectList.length > 0 ? (
          <>
            <ProjectItem project={thisProject('waldo')} index="right">
              <p>
                A &#8216;Where&#8217;s Wally&#8217;-type game with a retro game
                console flavour, 5 levels each with an included leaderboard.
              </p>
              <p>
                Built with <span className="highlight">React</span>,{' '}
                <span className="highlight">Styled Components</span>,{' '}
                <span className="highlight">Framer Motion</span> &{' '}
                <span className="highlight">Firebase</span>
                &#8217;s Cloud Firestore for the back-end.
              </p>
            </ProjectItem>
            <ProjectItem project={thisProject('shop')} index="left">
              <p>
                A mock storefront page serving as one of my first projects
                learning <span className="highlight">React</span>.
              </p>
              <p>
                Built with <span className="highlight">React</span>,{' '}
                <span className="highlight">Styled Components</span> &{' '}
                <span className="highlight">Framer Motion</span>
              </p>
            </ProjectItem>
            <ProjectItem project={thisProject('battleship')} index="right">
              <p>
                Vanilla <span className="highlight">JavaScript</span>{' '}
                implementation of the Battleship game built with test-first
                development in mind{' '}
              </p>
              <p>
                Built with <span className="highlight">JavaScript</span>,{' '}
                <span className="highlight">Sass</span> and unit tested with{' '}
                <span className="highlight">Jest</span>.
              </p>
            </ProjectItem>
            <ProjectItem project={thisProject('todo')} index="left">
              <p>
                Simple to-do list app built as a personal exercise to work with
                <span className="highlight"> ES6 modules</span>,{' '}
                <span className="highlight">date-fns</span> & local storage.
              </p>
              <p>
                Built with <span className="highlight">JavaScript</span> &
                bundled with <span className="highlight">Webpack</span>.
              </p>
            </ProjectItem>
          </>
        ) : null}
      </div>
    </SectionContainer>
  );
};

export default Projects;
