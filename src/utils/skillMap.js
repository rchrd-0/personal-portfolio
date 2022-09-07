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
import styled from '../assets/icons/icn_styled.svg';
import npm from '../assets/icons/icn_npm.svg';
import tailwind from '../assets/icons/icn_tailwind.svg';
import mongo from '../assets/icons/icn_mongodb.svg';
import express from '../assets/icons/icn_express.svg';

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
  styled,
  npm,
  tailwind,
  mongo,
  express,
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
  webpack: 'Webpack',
  tailwind: 'Tailwind',
  mongo: 'MongoDB',
  express: 'Express',
};

const getImage = (skill) => images[skill];

const getName = (skill) => names[skill];

export { getImage, getName };
