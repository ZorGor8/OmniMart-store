import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import omnimartLogo from '../assets/omnimart_logo.png';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'; 
import type { CartItem } from '../types'; 
interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  cart: CartItem[];
}

const Header = ({ searchTerm, setSearchTerm, cart }: HeaderProps) => {
  const location = useLocation();
  const showSearch = location.pathname === '/' || location.pathname.startsWith('/category/');

  return (
    <header>
      <div className="header-brand">
        <Link to="/">
          <img src={omnimartLogo} alt="Логотип" className="logo" />
          <span className="site-title">OmniMart</span>
        </Link>
      </div>
      
      <nav className="nav-links">
        <Link to="/">Главная</Link>
        <Link to="/category/men's clothing">Мужская одежда</Link>
        <Link to="/category/women's clothing">Женская одежда</Link>
        <Link to="/category/electronics">Электроника</Link>
        <Link to="/about">О нас</Link>
        <Link to="/contact">Контакты</Link>
      </nav>
     <div className="header-actions">
  {showSearch && (
    <div className="search-container">
      <input
        type="text"
        placeholder="Поиск..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
    </div>
  )}
  
  <Link to="/cart" className="cart-link">
    <FontAwesomeIcon icon={faShoppingCart} /> 
    ({cart.reduce((total, item) => total + item.quantity, 0)})
  </Link>
    <Link to="/register" className="login-link">
    <FontAwesomeIcon icon={faUser} />
    <span className="login-text">Войти</span>
  </Link>
</div>
    </header>
  );
};

export default Header;