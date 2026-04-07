import ProductCard from '../components/ProductCard';
import type { Product } from '../types';
import './HomePage.css'; 

interface HomePageProps {
  products: Product[];
  searchTerm: string;
  addToCart: (product: Product) => void; 
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