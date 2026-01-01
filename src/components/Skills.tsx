import '../styles/Skills.css';
import { skills } from '../constants/skills';
import { RefObject, useEffect, useRef } from 'react';
import { useAppSelector } from '../store/hooks';
import { RootState } from '../store/store';
import { translations } from '../constants/translations';
import { Code2 } from 'lucide-react';
import {
 Layout,
 Puzzle,
 Server,
 Smartphone,
 KeyRound,
 Zap,
} from 'lucide-react';

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
   {' '}
   <h2 className="skills__title">{text.skills.title}</h2>
   <div className="skills__container">
    <div className="skills__description">
     <div className="skills__text">
      <h3 className="skills__subtitle">{text.skills.subtitle}</h3>

      <p>{text.skills.description}</p>
     </div>
     <div className="skills__points">
      <div className="skills__point">
       <div style={{ backgroundColor: '#ffbebc' }}>
        <Layout color="red" />
       </div>
       <p>{text.skills.point1}</p>
      </div>
      <div className="skills__point">
       <div style={{ backgroundColor: '#fff5ba' }}>
        <Smartphone color="orange" />
       </div>
       <p>{text.skills.point2}</p>
      </div>
      <div className="skills__point">
       <div style={{ backgroundColor: '#ffffd1' }}>
        <Puzzle color="gold" />
       </div>
       <p>{text.skills.point3}</p>
      </div>
      <div className="skills__point">
       <div style={{ backgroundColor: '#bffcc6' }}>
        <Zap color="green" />
       </div>
       <p>{text.skills.point4}</p>
      </div>
      <div className="skills__point">
       <div style={{ backgroundColor: '#c4f4f8' }}>
        <Server color="aqua" />
       </div>
       <p>{text.skills.point5}</p>
      </div>
      <div className="skills__point">
       <div style={{ backgroundColor: '#b5b9ff' }}>
        <KeyRound color="purple" />
       </div>
       <p>{text.skills.point6}</p>
      </div>
     </div>
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
        style={{
         animation: `orbit-${index} 20s linear infinite`,
        }}
        className="orbit-item"
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
  </section>
 );
};

export default Skills;
