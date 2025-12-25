import '../styles/Skills.css';
import { skills } from '../constants/skills';

const Skills = () => {
 return (
  <section
   id="skills"
   className="skills-section"
  >
   <div className="skills-container">
    <h2 className="skills-title">Skills & Expertise</h2>
    <p className="skills-subtitle">
     Technologies and tools I work with to bring ideas to life
    </p>
    <div className="skills-grid">
     {skills.map((skill, index) => (
      <div
       key={skill.name}
       className="skill-card"
       style={{ animationDelay: `${index * 0.1}s` }}
      >
       <div className="skill-icon">
        <img
         src={skill.icon}
         alt="icon"
        />
       </div>
       <h3 className="skill-name">{skill.name}</h3>
      </div>
     ))}
    </div>
   </div>
  </section>
 );
};

export default Skills;
