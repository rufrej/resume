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
   className="project-card"
   style={{ animationDelay: `${props.index * 0.1}s` }}
  >
   <div className="project-image-wrapper">
    <img
     src={props.image}
     alt={props.title}
     className="project-image"
    />
    <div className="project-overlay">
     <a
      href={props.github}
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
      aria-label="View on GitHub"
     >
      <Github size={24} />
     </a>
     <a
      href={props.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="project-link"
      aria-label="View live demo"
     >
      <ExternalLink size={24} />
     </a>
    </div>
   </div>
   <div className="project-content">
    <h3 className="project-title">{props.title}</h3>
    <p className="project-description">{props.description}</p>
    <div className="project-tags">
     {props.tags.map((tag) => (
      <span
       key={tag}
       className="project-tag"
      >
       {tag}
      </span>
     ))}
    </div>
   </div>
  </div>
 );
}
