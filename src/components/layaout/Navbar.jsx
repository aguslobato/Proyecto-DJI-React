import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "../components.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartQuantity } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`main-navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="container d-flex align-items-center justify-content-between h-100">
        <Link to="/" className="navbar-logo">
          VisionTech
        </Link>

        <div className="d-none d-lg-flex align-items-center gap-4">
          <NavLink to="/" className="nav-link-custom">
            Inicio
          </NavLink>

          <NavLink to="/products" className="nav-link-custom">
            Productos
          </NavLink>

          <NavLink to="/favorites" className="nav-link-custom">
            Favoritos
          </NavLink>

          <NavLink to="/checkout" className="nav-link-custom">
            Checkout
          </NavLink>
        </div>

        <div className="d-flex align-items-center gap-3">
          <Link to="/cart" className="cart-button">
            🛒
            <span>{cartQuantity}</span>
          </Link>

          <button className="btn btn-primary rounded-pill px-4 d-none d-md-inline">
            Comprar
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;