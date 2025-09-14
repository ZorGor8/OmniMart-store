import ProductCard from '../components/ProductCard';
import type { Product } from '../App';
import './HomePage.css';

interface HomePageProps {
  products: Product[];
  searchTerm: string;
}

const HomePage = ({ products, searchTerm }: HomePageProps) => {
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page-container">
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;