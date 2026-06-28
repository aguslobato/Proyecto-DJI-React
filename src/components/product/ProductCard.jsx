import { Link } from "react-router-dom";
import "../components.css";

function ProductCard({ product }) {
  const badgeText = product.isOffer ? "OFERTA" : product.isNew ? "NUEVO" : null;

  return (
    <article className="h-100 col-12 col-md-6 col-lg-4 my-2">
      <div className="product-card h-100 d-flex flex-column">
        <div className="product-image-wrapper">
          {badgeText && (
            <span className={`product-badge ${product.isOffer ? "offer" : ""}`}>
              {badgeText}
            </span>
          )}

          <button className="favorite-button" type="button">
            ♡
          </button>

          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
        </div>

        <div className="product-card-body">
          <p className="product-category">
            {product.category}
          </p>

          <h3 className="product-title">
            {product.name}
          </h3>

          <p className="product-description">
            {product.description}
          </p>

          <div className="mt-auto">
            <h4 className="product-price">
              USD ${product.price}
            </h4>

            <p className="product-stock">
              <span></span>
              {product.stock > 0 ? "En stock" : "Sin stock"}
            </p>

            <Link
              to={`/product/${product.id}`}
              className="product-button"
            >
              🛒 Ver producto
            </Link>
          </div>
        </div>        
      </div>

    </article>
  );
}

export default ProductCard;