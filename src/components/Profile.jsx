import React from 'react';

import '../styles/components/Profile.scss';
import SectionContainer from './SectionContainer';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';

const Profile = () => {
  return (
    <SectionContainer id="profile">
      <AboutSection />
      <SkillsSection />
    </SectionContainer>
  );
};

export default Profile;
