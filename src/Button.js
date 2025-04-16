import { useState } from "react";

export default function Button() {
  const [quantity, setQuantity] = useState(0);
  function handleAddToCart() {
    setQuantity(1);
  }
  const increase = function () {
    setQuantity((q) => q + 1);
  };
  const decrease = function () {
    setQuantity((q) => q - 1);
  };

  if (quantity === 0) {
    return (
      <button className="add-btn" onClick={handleAddToCart}>
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
        onClick={decrease}
      />
      <span>{quantity}</span>
      <img
        src="/images/icon-increment-quantity.svg"
        alt="cart-logo"
        onClick={increase}
      />
    </button>
  );
}
