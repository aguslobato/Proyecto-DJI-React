import QuantitySelector from "./QuantitySelector";
import "../components.css";

function CartItem({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  // Imagen principal del producto.
  // Usamos item.image como respaldo por si images no existe.
  const productImage = item.images?.[0] || item.image;

  // Subtotal correspondiente a este producto.
  const itemSubtotal = item.price * item.quantity;

  return (
    <article className="cart-item-premium">
      {/* Imagen */}
      <div className="cart-item-image-wrapper">
        <img src={productImage} alt={item.name} className="cart-item-image"/>
      </div>
      {/* Información */}
      <div className="cart-item-details">
        <p className="cart-item-meta">{item.brand} · {item.category}</p>
        <h3 className="cart-item-name">{item.name}</h3>
        {item.selectedColor && (
          <p className="cart-item-color">Color: <strong>{item.selectedColor}</strong></p>
        )}
        <p className="cart-item-stock">Stock disponible: {item.stock}</p>
        <button type="button" className="cart-remove-mobile" onClick={onRemove}>Eliminar</button>
      </div>
      {/* Cantidad */}
      <div className="cart-item-quantity">
        <span className="cart-item-label">Cantidad</span>
        <QuantitySelector
          quantity={item.quantity}
          stock={item.stock}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      </div>
      {/* Precio */}
      <div className="cart-item-price">
        <span className="cart-item-unit-price">USD ${item.price.toLocaleString()}</span>
        <strong className="cart-item-subtotal">USD ${itemSubtotal.toLocaleString()}</strong>
      </div>
      {/* Eliminar */}
      <button type="button" className="cart-item-remove" onClick={onRemove} aria-label={`Eliminar ${item.name} del carrito`} title="Eliminar producto">🗑</button>
    </article>
  );
}

export default CartItem;