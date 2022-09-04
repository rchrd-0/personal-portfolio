import css from '../assets/icons/icn_css.svg';
import firebase from '../assets/icons/icn_firebase.svg';
import framer from '../assets/icons/icn_framer.svg';
import git from '../assets/icons/icn_git.svg';
import html from '../assets/icons/icn_html.svg';
import js from '../assets/icons/icn_javascript.svg';
import jest from '../assets/icons/icn_jest.svg';
import nodejs from '../assets/icons/icn_nodejs.svg';
import react from '../assets/icons/icn_react.svg';
import sass from '../assets/icons/icn_sass.svg';
import ts from '../assets/icons/icn_typescript.svg';
import webpack from '../assets/icons/icn_webpack.svg';

const images = {
  css,
  firebase,
  framer,
  git,
  html,
  js,
  jest,
  nodejs,
  react,
  sass,
  ts,
  webpack,
};

const names = {
  css: 'CSS',
  firebase: 'Firebase',
  framer: 'Framer Motion',
  git: 'Git',
  html: 'HTML',
  js: 'JavaScript',
  jest: 'Jest',
  nodejs: 'Node.js',
  npm: 'npm',
  react: 'React',
  sass: 'Sass',
  styled: 'Styled Components',
  ts: 'TypeScript',
  webpack: 'webpack',
};

const getImage = (skill) => images[skill];

const getName = (skill) => names[skill];

export { getImage, getName };
