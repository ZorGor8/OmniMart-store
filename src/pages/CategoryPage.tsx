import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products.json';
import { categoryTranslations } from '../data/translations';
import '../App.css'; // Убедись, что этот путь правильный для App.css

function CategoryPage() {
  const { categoryName } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Исправлена опечатка в имени переменной
    const productsByCategory = products.filter(
      (product) => product.category === categoryName
    );
    setFilteredProducts(productsByCategory);
  }, [categoryName]);

  return (
    <div className="product-list-container">
      {/* Убедимся, что название категории отображается красиво */}
      <h1 className="category-title" style={{ textTransform: 'capitalize', marginBottom: '20px' }}>{categoryTranslations[categoryName]}</h1>
      {filteredProducts.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CategoryPage;