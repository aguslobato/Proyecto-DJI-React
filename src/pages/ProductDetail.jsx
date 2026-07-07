import { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { products } from "../services/products";
import { CartContext } from "../context/CartContext";
import "./pages.css";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = products.find((item) => item.id === Number(id));

  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0] || product?.image
  );

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || ""
  );

  if (!product) {
    return (
      <main className="container py-5">
        <h2>Producto no encontrado</h2>
        <Link to="/products" className="btn btn-dark rounded-pill mt-3">
          Volver al catálogo
        </Link>
      </main>
    );
  }

  const badgeText = product.isOffer
    ? "Oferta"
    : product.isNew
    ? "Nuevo"
    : null;

  const increaseQuantity = () => {
    setQuantity((current) => Math.min(current + 1, product.stock));
  };

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(current - 1, 1));
  };

  const handleAddToCart = () => {
    addToCart(
      {
        ...product,
        selectedColor,
      },
      quantity
    );
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart");
  };

  return (
    <main className="product-detail-page">
      <div className="container py-5">
        <Link to="/products" className="product-back-link">
          ← Volver al catálogo
        </Link>

        <div className="row g-5 align-items-start mt-3">
          <div className="col-12 col-lg-6">
            <section className="product-detail-gallery">
              {badgeText && (
                <span className={`detail-badge ${product.isOffer ? "offer" : ""}`}>
                  {badgeText}
                </span>
              )}

              <img
                src={selectedImage}
                alt={product.name}
                className="product-detail-main-img"
              />
            </section>

            <div className="product-thumbnails">
              {product.images.map((image, index) => (
                <button
                  key={image}
                  className={`product-thumbnail ${
                    selectedImage === image ? "active" : ""
                  }`}
                  onClick={() => setSelectedImage(image)}
                  type="button"
                >
                  <img src={image} alt={`${product.name} vista ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <section className="product-info-panel">
              <p className="product-detail-category">
                {product.category} · {product.brand}
              </p>

              <h1 className="product-detail-title">{product.name}</h1>

              <div className="product-detail-rating">
                ⭐ {product.rating} · {product.reviews} reseñas
              </div>

              <p className="product-sku">SKU: {product.sku}</p>

              <p className="product-detail-description">
                {product.longDescription}
              </p>

              <div className="product-detail-price-box">
                <span className="product-detail-price">USD ${product.price}</span>

                {product.oldPrice && (
                  <span className="product-detail-old-price">
                    USD ${product.oldPrice}
                  </span>
                )}
              </div>

              <div className="stock-status">
                <span className={product.stock > 0 ? "stock-dot" : "stock-dot out"} />
                {product.stock > 0
                  ? `${product.stock} unidades disponibles`
                  : "Sin stock"}
              </div>

              <div className="product-detail-section row">
                <div className="col-6 col-md-12 my-2">
                  <h5>Color</h5>
                  <div className="d-flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button key={color} type="button" className={`color-option ${selectedColor === color ? "active" : ""}`} onClick={() => setSelectedColor(color)}>{color}</button>
                    ))}
                  </div>
                </div>
                <div className="col-6 col-md-12 my-2">
                  <h5>Cantidad</h5>
                  <div className="quantity-selector">
                    <button type="button" onClick={decreaseQuantity} disabled={quantity <= 1}>-</button>
                    <span>{quantity}</span>
                    <button type="button" onClick={increaseQuantity} disabled={quantity >= product.stock}>+</button>
                  </div>
                </div>

              </div>

              <div className="product-detail-section">
                
              </div>

              <div className="d-flex flex-column flex-md-row gap-3 mt-4">
                <button
                  className="btn btn-dark rounded-pill px-5 py-3"
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                >
                  Agregar al carrito
                </button>

                <button
                  className="btn btn-outline-dark rounded-pill px-5 py-3"
                  onClick={handleBuyNow}
                  disabled={product.stock === 0}
                >
                  Comprar ahora
                </button>
              </div>

              <div className="product-benefits">
                <div>🚚 Envío gratis</div>
                <div>🛡️ Garantía oficial</div>
                <div>↩️ Devolución 30 días</div>
              </div>
            </section>
          </div>
        </div>

        <section className="product-specs-section mt-5">
          <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
              <p className="product-detail-category mb-1">Ficha técnica</p>
              <h2 className="fw-bold">Especificaciones principales</h2>
            </div>
          </div>

          <div className="row g-3">
            {product.specs.map((spec) => (
              <div className="col-12 col-md-6 col-lg-3" key={spec}>
                <div className="spec-card">{spec}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default ProductDetail;