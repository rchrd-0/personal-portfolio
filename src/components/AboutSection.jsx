import React from 'react';

import '../styles/components/AboutSection.scss';
import SectionHeader from './SectionHeader';

const AboutSection = () => {
  return (
    <div id="about">
      <SectionHeader sectionNum="01" sectionName="About" />
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et veniam
          laudantium voluptates ea, minima, optio tempore inventore sapiente
          ipsam vitae ipsa reiciendis architecto dicta a dolorem nulla velit!
          Soluta, mollitia?
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
