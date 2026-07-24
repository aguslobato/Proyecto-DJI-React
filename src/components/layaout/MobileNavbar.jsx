import { NavLink } from "react-router-dom";

function MobileNavbar({
  isOpen,
  onClose,
  cartQuantity,
}) {
  return (
    <>
      <div
        className={`mobile-navbar-overlay ${
          isOpen ? "mobile-navbar-overlay-visible" : ""
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`mobile-navbar ${
          isOpen ? "mobile-navbar-open" : ""
        }`}
        aria-hidden={!isOpen}
      >
        <div className="mobile-navbar-header">
          <span className="mobile-navbar-title">
            VisionTech
          </span>

          <button
            type="button"
            className="mobile-navbar-close"
            onClick={onClose}
            aria-label="Cerrar menú"
          >
            ×
          </button>
        </div>

        <nav className="mobile-navbar-links">
          <NavLink
            to="/"
            className="mobile-navbar-link"
            onClick={onClose}
          >
            Inicio
          </NavLink>

          <NavLink
            to="/products"
            className="mobile-navbar-link"
            onClick={onClose}
          >
            Productos
          </NavLink>

          <NavLink
            to="/favorites"
            className="mobile-navbar-link"
            onClick={onClose}
          >
            Favoritos
          </NavLink>

          <NavLink
            to="/cart"
            className="mobile-navbar-link mobile-navbar-cart-link"
            onClick={onClose}
          >
            <span>Carrito</span>

            {cartQuantity > 0 && (
              <span className="mobile-navbar-cart-count">
                {cartQuantity}
              </span>
            )}
          </NavLink>

          <NavLink
            to="/checkout"
            className="mobile-navbar-link"
            onClick={onClose}
          >
            Checkout
          </NavLink>
        </nav>

        <div className="mobile-navbar-footer">
          <NavLink
            to="/products"
            className="mobile-navbar-button"
            onClick={onClose}
          >
            Explorar productos
          </NavLink>
        </div>
      </aside>
    </>
  );
}

export default MobileNavbar;