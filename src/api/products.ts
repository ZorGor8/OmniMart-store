import axios from 'axios';



export const getProducts = async()=>{
try{
   const response = await axios.get ('https://fakestoreapi.com/products')
 return response.data;
}catch(error){
console.error('Ошибка при получении данных',error);
return null;

}

};


export const getProductsById = async(id: number) =>{
  try {
const responseById = await axios.get(`https://fakestoreapi.com/products/${id}`)
return responseById.data;
  }catch(error){
console.error('Ошибка при получении данных',error);
return [];

  }

}
