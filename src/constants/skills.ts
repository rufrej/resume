import htmlSvg from '../../src/public/icon-skills/Html.svg';
import cssSvg from '../../src/public/icon-skills/Css3.svg';
import jsSvg from '../../src/public/icon-skills/Javascript.svg';
import tsSvg from '../../src/public/icon-skills/Typescript.svg';
import reactSvg from '../../src/public/icon-skills/React.svg';
import vueSvg from '../../src/public/icon-skills/Vuejs.svg';
import reduxSvg from '../../src/public/icon-skills/Redux.svg';
import axiosSvg from '../../src/public/icon-skills/Axios.svg';
import scssSvg from '../../src/public/icon-skills/Scss.svg';
import gitSvg from '../../src/public/icon-skills/Github.svg';
import bootstrapSvg from '../../src/public/icon-skills/Bootstrap.svg';
import tailwindSvg from '../../src/public/icon-skills/Tailwindcss.svg';
import figmaSvg from '../../src/public/icon-skills/Figma.svg';

interface ISkill {
 icon: string;
 name: string;
}

export const skills: ISkill[] = [
 {
  icon: htmlSvg,
  name: 'HTML',
 },

 {
  icon: cssSvg,
  name: 'CSS',
 },

 {
  icon: jsSvg,
  name: 'JavaScript',
 },

 {
  icon: tsSvg,
  name: 'Typescript',
 },
 {
  icon: reactSvg,
  name: 'React',
 },
 {
  icon: vueSvg,
  name: 'Vue',
 },

 {
  icon: reduxSvg,
  name: 'Redux',
 },
 {
  icon: axiosSvg,
  name: 'Axios',
 },

 {
  icon: scssSvg,
  name: 'SCSS',
 },
 {
  icon: gitSvg,
  name: 'Git',
 },
 {
  icon: bootstrapSvg,
  name: 'Bootstrap',
 },
 {
  icon: tailwindSvg,
  name: 'Tailwind',
 },
 {
  icon: figmaSvg,
  name: 'Figma',
 },
];
