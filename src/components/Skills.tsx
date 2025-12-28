import '../styles/Skills.css';
import { skills } from '../constants/skills';
import { RefObject } from 'react';

interface ISkillsProps {
 sectionRef: RefObject<HTMLElement>;
}

const Skills = ({ sectionRef }: ISkillsProps) => {
 return (
  <section
   ref={sectionRef}
   className="skills__section"
  >
   <div className="skills__container">
    <h2 className="skills__title">Skills & Expertise</h2>
    <p className="skills__subtitle">
     Technologies and tools I work with to bring ideas to life
    </p>
    <div className="skills__grid">
     {skills.map((skill, index) => (
      <div
       key={skill.name}
       className="skill__card"
       style={{ animationDelay: `${index * 0.1}s` }}
      >
       <div className="skill__icon">
        <img
         src={skill.icon}
         alt="icon"
        />
       </div>
       <h3 className="skill__name">{skill.name}</h3>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
};

export default Skills;
