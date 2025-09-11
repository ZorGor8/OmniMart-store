import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faInstagram, faYoutube, faTelegram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import Footer from './components/Footer';
import omnimartLogo from './assets/omnimart_logo.png'; 
import './App.css';

library.add(faShoppingCart, faInstagram, faYoutube, faTelegram, faXTwitter);

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  return (
    <div className="app">
      <header>
        <div className="header-brand">
          <Link to="/">
            <img src={omnimartLogo} alt="Omnimart Logo" className="logo" />
            <span className="site-title">OmniMart</span>
          </Link>
        </div>
        <nav>
          <Link to="/">Главная</Link>
          <Link to="/category/men's clothing">Мужская одежда</Link>
          <Link to="/category/women's clothing">Женская одежда</Link>
          <Link to="/category/jewelery">Ювелирные изделия</Link>
          <Link to="/category/electronics">Электроника</Link>
          <Link to="/about">О нас</Link>
          <Link to="/contact">Контакты</Link>
          <div className="search-container">
            <input
              type="text"
              placeholder="Поиск товаров..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <Link to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} /> Корзина ({cart.length})
          </Link>
        </nav>
      </header>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage searchTerm={searchTerm} />} />
          <Route path="/product/:productId" element={<ProductPage addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;