import ParallaxBackground from './parallaxBackground';
import '../styles/Intro.css';
import photoMobileAvif from '../../src/public/me/photo_mobile.avif';
import photoMobileWebp from '../../src/public/me/photo_mobile.webp';
import photoAvif from '../../src/public/me/photo.avif';
import photoWebp from '../../src/public/me/photo.webp';

export const Intro = () => {
 return (
  <section className="intro__section">
   <ParallaxBackground />
   <div className="intro__text">
    <h2 className="intro__title">I'm</h2>
    <h2 className="intro__highlight">Frontend Developer</h2>
   </div>
   <div className="intro__image-wrappper">
    <div className="intro__image-placeholder">
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
       className="intro__image"
      />
     </picture>
    </div>
   </div>
  </section>
 );
};
