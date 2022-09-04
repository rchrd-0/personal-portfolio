import React from 'react';
import SectionHeader from './SectionHeader';

import SkillsCard from './SkillsCard';
import SkillIcon from './SkillsIcon';
import '../styles/components/SkillsSection.scss';

const SkillsSection = () => {
  return (
    <div id="skills">
      <SectionHeader sectionNum="02" sectionName="Tools & skills" />
      <SkillsCard>
        <SkillIcon skill="html" />
      </SkillsCard>
    </div>
  );
};

export default SkillsSection;
