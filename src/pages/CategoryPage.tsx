import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import type { Product } from '../App';
import './CategoryPage.css';

interface CategoryPageProps {
  products: Product[];
}

const categoryTranslations: { [key: string]: string } = {
  'men\'s clothing': 'Мужская одежда',
  'women\'s clothing': 'Женская одежда',
  'jewelery': 'Ювелирные изделия',
  'electronics': 'Электроника',
};

const CategoryPage = ({ products }: CategoryPageProps) => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (categoryName) {
      const productsByCategory = products.filter(
        (product) => product.category.toLowerCase() === categoryName.toLowerCase()
      );
      setFilteredProducts(productsByCategory);
    }
  }, [categoryName, products]);

  return (
    <div className="category-page-container">
      <h1 className="category-title" style={{ textTransform: 'capitalize', marginBottom: '20px' }}>
        {categoryTranslations[categoryName as keyof typeof categoryTranslations] || 'Категория'}
      </h1>
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;