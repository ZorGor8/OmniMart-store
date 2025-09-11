import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProductsById } from "../api/products";

const ProductPage =({ addToCart })=>{
const { id } = useParams();

const { data,isLoading,isError } = useQuery ({
queryKey: ['product',id],
queryFn: () => getProductsById(id),
enabled: !!id,
})


if(isLoading){
   return <div>isLoading...</div>
}
if(isError){
return <div>isError</div>
}
if(!data){
return <div>Product not Found</div>
}

return(
<div>

   <div>
   <h1>{data.title}</h1>
   <p>{data.description}</p>
   <p>Price: ${data.price}</p>
   <img src={data.image} alt={data.title} style = {{width:300}} />
   </div>
   <button onClick ={()=> addToCart(data)} >Добавить в корзину</button>

</div>

)

}
export default ProductPage