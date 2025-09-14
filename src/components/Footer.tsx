import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faTelegram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>О нас</h4>
          <p>
            OmniMart - ваш универсальный магазин, предлагающий широкий ассортимент товаров.
          </p>
        </div>
        <div className="footer-section">
          <h4>Контакты</h4>
          <ul>
            <li>Email: contact@omnimart.com</li>
            <li>Телефон: +1 (555) 123-4567</li>
            <li>Адрес: 123 Main St, Anytown USA</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Социальные сети</h4>
          <div className="social-icons">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://t.me/yourtelegram" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTelegram} size="2x" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} size="2x" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 OmniMart. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;