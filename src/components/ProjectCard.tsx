import { ExternalLink, Github } from 'lucide-react';
import '../styles/Projects.css';

interface IProjectProps {
 title: string;
 description: string;
 tags: string[];
 image: string;
 github: string;
 demo: string;
 index: number;
}

export function ProjectCard(props: IProjectProps) {
 return (
  <div
   key={props.title}
   className="project__card"
   style={{ animationDelay: `${props.index * 0.1}s` }}
  >
   <div className="project__image-wrapper">
    <img
     src={props.image}
     alt={props.title}
     className="project__image"
    />
    <div className="project__overlay">
     <a
      href={props.github}
      target="_blank"
      rel="noopener noreferrer"
      className="project__link"
      aria-label="View on GitHub"
     >
      <Github size={24} />
     </a>
     <a
      href={props.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="project__link"
      aria-label="View live demo"
     >
      <ExternalLink size={24} />
     </a>
    </div>
   </div>
   <div className="project__content">
    <h3 className="project__title">{props.title}</h3>
    <p className="project__description">{props.description}</p>
    <div className="project__tags">
     {props.tags.map((tag) => (
      <span
       key={tag}
       className="project__tag"
      >
       {tag}
      </span>
     ))}
    </div>
   </div>
  </div>
 );
}
