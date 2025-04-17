export default function Button({ quantity, onAdd, onIncrease, onDecrease }) {
  // console.log(quantity);
  if (quantity === 0) {
    return (
      <button className="add-btn" onClick={onAdd}>
        <img src="/images/icon-add-to-cart.svg" alt="cart-logo" />
        <span>Add to Cart</span>
      </button>
    );
  }

  return (
    <button className="add-btn add-btn-active">
      <img
        src="/images/icon-decrement-quantity.svg"
        alt="cart-logo"
        onClick={onDecrease}
      />
      <span>{quantity}</span>
      <img
        src="/images/icon-increment-quantity.svg"
        alt="cart-logo"
        onClick={onIncrease}
      />
    </button>
  );
}
