import { Link } from "react-router-dom";
import "../components.css";

function CartSummary({
  subtotal,
  savings = 0,
  shipping = 0,
  total,
}) {
  return (
    <aside className="cart-summary-premium">
      <div className="cart-summary-header">
        <p className="cart-summary-eyebrow">Tu compra</p>
        <h2>Resumen</h2>
      </div>
      <div className="cart-summary-row">
        <span>Subtotal</span>
        <strong>USD ${subtotal.toLocaleString()}</strong>
      </div>
      {savings > 0 && (
        <div className="cart-summary-row cart-summary-savings">
          <span>Ahorrás</span>
          <strong>- USD ${savings.toLocaleString()}</strong>
        </div>
      )}
      <div className="cart-summary-row">
        <span>Envío</span>
        <strong>
          {shipping === 0
            ? "Gratis"
            : `USD $${shipping.toLocaleString()}`}
        </strong>
      </div>
      <hr />
      <div className="cart-summary-total">
        <span>Total</span>
        <strong>USD ${total.toLocaleString()}</strong>
      </div>
      <Link to="/checkout" className="cart-checkout-button">Continuar al checkout</Link>
      <div className="cart-summary-benefits">
        <div>
          <span>✓</span>
          Pago 100% seguro
        </div>
        <div>
          <span>✓</span>
          Garantía oficial
        </div>
        <div>
          <span>✓</span>
          Envío asegurado
        </div>
      </div>
    </aside>
  );
}

export default CartSummary;