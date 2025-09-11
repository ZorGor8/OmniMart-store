
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faTelegram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faInstagram, faYoutube, faTelegram, faXTwitter);

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="social-links">
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a href="#" className="social-icon">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
      </div>
      <p className="copyright-text">© 2024 OmniMart. Все права защищены.</p>
    </footer>
  );
};

export default Footer;