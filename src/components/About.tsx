import { useAppSelector } from '../store/hooks';
import { RootState } from '../store/store';
import { translations } from '../constants/translations';
import '../styles/About.css';

const About = () => {
 const language = useAppSelector((state: RootState) => state.language.current);
 const text = translations[language];

 return (
  <section
   id="about"
   className="about-section"
  >
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
        srcSet="./src/public/me/photo_mobile.avif"
        media="(max-width: 500px)"
        type="image/avif"
       />
       <source
        srcSet="./src/public/me/photo_mobile.webp"
        media="(max-width: 500px)"
        type="image/webp"
       />

       <source
        srcSet="./src/public/me/photo.webp"
        type="image/webp"
       />

       <img
        src="./src/public/me/photo.avif"
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
