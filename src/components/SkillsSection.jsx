import React from 'react';
import SectionHeader from './SectionHeader';

import '../styles/components/SkillsSection.scss';

const SkillsSection = () => {
  return (
    <div id="skills">
      <SectionHeader sectionNum="02" sectionName="Tools & skills" />
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

export default SkillsSection;
