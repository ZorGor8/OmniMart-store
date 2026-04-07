import { Link } from 'react-router-dom';
import type { Product } from '../types';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  
  addToCart: (product: Product) => void; 
}

const ProductCard = ({ product, addToCart }: ProductCardProps) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} />
      </Link>
      <h3>{product.title}</h3>
      <p className="price">${product.price}</p>
      
      
      <button 
  className="add-to-cart-btn" 
  onClick={() => addToCart(product)}
>
  🛒 
</button>
    </div>
  );
};

export default ProductCard;