import {
  useContext,
  useEffect,
  useState,
} from "react";

import {
  Link,
  NavLink,
} from "react-router-dom";

import { CartContext } from "../../context/CartContext";

import MobileNavbar from "./MobileNavbar";

import "../components.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const { cartQuantity } = useContext(CartContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`main-navbar ${
          isScrolled ? "navbar-scrolled" : ""
        }`}
      >
        <div className="container d-flex align-items-center justify-content-between h-100">
          <div className="d-flex align-items-center gap-3">
            <button
              type="button"
              className="mobile-menu-button d-lg-none"
              onClick={openMobileMenu}
              aria-label="Abrir menú"
              aria-expanded={isMobileMenuOpen}
            >
              <span />
              <span />
              <span />
            </button>

            <Link
              to="/"
              className="navbar-logo"
              onClick={closeMobileMenu}
            >
              VisionTech
            </Link>
          </div>

          <div className="d-none d-lg-flex align-items-center gap-4">
            <NavLink
              to="/"
              className="nav-link-custom"
            >
              Inicio
            </NavLink>

            <NavLink
              to="/products"
              className="nav-link-custom"
            >
              Productos
            </NavLink>

            <NavLink
              to="/favorites"
              className="nav-link-custom"
            >
              Favoritos
            </NavLink>

            <NavLink
              to="/checkout"
              className="nav-link-custom"
            >
              Checkout
            </NavLink>
          </div>

          <div className="d-flex align-items-center gap-3">
            <Link
              to="/cart"
              className="cart-button"
              onClick={closeMobileMenu}
              aria-label={`Carrito con ${cartQuantity} productos`}
            >🛒
              <span>{cartQuantity}</span>
            </Link>

            <Link
              to="/products"
              className="btn btn-primary rounded-pill px-4 d-none d-md-inline"
            >
              Comprar
            </Link>
          </div>
        </div>
      </nav>

      <MobileNavbar
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        cartQuantity={cartQuantity}
      />
    </>
  );
}

export default Navbar;

