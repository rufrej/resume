import { Github, Linkedin, Send } from 'lucide-react';
import '../styles/Contacts.css';
import { useAppSelector } from '../store/hooks';
import { RootState } from '../store/store';
import { translations } from '../constants/translations';

const Contacts = () => {
 const language = useAppSelector((state: RootState) => state.language.current);
 const text = translations[language];

 return (
  <div className="contacts__content">
   <div className="contacts__section">
    <h3 className="contacts__title">{text.contacts.title}</h3>
    <p className="contacts__text">{text.contacts.description}</p>
   </div>

   <div className="contacts__section">
    <h3 className="contacts__title">{text.contacts.contacts}</h3>
    <div className="contacts__links">
     <a
      href="mailto: rufrej@gmail.com"
      className="contacts__link"
     >
      rufrej@gmail.com
     </a>
     <a
      href="tel:+375 (29) 29-11-350"
      className="contacts__link"
     >
      +375 (29) 29-11-350
     </a>
    </div>
   </div>

   <div className="contacts__section">
    <h3 className="contacts__title">Follow Me</h3>
    <div className="contacts__socials">
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
 );
};

export default Contacts;
