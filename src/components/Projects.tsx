import { useAppSelector } from '../store/hooks';
import { RootState } from '../store/store';
import { translations } from '../constants/translations';

import { ProjectCard } from './ProjectCard';
import '../styles/Projects.css';

const Projects = () => {
 const language = useAppSelector((state: RootState) => state.language.current);
 const text = translations[language];

 const projects = [
  {
   title: text.projects.bookstore.title,
   description: text.projects.bookstore.description,
   tags: ['React', 'Redux', 'Typescript', 'Axios', 'Scss'],
   image: '../src/public/projects-preview/bookstore.avif',
   github: 'https://github.com/rufrej/bookstore',
   demo: 'https://bookstore-roan-nine.vercel.app/',
  },
  {
   title: text.projects.sneakers.title,
   description: text.projects.sneakers.description,
   tags: ['Vue', 'Tailwind', 'Axios'],
   image: '../src/public/projects-preview/sneakers.avif',
   github: 'https://github.com/rufrej/vue-sneackers',
   demo: 'https://vue-sneackers.vercel.app/',
  },
  {
   title: text.projects.df.title,
   description: text.projects.df.description,
   tags: ['Javascript', 'HTML', 'CSS', 'Canvas'],
   image: '../src/public/projects-preview/df.avif',
   github: 'https://github.com/rufrej/defend_and_fight',
   demo: 'https://defend-and-fight.vercel.app/',
  },
 ];

 return (
  <section
   id="projects"
   className="projects-section"
  >
   <div className="projects-container">
    <h2 className="projects-title">My Projects</h2>
    <p className="projects-subtitle">
     A selection of my recent work and personal projects
    </p>
    <div className="projects-grid">
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
