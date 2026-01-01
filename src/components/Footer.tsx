import '../styles/Footer.css';

import Contacts from './Contacts';

const Footer = () => {
 const currentYear = new Date().getFullYear();

 return (
  <footer className="footer">
   <div className="footer__container">
    <Contacts />
    <div className="footer__bottom">
     <p className="footer__copyright">
      © {currentYear} Ilya Ivanov. All rights reserved.
     </p>
    </div>
   </div>
  </footer>
 );
};

export default Footer;
