import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/products";
import ProductCard from "../components/ProductCard"; // Без .tsx
import products from '../data/products.json';


const HomePage = ({ searchTerm='' }) => {
  const filteredProducts = products.filter(product => {
    return(
     product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
});
  const {
   data,
   isLoading,
   isError
  } = useQuery({
  queryKey: [ 'products' ],
  queryFn: getProducts,
   });
  if(isLoading){
  return <div>Загрузка...</div>
  }
 if(isError){
 return <div>Произошла ошибка при загрузке данных</div>
 }
 return (
  <div>
   

     <h2>Список товаров</h2>
   <div className='product-list-container'>
  
     {filteredProducts.map(( product ) => (
      <ProductCard key={product.id} product ={product}/>
     ))}
   </div>
  </div>
 );
};

 export default HomePage;