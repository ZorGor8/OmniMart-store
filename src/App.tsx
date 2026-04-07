import { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import Footer from './components/Footer';
import Header from './components/Header'; 
import { getProducts } from "./api/products";
import type{ Product, CartItem } from './types'; 
import RegisterPage from './pages/RegisterPage';
import './App.css';

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
        console.error("Ошибка:", error);
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
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
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
       
        <Header 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          cart={cart} 
        />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage products={products} searchTerm={searchTerm} addToCart={addToCart} />} />
            <Route path="/product/:productId" element={<ProductPage products={products} addToCart={addToCart} />} />
            <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
            <Route path="/category/:categoryName" element={<CategoryPage products={products} addToCart={addToCart} />} />
            <Route path="/register" element={<RegisterPage />} />
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