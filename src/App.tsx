import { useState, useEffect } from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
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
import { getProducts } from "./api/products";
import './App.css';


export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface CartItem extends Product {
  quantity: number;
}

library.add(faShoppingCart, faInstagram, faYoutube, faTelegram, faXTwitter);

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>(''); 
  const [cart, setCart] = useState<CartItem[]>(() => {
  const savedCart = localStorage.getItem('omni-cart');
  return savedCart ? JSON.parse(savedCart) : [];
});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Ошибка при получении товаров:", error);
      }
    };
    fetchProducts();
  }, []);

useEffect(() => {
  localStorage.setItem('omni-cart', JSON.stringify(cart));
}, [cart]); 
const addToCart = (product: Product) => {
  
  setCart((prevCart) => {
  
    const existingItem = prevCart.find((item) => item.id === product.id);

    if (existingItem) {
      
      return prevCart.map((item) =>
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item 
      );
    }

    
    return [...prevCart, { ...product, quantity: 1 }];
  });
};

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  return (
    <BrowserRouter>
      <div className="app">
       <header>
  <div className="header-brand">
    <Link to="/">
      <img src={omnimartLogo} alt="Логотип OmniMart" className="logo" />
      <span className="site-title">OmniMart</span>
    </Link>
  </div>
  
 
  <nav className="nav-links">
    <Link to="/">Главная</Link>
    <Link to="/category/men's clothing">Мужская одежда</Link>
    <Link to="/category/women's clothing">Женская одежда</Link>
    <Link to="/category/jewelery">Ювелирные изделия</Link>
    <Link to="/category/electronics">Электроника</Link>
    <Link to="/about">О нас</Link>
    <Link to="/contact">Контакты</Link>
  </nav>

 
  <div className="header-actions">
    <div className="search-container">
      <input
        type="text"
        placeholder="Поиск..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
    </div>
   <Link to="/cart" className="cart-link">
  <FontAwesomeIcon icon={faShoppingCart} /> 

  ({cart.reduce((total, item) => total + item.quantity, 0)})
</Link>
  </div>
</header>
       <main className="main-content">
  <Routes>
    {/* Главная страница*/}
    <Route 
      path="/" 
      element={<HomePage products={products} searchTerm={searchTerm} addToCart={addToCart} />} 
    />

    {/* Страница одного товара */}
    <Route 
      path="/product/:productId" 
      element={<ProductPage products={products} addToCart={addToCart} />} 
    />

    {/* Страница корзины: */}
    <Route 
      path="/cart" 
      element={<CartPage cart={cart} removeFromCart={removeFromCart} />} 
    />

    {/* Страницы категорий:  */}
    <Route 
      path="/category/:categoryName" 
      element={<CategoryPage products={products} addToCart={addToCart} />} 
    />

    <Route path="/about" element={<AboutPage />} />
    <Route path="/contact" element={<ContactPage />} />
  </Routes>
</main>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;