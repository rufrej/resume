import '../styles/Skills.css';
import { skills } from '../constants/skills';
import { RefObject, useEffect, useRef } from 'react';
import { useAppSelector } from '../store/hooks';
import { RootState } from '../store/store';
import { translations } from '../constants/translations';
import { Code2 } from 'lucide-react';
import ParallaxBackground from './parallaxBackground';
import {
 Code,
 Database,
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
   <h2 className="skills__title">Skills & Tools</h2>
   <div className="skills__container">
    <div className="skills__description">
     <div className="skills__text">
      <h3 className="skills__subtitle">My Technical Arsenal</h3>

      <p>
       I work with a diverse set of technologies and frameworks to build robust,
       scalable applications. From frontend to backend, I enjoy every aspect of
       the development process and continuously expand my knowledge to stay
       current with industry trends
      </p>
     </div>
     <div className="skills__points">
      <div className="skills__point">
       <div>
        <Layout color="red" />
       </div>
       <p>{text.skills.point1}</p>
      </div>
      <div className="skills__point">
       <div>
        <Smartphone color="orange" />
       </div>
       <p>{text.skills.point2}</p>
      </div>
      <div className="skills__point">
       <div>
        {' '}
        <Puzzle color="gold" />
       </div>
       <p>{text.skills.point3}</p>
      </div>
      <div className="skills__point">
       <div>
        <Zap color="green" />
       </div>
       <p>{text.skills.point4}</p>
      </div>
      <div className="skills__point">
       <div>
        {' '}
        <Server color="aqua" />
       </div>
       <p>{text.skills.point5}</p>
      </div>
      <div className="skills__point">
       <div>
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
