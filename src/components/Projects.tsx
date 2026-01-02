import { useAppSelector } from '../store/hooks';
import { RootState } from '../store/store';
import { translations } from '../constants/translations';
import { ProjectCard } from './ProjectCard';
import '../styles/Projects.css';
import sneakerPrewiev from '../../src/public/projects-preview/sneakers.avif';
import bookstorePrewiev from '../../src/public/projects-preview/bookstore.avif';
import dfPrewiev from '../../src/public/projects-preview/df.avif';
import { RefObject } from 'react';

interface IProjectProps {
 sectionRef: RefObject<HTMLElement>;
}

const Projects = ({ sectionRef }: IProjectProps) => {
 const language = useAppSelector((state: RootState) => state.language.current);
 const text = translations[language];

 const projects = [
  {
   title: text.projects.bookstore.title,
   description: text.projects.bookstore.description,
   tags: ['React', 'Redux', 'Typescript', 'Axios', 'Scss'],
   image: bookstorePrewiev,
   github: 'https://github.com/rufrej/bookstore',
   demo: 'https://bookstore-roan-nine.vercel.app/',
  },
  {
   title: text.projects.sneakers.title,
   description: text.projects.sneakers.description,
   tags: ['Vue', 'Tailwind', 'Axios'],
   image: sneakerPrewiev,
   github: 'https://github.com/rufrej/vue-sneackers',
   demo: 'https://vue-sneackers.vercel.app/',
  },
  {
   title: text.projects.df.title,
   description: text.projects.df.description,
   tags: ['Javascript', 'HTML', 'CSS', 'Canvas'],
   image: dfPrewiev,
   github: 'https://github.com/rufrej/defend_and_fight',
   demo: 'https://defend-and-fight.vercel.app/',
  },
 ];

 return (
  <section
   ref={sectionRef}
   className="projects__section"
  >
   <div className="projects__container">
    <h2 className="projects__title">{text.projects.title}</h2>
    <p className="projects__subtitle">{text.projects.subtitle}</p>
    <div className="projects__grid">
     {projects.map((project, index) => (
      <ProjectCard
       key={project.title}
       {...project}
       index={index}
      />
     ))}
    </div>
   </div>
  </section>
 );
};

export default Projects;
