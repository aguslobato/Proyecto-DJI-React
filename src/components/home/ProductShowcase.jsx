import { Link } from "react-router-dom";
import AnimatedProductGrid from "../product/AnimatedProductGrid";
import ProductCarousel from "../product/ProductCarousel";
import "../components.css";
// Más adelante vamos a importar ProductCarousel acá.

import "../components.css";

function ProductShowcase({
  eyebrow = "VisionTech",
  title,
  description,
  products = [],
  variant = "grid",
  showCatalogButton = true,
}) {
  if (!products.length) {
    return null;
  }

  return (
    <section className="product-showcase">
      <div className="container">
        <header className="product-showcase-header">
          <div className="product-showcase-copy">
            <p className="product-showcase-eyebrow">
              {eyebrow}
            </p>

            <h2 className="product-showcase-title">
              {title}
            </h2>

            {description && (
              <p className="product-showcase-description">
                {description}
              </p>
            )}
          </div>

          {showCatalogButton && (
            <Link
              to="/products"
              className="product-showcase-link"
            >
              Explorar catálogo
              <span aria-hidden="true">→</span>
            </Link>
          )}
        </header>

<div className="product-showcase-content">
  {variant === "grid" && (
    <AnimatedProductGrid products={products} />
  )}

  {variant === "carousel" && (
    <ProductCarousel products={products} />
  )}
</div>
      </div>
    </section>
  );
}

export default ProductShowcase;