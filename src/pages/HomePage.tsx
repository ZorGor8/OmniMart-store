import ProductCard from '../components/ProductCard';
import type { Product } from '../App';
// Убедись, что стили из App.css или HomePage.css не конфликтуют
import './HomePage.css'; 

interface HomePageProps {
  products: Product[];
  searchTerm: string;
  addToCart: (product: Product) => void; // Добавляем пропс здесь
}

const HomePage = ({ products, searchTerm, addToCart }: HomePageProps) => {
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page-container">
      
      <div className="product-list-container"> 
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;