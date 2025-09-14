import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getProductsById } from '../api/products';
import type { Product } from '../App';
import './ProductPage.css';

interface ProductPageProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const ProductPage = ({ addToCart }: ProductPageProps) => {
  const { productId } = useParams<{ productId: string }>();

  const id = productId ? parseInt(productId, 10) : undefined;
  const { data: product, isLoading, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductsById(id as number),
    enabled: !!id,
  });

  if (isLoading) return <div className="loading-message">Загрузка...</div>;
  if (error) return <div className="error-message">Произошла ошибка: {(error as Error).message}</div>;

  if (!product) {
    return <div className="not-found-message">Товар не найден.</div>;
  }

  return (
    <div className="product-page-container">
      <div className="product-image-container">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>
      <div className="product-details">
        <h1 className="product-title">{product.title}</h1>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-description">{product.description}</p>
        <button className="add-to-cart-button" onClick={() => addToCart(product)}>
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default ProductPage;