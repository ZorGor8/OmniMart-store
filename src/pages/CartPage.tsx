import React from "react";

const CartPage = ({ cart, removeFromCart }) =>{
  return(
    <div>
      <h1>Корзина</h1>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
        <img src={item.image} alt={item.title} /> 
        <div className="cart-item-details">
          <h1>{item.title}</h1>
          <h3>${item.price}</h3>
        </div>
        <button onClick={() => removeFromCart(item.id)}>Удалить</button> 
      </div>
      ))}
    </div>
  )
}
export default CartPage