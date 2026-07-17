import { Link } from "react-router-dom";
import "../components.css";

function EmptyCart() {
  return (
    <section className="empty-cart">
      <div className="empty-cart-icon">
        🛒
      </div>

      <p className="empty-cart-eyebrow">
        VisionTech
      </p>

      <h2 className="empty-cart-title">
        Tu carrito está vacío
      </h2>

      <p className="empty-cart-description">
        Todavía no agregaste ningún producto.
        Explorá nuestro catálogo y encontrá el equipo
        perfecto para tu próximo proyecto.
      </p>

      <Link
        to="/products"
        className="empty-cart-button"
      >
        Explorar catálogo
      </Link>
    </section>
  );
}

export default EmptyCart;