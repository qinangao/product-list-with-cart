import productData from "./data";
import { useState } from "react";
import Cards from "./Cards";
import ShoppingCart from "./ShoppingCart";
import Modal from "./Modal";

function getProductById(id) {
  return productData.find((p) => p.id === Number(id));
}
function calcTotalPrice(cart) {
  return Object.entries(cart).reduce((total, [id, quantity]) => {
    const product = getProductById(id);
    return total + (product ? quantity * product.price : 0);
  }, 0);
}

function App() {
  const [cart, setCart] = useState({});
  const [isConfirmed, setIsConfirmed] = useState(false);

  const numOrder = Object.values(cart).reduce((a, c) => a + c, 0);
  const totalPrice = calcTotalPrice(cart);

  function handleAdd(id) {
    setCart((prev) => ({ ...prev, [id]: 1 }));
  }

  function handleIncrease(id) {
    setCart((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  }
  function handleDecrease(id) {
    setCart((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  }

  function handleDeleteProduct(id) {
    const updatedCart = { ...cart };
    delete updatedCart[id];
    setCart(updatedCart);
  }
  function handleConfirmedOrder() {
    setIsConfirmed(true);
  }

  function handleNewOrder() {
    setIsConfirmed(false);
    setCart({});
  }

  return (
    <div className="app">
      <Cards
        cart={cart}
        onAdd={handleAdd}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
      <ShoppingCart
        cart={cart}
        onDelete={handleDeleteProduct}
        numOrder={numOrder}
        totalPrice={totalPrice}
        onconfirmed={handleConfirmedOrder}
        getProductById={getProductById}
      />
      <Modal
        totalPrice={totalPrice}
        isConfirmed={isConfirmed}
        onStartNew={handleNewOrder}
        cart={cart}
      />
    </div>
  );
}

export default App;
