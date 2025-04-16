import productData from "./data";
import Button from "./Button";

function App() {
  return (
    <div className="app">
      <Cards />
      <ShoppingCart />
    </div>
  );
}

function Cards() {
  return (
    <div>
      <h1 className="title">Desserts</h1>
      <ul className="product-list">
        {productData.map((product) => (
          <ProductCard productObj={product} key={crypto.randomUUID()} />
        ))}
      </ul>
    </div>
  );
}

function ProductCard({ productObj }) {
  return (
    <div className="card">
      <div className="image-box">
        <img src={productObj.image.desktop} alt={productObj.category} />
        <Button />
      </div>
      <div className="product-detail">
        <p className="category">{productObj.category}</p>
        <h3 className="desciption">{productObj.name}</h3>
        <h3 className="price">${productObj.price.toFixed(2)}</h3>
      </div>
    </div>
  );
}

function ShoppingCart() {
  return (
    <div className="shopping-cart">
      <h2>Your Cart (0)</h2>
      <img src="/images/illustration-empty-cart.svg" alt="emply cart" />
      <p>Your added items will appear here</p>
    </div>
  );
}
export default App;
