import "../components.css";

function QuantitySelector({
  quantity,
  stock,
  onIncrease,
  onDecrease,
}) {
  const reachedMinimum = quantity <= 1;
  const reachedMaximum = quantity >= stock;

  return (
    <div className="cart-quantity-selector">
      <button type="button" onClick={onDecrease} disabled={reachedMinimum} aria-label="Disminuir cantidad">−</button>
      <span aria-live="polite">{quantity}</span>
      <button type="button" onClick={onIncrease} disabled={reachedMaximum} aria-label="Aumentar cantidad">+</button>
    </div>
  );
}

export default QuantitySelector;