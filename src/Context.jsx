import { createContext, useState } from 'react';

export const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [theme, setTheme] = useState('light');

  return (
    <ShopContext.Provider value={{ cart, setCart, theme, setTheme }}>
      {children}
    </ShopContext.Provider>
  );
}