import { useContext } from "react";
import { CartContext } from "../context/CartContext";

import CartItem from "../components/cart/CartItem";
import CartSummary from "../components/cart/CartSummary";
import EmptyCart from "../components/cart/EmptyCart";

import "./pages.css";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
  } = useContext(CartContext);

  // Si el carrito está vacío, mostramos el componente correspondiente.
  if (cart.length === 0) {
    return (
      <main className="cart-page py-5">
        <div className="container">
          <EmptyCart />
        </div>
      </main>
    );
  }

  // Calculamos cuánto ahorra el usuario por productos en oferta.
  const savings = cart.reduce((total, item) => {
    if (!item.oldPrice || item.oldPrice <= item.price) {
      return total;
    }

    const savingPerUnit = item.oldPrice - item.price;

    return total + savingPerUnit * item.quantity;
  }, 0);

  // Por ahora el envío es gratuito.
  const shipping = 0;

  // cartTotal ya representa la suma de precio actual × cantidad.
  const subtotal = cartTotal;
  const total = subtotal + shipping;

  return (
    <main className="cart-page py-5">
      <div className="container">
        {/* Encabezado del carrito */}
        <header className="cart-page-header">
          <div>
            <p className="cart-page-eyebrow">VisionTech</p>

            <h1 className="cart-page-title">
              Tu carrito
            </h1>

            <p className="cart-page-description">
              Revisá tus productos y cantidades antes de continuar con la compra.
            </p>
          </div>

          <button
            type="button"
            className="cart-clear-button"
            onClick={clearCart}
          >
            Vaciar carrito
          </button>
        </header>

        <div className="row g-4 align-items-start">
          {/* Lista de productos */}
          <div className="col-12 col-lg-8">
            <section className="cart-products-panel">
              <div className="cart-products-header">
                <h2>Productos</h2>

                <span>
                  {cart.length} {cart.length === 1 ? "producto" : "productos"}
                </span>
              </div>

              <div className="cart-products-list">
                {cart.map((item) => (
                  <CartItem
                    key={`${item.id}-${item.selectedColor || "default"}`}
                    item={item}
                    onIncrease={() => increaseQuantity(item.id)}
                    onDecrease={() => decreaseQuantity(item.id)}
                    onRemove={() => removeFromCart(item.id)}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Resumen de compra */}
          <div className="col-12 col-lg-4">
            <CartSummary
              subtotal={subtotal}
              savings={savings}
              shipping={shipping}
              total={total}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;