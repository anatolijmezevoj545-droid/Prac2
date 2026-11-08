import { useContext } from 'react';
import { ShopContext } from './Context';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Catalog from './Catalog';
import Cart from './Cart';

function App() {
  const { theme, setTheme } = useContext(ShopContext);

  function toggleTheme() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  const styleApp = {
    backgroundColor: theme === 'light' ? 'white' : '#333',
    color: theme === 'light' ? 'black' : 'white',
    minHeight: '100vh',
    padding: '20px'
  };

  return (
    <BrowserRouter>
      <div style={styleApp}>
        <nav style={{ display: 'flex', gap: '20px', marginBottom: '20px', alignItems: 'center' }}>
          <NavLink to="/" style={({isActive}) => ({ color: isActive ? 'red' : 'inherit' })}>Каталог</NavLink>
          <NavLink to="/cart" style={({isActive}) => ({ color: isActive ? 'red' : 'inherit' })}>Корзина</NavLink>
          <button onClick={toggleTheme}>Сменить тему</button>
        </nav>

        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;