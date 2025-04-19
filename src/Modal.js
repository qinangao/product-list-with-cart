import productData from "./data";
export default function Modal({ cart, totalPrice, isConfirmed, onStartNew }) {
  return isConfirmed ? (
    <div>
      <div className="modal">
        <div className="confirm-title">
          <img src="/images/icon-order-confirmed.svg" alt="logo" />
          <h1>Order Confirmed</h1>
          <p>We hope you enjoy your food</p>
        </div>
        <div className="confirm-container">
          <ul>
            {Object.entries(cart).map(([id]) => {
              const product = productData.find((p) => p.id === Number(id));
              return (
                <li className="confirmed-order-details">
                  <div>
                    <img src={product.image.thumbnail} alt="order-image" />
                    <div>
                      <p className="order-name">{product?.name}</p>
                      <p>
                        <span className="quantity">{cart[id]}x</span>
                        <span className="unit-price">
                          @ ${product?.price.toFixed(2)}
                        </span>
                      </p>
                    </div>
                  </div>
                  <p className="confirm-total-price">
                    ${(cart[id] * product?.price).toFixed(2)}
                  </p>
                </li>
              );
            })}
          </ul>
          <div className="order-total">
            <p>Order Total</p>
            <h2>${totalPrice.toFixed(2)}</h2>
          </div>
        </div>
        <button className="btn-comfirm-order" onClick={onStartNew}>
          Start New Order
        </button>
      </div>
      <div className="overlay"></div>
    </div>
  ) : null;
}
