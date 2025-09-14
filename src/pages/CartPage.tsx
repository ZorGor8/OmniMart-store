import type { CartItem } from '../App';
import './CartPage.css';

interface CartPageProps {
  cart: CartItem[];
  removeFromCart: (productId: number) => void;
}

const CartPage = ({ cart, removeFromCart }: CartPageProps) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page-container">
      <h1 className="cart-title">Корзина</h1>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Ваша корзина пуста.</p>
      ) : (
        <ul className="cart-items-list">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-item-price">${item.price.toFixed(2)} x {item.quantity}</p>
              </div>
              <button className="remove-button" onClick={() => removeFromCart(item.id)}>
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-summary">
        <h2 className="total-title">Итого: ${total.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default CartPage;