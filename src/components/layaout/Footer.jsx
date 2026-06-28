import { Link } from "react-router-dom";
import "../components.css";

function Footer() {
  return (
    <footer className="site-footer mt-5">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <h3 className="footer-logo">VisionTech</h3>
            <p className="footer-text">
              Tecnología premium para creadores, pilotos, filmmakers y amantes de la imagen.
            </p>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="footer-title">Tienda</h6>
            <Link to="/" className="footer-link">Inicio</Link>
            <Link to="/products" className="footer-link">Productos</Link>
            <Link to="/cart" className="footer-link">Carrito</Link>
          </div>

          <div className="col-6 col-md-2">
            <h6 className="footer-title">Soporte</h6>
            <a className="footer-link">Ayuda</a>
            <a className="footer-link">Envíos</a>
            <a className="footer-link">Garantía</a>
          </div>

          <div className="col-12 col-md-4">
            <h6 className="footer-title">Newsletter</h6>
            <p className="footer-text">
              Recibí novedades, lanzamientos y ofertas especiales.
            </p>

            <div className="input-group">
              <input
                type="email"
                className="form-control rounded-start-pill"
                placeholder="Tu email"
              />
              <button className="btn btn-primary rounded-end-pill px-4">
                Unirme
              </button>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <p className="text-center footer-copy mb-0">
          © 2026 VisionTech. Proyecto React de portfolio.
        </p>
      </div>
    </footer>
  );
}

export default Footer;