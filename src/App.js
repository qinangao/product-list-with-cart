import productData from "./data";
import Button from "./Button";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState({});

  function handleAdd(id) {
    setCart((prev) => ({ ...prev, [id]: 1 }));
  }

  function handleIncrease(id) {
    setCart((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  }
  function handleDecrease(id) {
    setCart((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  }
  return (
    <div className="app">
      <Cards
        cart={cart}
        onAdd={handleAdd}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
      <ShoppingCart cart={cart} />
    </div>
  );
}

function Cards({ cart, onAdd, onIncrease, onDecrease }) {
  return (
    <div>
      <h1 className="title">Desserts</h1>
      <ul className="product-list">
        {productData.map((product) => (
          <ProductCard
            productObj={product}
            key={product.id}
            quantity={cart[product.id] || 0}
            onAdd={() => onAdd(product.id)}
            onIncrease={() => onIncrease(product.id)}
            onDecrease={() => onDecrease(product.id)}
          />
        ))}
      </ul>
    </div>
  );
}

function ProductCard({ productObj, quantity, onAdd, onIncrease, onDecrease }) {
  return (
    <div className="card">
      <div className="image-box">
        <img src={productObj.image.desktop} alt={productObj.category} />
        <Button
          quantity={quantity}
          onAdd={onAdd}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      </div>
      <div className="product-detail">
        <p className="category">{productObj.category}</p>
        <h3 className="desciption">{productObj.name}</h3>
        <h3 className="price">${productObj.price.toFixed(2)}</h3>
      </div>
    </div>
  );
}

function ShoppingCart({ cart }) {
  const numOrder = Object.values(cart).reduce((a, c) => a + c, 0);

  const totalPrice = Object.entries(cart).reduce((total, [id, quantity]) => {
    const product = productData.find((p) => p.id === Number(id));
    return total + (product ? quantity * product.price : 0);
  }, 0);

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
              const product = productData.find((p) => p.id === Number(id));

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
                  <button className="btn-delete">&times;</button>
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
          <button className="btn-comfirm-order">Confirm Order</button>
        </>
      )}
    </div>
  );
}
export default App;
