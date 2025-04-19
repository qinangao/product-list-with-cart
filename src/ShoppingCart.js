export default function ShoppingCart({
  cart,
  onDelete,
  numOrder,
  totalPrice,
  onconfirmed,
  getProductById,
}) {
  return (
    <div className="shopping-cart">
      <h2>Your Cart ({numOrder})</h2>

      {numOrder === 0 ? (
        <>
          <img src="/images/illustration-empty-cart.svg" alt="empty cart" />
          <p>Your added items will appear here</p>
        </>
      ) : (
        <>
          <ul className="order-container">
            {Object.entries(cart).map(([id]) => {
              const product = getProductById(id);

              return (
                <li key={id}>
                  <div className="order-details">
                    <p className="order-name">{product?.name}</p>
                    <p>
                      <span className="quantity">{cart[id]}x</span>
                      <span className="unit-price">
                        @ ${product?.price.toFixed(2)}
                      </span>
                      <span className="unit-total">
                        ${(cart[id] * product?.price).toFixed(2)}
                      </span>
                    </p>
                  </div>
                  <button className="btn-delete" onClick={() => onDelete(id)}>
                    &times;
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="order-total">
            <p>Order Total</p>
            <h2>${totalPrice.toFixed(2)}</h2>
          </div>

          <p className="delivery-info">
            <img src="/images/icon-carbon-neutral.svg" alt="carbon-neutral" />
            <span>
              This is a <strong>Carbon-neutral</strong> delivery
            </span>
          </p>
          <button className="btn-comfirm-order" onClick={onconfirmed}>
            Confirm Order
          </button>
        </>
      )}
    </div>
  );
}
