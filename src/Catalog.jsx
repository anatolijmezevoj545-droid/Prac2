import { useContext } from 'react';
import { ShopContext } from './Context';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Телефон', price: 15000 },
  { id: 2, name: 'Ноутбук', price: 50000 },
  { id: 3, name: 'Наушники', price: 3000 },
  { id: 4, name: 'Клавиатура', price: 2000 },
  { id: 5, name: 'Мышь', price: 1000 },
];

function Catalog() {
  const { cart, setCart } = useContext(ShopContext);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div>
      <h2>Каталог товаров</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {products.map((p) => (
          <div key={p.id} style={{ border: '1px solid gray', padding: '10px', width: '150px' }}>
            <h3>{p.name}</h3>
            <p>{p.price} руб.</p>
            <button onClick={() => addToCart(p)}>В корзину</button>
          </div>
        ))}
      </div>
      <br />
      <Link to="/cart">Перейти в корзину</Link>
    </div>
  );
}

export default Catalog;