import { useAppSelector } from '../store/hooks';
import { RootState } from '../store/store';
import { translations } from '../constants/translations';
import { RefObject } from 'react';
import '../styles/About.css';
import photoMobileAvif from '../../src/public/me/photo_mobile.avif';
import photoMobileWebp from '../../src/public/me/photo_mobile.webp';
import photoAvif from '../../src/public/me/photo.avif';
import photoWebp from '../../src/public/me/photo.webp';

interface IAboutProps {
 sectionRef: RefObject<HTMLElement>;
}

const About = ({ sectionRef }: IAboutProps) => {
 const language = useAppSelector((state: RootState) => state.language.current);
 const text = translations[language];

 return (
  <section
   ref={sectionRef}
   className="about-section"
  >
   {' '}
   <h2 className="section-title">{text.about.title}</h2>
   <div className="about-container">
    <div className="about-content">
     <h1 className="about-title">
      {text.about.greeting}
      <span className="highlight"> {text.about.myName}</span>
     </h1>
     <h2 className="about-subtitle">Frontend Developer</h2>
     <p className="about-text">{text.about.descriptionBlock1}</p>
     <p className="about-text">{text.about.descriptionBlock2}</p>
     <p className="about-text">{text.about.descriptionBlock3}</p>
    </div>
    <div className="about-image">
     <div className="image-placeholder">
      <picture>
       <source
        srcSet={photoMobileAvif}
        media="(max-width: 500px)"
        type="image/avif"
       />
       <source
        srcSet={photoMobileWebp}
        media="(max-width: 500px)"
        type="image/webp"
       />

       <source
        srcSet={photoWebp}
        type="image/webp"
       />

       <img
        src={photoAvif}
        alt="portrait"
        className="profile-image"
       />
      </picture>
     </div>
    </div>
   </div>
  </section>
 );
};

export default About;
