import { Link } from "react-router-dom";
import "../components.css";

function ProductCard({ product }) {
  const badgeText = product.isOffer ? "OFERTA" : product.isNew ? "NUEVO" : null;

  return (
      <article className="product-card h-100">
        <div className="product-image-wrapper">
          {badgeText && (
            <span className={`product-badge ${product.isOffer ? "offer" : ""}`}>{badgeText}</span>
          )}
          <button className="favorite-button" type="button">♡</button>
          <img src={product.image} alt={product.name} className="product-image"/>
        </div>
        <div className="product-card-body">
          <p className="product-category">{product.category} · {product.brand}</p>
          <h3 className="product-title">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <div className="product-rating mb-3">
            ⭐ {product.rating}{" "}<span>({product.reviews} reseñas)</span>
          </div>
          <div className="mt-auto">
            <div className="d-flex align-items-center gap-2 mb-2">
              <h4 className="product-price mb-0">USD ${product.price}</h4>
              {product.oldPrice && (
                <span className="product-old-price">USD ${product.oldPrice}</span>
              )}
            </div>
            <p className="product-stock">
              <span className={product.stock > 0 ? "stock-dot" : "stock-dot out"}></span>
              {product.stock > 0 ? "En stock" : "Sin stock"}
            </p>
            <Link to={`/product/${product.id}`} className="product-button">Ver producto</Link>
            </div>
        </div>
      </article>      

  );
}

export default ProductCard;