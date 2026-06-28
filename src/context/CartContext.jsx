import { createContext, useEffect, useState } from "react";

// Creamos el contexto global del carrito
export const CartContext = createContext();
export function CartProvider({ children }) {
  // Al iniciar la app, intentamos recuperar el carrito guardado
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    // Si había carrito guardado, lo convertimos de texto JSON a array
    if (savedCart) {
      return JSON.parse(savedCart);
    }
    // Si no había nada guardado, arrancamos con carrito vacío
    return [];
  });

  // Cada vez que cambia el carrito, lo guardamos en localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Agregar producto al carrito
  const addToCart = (product, quantity = 1) => {
    setCart((currentCart) => {
      const productInCart = currentCart.find(
        (item) => item.id === product.id
      );

      // Si el producto ya existe en el carrito
      if (productInCart) {
        return currentCart.map((item) => {
          if (item.id === product.id) {
            const newQuantity = item.quantity + quantity;
            return {
              ...item,
              // Math.min evita superar el stock disponible
              quantity: Math.min(newQuantity, item.stock),
            };
          }
          return item;
        });
      }

      // Si el producto NO existe, lo agregamos con quantity
      return [
        ...currentCart,
        {
          ...product,
          // Evita agregar más de lo disponible en stockssssssssssssssssss
          quantity: Math.min(quantity, product.stock),
        },
      ];
    });
  };

  // Sumar una unidad desde el carrito
  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            // No permite pasar el stock
            quantity: Math.min(item.quantity + 1, item.stock),
          };
        }
        return item;
      })
    );
  };

  // Restar una unidad desde el carrito
  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        })
        // Si quantity llega a 0, se elimina del carrito
        .filter((item) => item.quantity > 0)
    );
  };

  // Eliminar producto directamente
  const removeFromCart = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  // Vaciar carrito completo
  const clearCart = () => {
    setCart([]);
  };

  // Cantidad total de productos
  const cartQuantity = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  // Precio total del carrito
  const cartTotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        cartQuantity,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}