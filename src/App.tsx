import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { useRef } from 'react';
import { Intro } from './components/Intro';

function App() {
 const aboutRef = useRef<HTMLElement>(null);
 const skillsRef = useRef<HTMLElement>(null);
 const projectRef = useRef<HTMLElement>(null);

 const scrollToSection = (section: 'about' | 'skills' | 'projects') => {
  const refs = {
   about: aboutRef,
   skills: skillsRef,
   projects: projectRef,
  };

  refs[section].current?.scrollIntoView({
   behavior: 'smooth',
   block: 'start',
  });
 };

 return (
  <>
   <Header scrollToSection={scrollToSection} />
   <main>
    <Intro />
    <About sectionRef={aboutRef} />
    <Skills sectionRef={skillsRef} />
    <Projects sectionRef={projectRef} />
   </main>
   <Footer />
  </>
 );
}

export default App;
