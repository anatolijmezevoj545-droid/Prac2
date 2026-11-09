import { useContext } from 'react';
import { ShopContext } from './Context';
import { useNavigate } from 'react-router-dom';

function Login() {
  const { setIsAuth } = useContext(ShopContext);
  const navigate = useNavigate();

  function handleLogin() {
    setIsAuth(true);
    navigate('/dashboard');
  }

  return (
    <div>
      <h2>Вход в систему</h2>
      <p>Нажмите кнопку ниже, чтобы войти в личный кабинет.</p>
      <button onClick={handleLogin} style={{ padding: '10px 20px', cursor: 'pointer', fontSize: '16px' }}>
        Войти
      </button>
    </div>
  );
}

export default Login;