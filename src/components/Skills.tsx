import '../styles/Skills.css';

const skills = [
 {
  icon: 'src/public/icon-skills/Html5.svg',
  name: 'HTML',
 },

 {
  icon: 'src/public/icon-skills/Css3.svg',
  name: 'CSS',
 },

 {
  icon: 'src/public/icon-skills/Javascript.svg',
  name: 'JavaScript',
 },

 {
  icon: 'src/public/icon-skills/Typescript.svg',
  name: 'Typescript',
 },
 {
  icon: 'src/public/icon-skills/React.svg',
  name: 'React',
 },
 {
  icon: 'src/public/icon-skills/Vuejs.svg',
  name: 'Vue',
 },

 {
  icon: 'src/public/icon-skills/Redux.svg',
  name: 'Redux',
 },
 {
  icon: 'src/public/icon-skills/Axios.svg',
  name: 'Axios',
 },

 {
  icon: 'src/public/icon-skills/Scss.svg',
  name: 'SCSS',
 },
 {
  icon: 'src/public/icon-skills/Github.svg',
  name: 'Git',
 },
 {
  icon: 'src/public/icon-skills/Bootstrap.svg',
  name: 'Bootstrap',
 },
 {
  icon: 'src/public/icon-skills/Tailwindcss.svg',
  name: 'Tailwind',
 },
 {
  icon: 'src/public/icon-skills/Figma.svg',
  name: 'Figma',
 },
];

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
