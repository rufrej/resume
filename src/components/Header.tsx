import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useState } from 'react';
import { toggleTheme } from '../store/themeSlice';
import { toggleLanguage } from '../store/languageSlice';
import { translations } from '../constants/translations';
import { RootState } from '../store/store';

import {
 Github,
 Globe,
 Linkedin,
 Send,
 Moon,
 Sun,
 Menu,
 X,
} from 'lucide-react';
import '../styles/Header.css';

interface HeaderProps {
 scrollToSection: (section: 'about' | 'skills' | 'projects') => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
 const dispatch = useAppDispatch();
 const theme = useAppSelector((state) => state.theme.mode);
 const [isMenuOpen, setMenuOpen] = useState(false);
 const language = useAppSelector((state: RootState) => state.language.current);
 const text = translations[language];

 return (
  <header className="header">
   <div className="header__container">
    <nav className="header__nav">
     <button
      onClick={() => scrollToSection('about')}
      className="nav-link"
     >
      {text.header.about}
     </button>
     <button
      onClick={() => scrollToSection('skills')}
      className="nav-link"
     >
      {text.header.skills}
     </button>
     <button
      onClick={() => scrollToSection('projects')}
      className="nav-link"
     >
      {text.header.projects}
     </button>
    </nav>

    <div
     className={`header__actions header__menu ${!isMenuOpen ? 'active' : ''}`}
    >
     <div className="header__links">
      <a
       href="https://t.me/rufrej"
       target="_blank"
       rel="noopener noreferrer"
       className="icon-link"
       aria-label="GitHub"
      >
       <Send size={20} />
      </a>
      <a
       href="https://github.com/rufrej"
       target="_blank"
       rel="noopener noreferrer"
       className="icon-link"
       aria-label="GitHub"
      >
       <Github size={20} />
      </a>
      <a
       href="https://www.linkedin.com/in/илья-иванов-7747132a2"
       target="_blank"
       rel="noopener noreferrer"
       className="icon-link"
       aria-label="LinkedIn"
      >
       <Linkedin size={20} />
      </a>
     </div>

     <div className="header__switches">
      <button
       onClick={() => dispatch(toggleTheme())}
       className="switch"
       aria-label="Toggle theme"
      >
       {theme === 'light' ? <Sun size={25} /> : <Moon size={25} />}
      </button>

      <button
       onClick={() => dispatch(toggleLanguage())}
       className="switch"
       aria-label="Toggle language"
      >
       <Globe size={20} />
       <span className="header__lang-text">{language.toUpperCase()}</span>
      </button>
     </div>
    </div>
    <button
     onClick={() => setMenuOpen(!isMenuOpen)}
     className="switch menu__switcher"
     aria-label="Open Menu"
    >
     {!isMenuOpen ? <Menu size={20} /> : <X size={20} />}
    </button>
   </div>
  </header>
 );
};

export default Header;
