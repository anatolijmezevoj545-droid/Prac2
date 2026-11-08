import { useContext } from 'react';
import { ShopContext } from './Context';

function Cart() {
  const { cart, setCart } = useContext(ShopContext);

  function removeFromCart(indexToRemove) {
    const newCart = cart.filter((item, index) => index !== indexToRemove);
    setCart(newCart);
  }

  let total = 0;
  cart.forEach((item) => {
    total = total + item.price;
  });

  return (
    <div>
      <h2>Ваша корзина</h2>
      
      {cart.length === 0 ? <p>Корзина пуста</p> : null}
      
      {cart.map((item, index) => (
        <div key={index} style={{ display: 'flex', gap: '20px', margin: '10px 0' }}>
          <span>{item.name}</span>
          <span>{item.price} руб.</span>
          <button onClick={() => removeFromCart(index)}>Удалить</button>
        </div>
      ))}

      <h3>Итого: {total} руб.</h3>
    </div>
  );
}

export default Cart;