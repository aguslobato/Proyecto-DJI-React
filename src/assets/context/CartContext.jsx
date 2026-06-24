import {createContext, useState} from "react";
// Creamos el contexto
export const CartContext = createContext();
// Provider que envolverá toda la app
export function CartProvider({children}) {
  // Estado global del carrito
  const [cart, setCart] =
    useState([]);
  // Agregar producto
  const addToCart = (product) => {
    setCart([
      ...cart,
      product
    ]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart}}>{children}</CartContext.Provider>
  );
}