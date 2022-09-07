import React from 'react';

import '../styles/components/AboutSection.scss';
import SectionHeader from './SectionHeader';
import Button from './Button';

const AboutSection = () => {
  function scrollContact() {
    window.location = '#contact';
  }

  return (
    <div id="about">
      <SectionHeader sectionNum="01" sectionName="About" />
      <div className="content">
        <p>
          <span className="highlight">Lifelong learner</span>; passionate about
          web development and user experience.
        </p>
        <p>
          Having worked as an editor in the publishing industry and as a
          recruiter for a startup, I&#8217;m no stranger to thinking about the
          user first.
        </p>
        <p>
          Today my focus is on building my skills as a web developer. Creating
          new and pretty experiences & challenging myself by learning more tools
          and ways to solve problems.
        </p>
        <p>
          I&#8217;m currently learning and focusing on the{' '}
          <span className="highlight">MERN stack</span> &{' '}
          <span className="highlight">Tailwind</span> to further my
          understanding of web development.
        </p>
        <Button text="get in touch" onClick={() => scrollContact()} />
      </div>
    </div>
  );
};

export default AboutSection;
