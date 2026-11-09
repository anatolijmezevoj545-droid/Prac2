import { useContext } from 'react';
import { ShopContext } from './Context';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Catalog from './Catalog';
import Cart from './Cart';
import Login from './Login';
import Dashboard from './Dashboard';

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
    padding: '20px',
    fontFamily: 'Arial'
  };

  return (
    <BrowserRouter>
      <div style={styleApp}>
        <nav style={{ display: 'flex', gap: '20px', marginBottom: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
          <NavLink to="/" style={({isActive}) => ({ color: isActive ? 'red' : 'inherit', textDecoration: 'none' })}>Каталог</NavLink>
          <NavLink to="/cart" style={({isActive}) => ({ color: isActive ? 'red' : 'inherit', textDecoration: 'none' })}>Корзина</NavLink>
          
          <NavLink to="/dashboard" style={({isActive}) => ({ color: isActive ? 'red' : 'inherit', textDecoration: 'none' })}>Личный кабинет</NavLink>
          <NavLink to="/login" style={({isActive}) => ({ color: isActive ? 'red' : 'inherit', textDecoration: 'none' })}>Вход</NavLink>

          <button onClick={toggleTheme} style={{ padding: '5px 10px', cursor: 'pointer' }}>Сменить тему</button>
        </nav>

        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;