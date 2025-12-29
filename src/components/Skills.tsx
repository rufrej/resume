import '../styles/Skills.css';
import { skills } from '../constants/skills';
import { RefObject, useEffect, useRef } from 'react';
import { useAppSelector } from '../store/hooks';
import { RootState } from '../store/store';
import { translations } from '../constants/translations';
import { Code2 } from 'lucide-react';
import ParallaxBackground from './parallaxBackground';

interface ISkillsProps {
 sectionRef: RefObject<HTMLElement>;
}

function createOrbitAnimation(skillCount: number) {
 const angleStep = 360 / skillCount;

 const keyframes = skills
  .map((_, index) => {
   const startAngle = index * angleStep;
   return `
      @keyframes orbit-${index} {
        from {
          transform: rotate(${startAngle}deg) translateX(200px) rotate(-${startAngle}deg);
        }
        to {
          transform: rotate(${startAngle + 360}deg) translateX(200px) rotate(-${
    startAngle + 360
   }deg);
        }
      }
    `;
  })
  .join('\n');

 return keyframes;
}

const Skills = ({ sectionRef }: ISkillsProps) => {
 const language = useAppSelector((state: RootState) => state.language.current);
 const text = translations[language];

 const styleRef = useRef<HTMLStyleElement | null>(null);

 useEffect(() => {
  if (!styleRef.current) {
   styleRef.current = document.createElement('style');
   document.head.appendChild(styleRef.current);
  }

  const keyframes = createOrbitAnimation(skills.length);
  styleRef.current.textContent = keyframes;

  return () => {
   if (styleRef.current && styleRef.current.parentNode) {
    styleRef.current.parentNode.removeChild(styleRef.current);
    styleRef.current = null;
   }
  };
 }, []);

 return (
  <section
   ref={sectionRef}
   className="skills__section"
  >
   <ParallaxBackground />
   <div className="skills__container">
    <h2 className="skills__title">Skills & Tools</h2>

    <div className="skills__grid">
     <div className="skills__description">
      <h3 className="skills__subtitle">My Technical Arsenal</h3>

      <ul className="skills__list">
       <li>{text.skills.point1}</li>
       <li>{text.skills.point2}</li>
       <li>{text.skills.point3}</li>
       <li>{text.skills.point4}</li>
       <li>{text.skills.point5}</li>
       <li>{text.skills.point6}</li>
      </ul>
     </div>
     <div className="skills__orbit-container">
      <div className="orbit-center">
       <div className="center-circle">
        <Code2 size={48} />
       </div>
      </div>
      <div className="orbit-ring"></div>
      <div className="orbit-items">
       {skills.map((skill, index) => (
        <div
         key={skill.name}
         className="orbit-item"
         style={{
          animation: `orbit-${index} 20s linear infinite`,
         }}
        >
         <div className="skill-icon">
          <img
           src={skill.icon}
           alt={skill.name}
          />

          <span className="skill-name">{skill.name}</span>
         </div>
        </div>
       ))}
      </div>
     </div>
    </div>
   </div>

   <div className="orbit"></div>
  </section>
 );
};

export default Skills;
