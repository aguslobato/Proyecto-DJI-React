import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../services/products";
import { CartContext } from "../context/CartContext";
import "./pages.css";

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0] || product?.image
  );

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || ""
  );

  if (!product) {
    return (
      <div className="container py-5">
        <h2>Producto no encontrado</h2>
        <Link to="/" className="btn btn-dark mt-3">
          Volver al inicio
        </Link>
      </div>
    );
  }

  const increaseQuantity = () => {
    setQuantity((currentQuantity) =>
      Math.min(currentQuantity + 1, product.stock)
    );
  };

  const decreaseQuantity = () => {
    setQuantity((currentQuantity) =>
      Math.max(currentQuantity - 1, 1)
    );
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

  return (
    <main className="product-detail-page">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-12 col-lg-6">
            <div className="product-detail-gallery">
              <img src={selectedImage} alt={product.name} className="product-detail-main-img"/>
            </div>
            <div className="product-thumbnails">
              {product.images.map((image) => (
                <button key={image} className={`product-thumbnail ${selectedImage === image ? "active" : ""}`} onClick={() => setSelectedImage(image)} type="button">
                  <img src={image} alt={product.name} />
                </button>
              ))}
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <p className="product-detail-category">{product.category} · {product.brand}</p>
            <h1 className="product-detail-title">{product.name}</h1>
            <div className="product-detail-rating">⭐ {product.rating} · {product.reviews} reseñas</div>
            <p className="product-detail-description">{product.longDescription}</p>
            <div className="product-detail-price-box">
              <span className="product-detail-price">USD ${product.price}</span>
              {product.oldPrice && (<span className="product-detail-old-price">USD ${product.oldPrice}</span>)}
            </div>
            <div className="product-detail-section">
              <h5>Color</h5>
              <div className="d-flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button key={color} type="button" className={`color-option ${selectedColor === color ? "active" : ""}`} onClick={() => setSelectedColor(color)}>{color}</button>
                ))}
              </div>
            </div>
            <div className="product-detail-section">
              <h5>Cantidad</h5>
              <div className="quantity-selector">
                <button type="button" onClick={decreaseQuantity} disabled={quantity <= 1}>-</button>
                <span>{quantity}</span>
                <button type="button" onClick={increaseQuantity} disabled={quantity >= product.stock}>+</button>
              </div>
              <small className="text-muted">Stock disponible: {product.stock}</small>
            </div>
            <button className="btn btn-dark rounded-pill px-5 py-3 mt-3" onClick={handleAddToCart} disabled={product.stock === 0}>Agregar al carrito</button>
            <div className="product-detail-section mt-5">
              <h5>Especificaciones principales</h5>
              <ul className="product-specs-list">
                {product.specs.map((spec) => (<li key={spec}>{spec}</li>))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;