import { useContext } from 'react';
import { ShopContext } from './Context';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { setIsAuth } = useContext(ShopContext);
  const navigate = useNavigate();

  function handleLogout() {
    setIsAuth(false);
    navigate('/');
  }

  return (
    <div>
      <h2>Личный кабинет</h2>
      <p>Добро пожаловать в ваш личный кабинет!</p>
      <p>Здесь могла быть ваша история заказов, настройки профиля или бонусы.</p>
      <button onClick={handleLogout} style={{ padding: '8px', cursor: 'pointer', marginTop: '10px' }}>
        Выйти
      </button>
    </div>
  );
}

export default Dashboard;