import React from 'react';
import SectionHeader from './SectionHeader';

import SkillsCard from './SkillsCard';
import SkillIcon from './SkillsIcon';
import '../styles/components/SkillsSection.scss';

const SkillsSection = () => {
  return (
    <div id="skills">
      <SectionHeader sectionNum="02" sectionName="Tools & skills" />
      <SkillsCard cardName="Currently using">
        <div>
          <SkillIcon skill="html" />
          <SkillIcon skill="css" />
          <SkillIcon skill="sass" />
          <SkillIcon skill="webpack" />
        </div>
        <div>
          <SkillIcon skill="js" />
          <SkillIcon skill="react" />
          <SkillIcon skill="styled" />
          <SkillIcon skill="framer" />
        </div>
        <div>
          <SkillIcon skill="git" />
          <SkillIcon skill="npm" />
          <SkillIcon skill="jest" />
          <SkillIcon skill="firebase" />
        </div>
      </SkillsCard>
      <SkillsCard cardName="Learning goals">
        <div>
          <SkillIcon skill="nodejs" />
          <SkillIcon skill="ts" />
          <SkillIcon skill="tailwind" />
        </div>
      </SkillsCard>
    </div>
  );
};

export default SkillsSection;
