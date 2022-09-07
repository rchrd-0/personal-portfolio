import React from 'react';

import SectionContainer from './SectionContainer';
import SectionHeader from './SectionHeader';
import '../styles/components/Contact.scss';
import github from '../assets/icons/icn_github.svg';
import email from '../assets/icons/icn_email.svg';

const Contact = () => {
  return (
    <SectionContainer id="contact">
      <SectionHeader sectionNum="04" sectionName="Contact" />
      <div className="content">
        <p>I&#8217;m currently looking for a role as a front-end developer.</p>
        <p>
          If you&#8217;d like to get in touch (even for just a friendly chat),
          feel free to reach out to me!
        </p>
        <div id="contact-links">
          <div>
            <img src={email} alt="Email icon" />
            richard.ytli@gmail.com
          </div>
          <a href="https://github.com/rchrd-0">
            <img src={github} alt="Github icon" />
            More on GitHub
          </a>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
