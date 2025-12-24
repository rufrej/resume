import { Github, Linkedin, Send } from 'lucide-react';
import '../styles/Footer.css';
import { useAppSelector } from '../store/hooks';
import { RootState } from '../store/store';
import { translations } from '../constants/translations';

const Footer = () => {
 const language = useAppSelector((state: RootState) => state.language.current);
 const text = translations[language];

 const currentYear = new Date().getFullYear();

 return (
  <footer className="footer">
   <div className="footer-container">
    <div className="footer-content">
     <div className="footer-section">
      <h3 className="footer-title">{text.footer.title}</h3>
      <p className="footer-text">{text.footer.description}</p>
     </div>

     <div className="footer-section">
      <h3 className="footer-title">Contact</h3>
      <div className="footer-links">
       <a
        href="mailto: rufrej@gmail.com"
        className="footer-link"
       >
        rufrej@gmail.com
       </a>
       <a
        href="tel:+375 (29) 29-11-350"
        className="footer-link"
       >
        +375 (29) 29-11-350
       </a>
      </div>
     </div>

     <div className="footer-section">
      <h3 className="footer-title">Follow Me</h3>
      <div className="footer-socials">
       <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        aria-label="GitHub"
       >
        <Github size={24} />
       </a>

       <a
        href="https://www.linkedin.com/in/илья-иванов-7747132a2"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        aria-label="LinkedIn"
       >
        <Linkedin size={24} />
       </a>

       <a
        href="https://t.me/rufrej"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        aria-label="Telegram"
       >
        <Send size={24} />
       </a>
      </div>
     </div>
    </div>

    <div className="footer-bottom">
     <p className="footer-copyright">
      © {currentYear} Your Name. All rights reserved.
     </p>
    </div>
   </div>
  </footer>
 );
};

export default Footer;
