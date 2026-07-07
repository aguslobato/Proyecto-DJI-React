import ProductCard from "./ProductCard";
import "../components.css";

function AnimatedProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <div className="empty-products text-center py-5">
        <h3>No encontramos productos</h3>
        <p className="text-muted">
          Probá cambiar la búsqueda o los filtros.
        </p>
      </div>
    );
  }

  return (
    <div className="row g-4">
      {products.map((product, index) => (
        <div
          key={product.id}
          className="col-12 col-md-6 col-lg-4 fade-up-card my-3"
          style={{
            animationDelay: `${index * 0.08}s`,
          }}
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default AnimatedProductGrid;