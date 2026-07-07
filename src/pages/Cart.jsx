import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
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

  if (cart.length === 0) {
    return (
      <main className="container py-5">
        <div className="empty-cart text-center">
          <h1>Tu carrito está vacío</h1>
          <p className="text-muted">Agregá productos para comenzar tu compra.</p>

          <Link to="/products" className="btn btn-dark rounded-pill px-5 mt-3">
            Explorar catálogo
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h1 className="fw-bold">Carrito</h1>
            <p className="text-muted mb-0">Revisá tus productos antes de pagar.</p>
          </div>

          <button className="btn btn-outline-danger rounded-pill px-4" onClick={clearCart}>
            Vaciar carrito
          </button>
        </div>

        <div className="row g-4">
          <div className="col-12 col-lg-8">
            {cart.map((item) => (
              <div className="cart-item" key={`${item.id}-${item.selectedColor || "default"}`}>
                <img src={item.image} alt={item.name} className="cart-item-img" />

                <div className="cart-item-info">
                  <p className="cart-item-category">{item.category} · {item.brand}</p>
                  <h4>{item.name}</h4>

                  {item.selectedColor && (
                    <small className="text-muted">Color: {item.selectedColor}</small>
                  )}

                  <p className="text-muted mb-0">Stock disponible: {item.stock}</p>
                </div>

                <div className="cart-item-actions">
                  <strong>USD ${item.price}</strong>

                  <div className="cart-quantity">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      disabled={item.quantity >= item.stock}
                    >
                      +
                    </button>
                  </div>

                  <p className="fw-bold mb-0">
                    Subtotal: USD ${item.price * item.quantity}
                  </p>

                  <button
                    className="btn btn-sm btn-outline-danger rounded-pill"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="col-12 col-lg-4">
            <aside className="cart-summary">
              <h3>Resumen</h3>

              <div className="d-flex justify-content-between my-3">
                <span>Subtotal</span>
                <strong>USD ${cartTotal}</strong>
              </div>

              <div className="d-flex justify-content-between my-3">
                <span>Envío</span>
                <strong>Gratis</strong>
              </div>

              <hr />

              <div className="d-flex justify-content-between fs-4 fw-bold">
                <span>Total</span>
                <span>USD ${cartTotal}</span>
              </div>

              <Link to="/checkout" className="btn btn-dark w-100 rounded-pill py-3 mt-4">
                Continuar al checkout
              </Link>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;