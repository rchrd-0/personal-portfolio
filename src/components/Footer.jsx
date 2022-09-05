import React from 'react';

import '../styles/components/Footer.scss';

const Footer = () => {
  return (
    <footer>
      Richard Li
      <span>&#xb7;</span>
      {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
