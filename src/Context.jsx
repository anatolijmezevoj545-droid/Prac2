import { createContext, useState } from 'react';

export const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [theme, setTheme] = useState('light');
  const [isAuth, setIsAuth] = useState(false);

  return (
    <ShopContext.Provider value={{ cart, setCart, theme, setTheme, isAuth, setIsAuth }}>
      {children}
    </ShopContext.Provider>
  );
}