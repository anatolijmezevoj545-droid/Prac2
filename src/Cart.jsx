import { useContext } from 'react';
import { ShopContext } from './Context';

function Cart() {
  const { cart, setCart } = useContext(ShopContext);

  function removeFromCart(indexToRemove) {
    const newCart = cart.filter((item, index) => index !== indexToRemove);
    setCart(newCart);
  }

  function changeQty(index, delta) {
    const newCart = cart.map((item, i) => {
      if (i === index) {
        const newQty = item.qty + delta;
        return { ...item, qty: newQty };
      }
      return item;
    }).filter(item => item.qty > 0);
    
    setCart(newCart);
  }

  let total = 0;
  cart.forEach((item) => {
    total = total + (item.price * item.qty);
  });

  return (
    <div>
      <h2>Ваша корзина</h2>
      
      {cart.length === 0 ? <p>Корзина пуста</p> : null}
      
      {cart.map((item, index) => (
        <div key={index} style={{ display: 'flex', gap: '20px', margin: '10px 0', alignItems: 'center' }}>
          <span style={{ width: '100px' }}>{item.name}</span>
          <span style={{ width: '80px' }}>{item.price} руб.</span>
          
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <button onClick={() => changeQty(index, -1)}>-</button>
            <span>{item.qty} шт.</span>
            <button onClick={() => changeQty(index, 1)}>+</button>
          </div>

          <button onClick={() => removeFromCart(index)}>Удалить</button>
        </div>
      ))}

      <h3>Итого: {total} руб.</h3>
    </div>
  );
}

export default Cart;