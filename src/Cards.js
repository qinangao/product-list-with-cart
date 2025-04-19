import productData from "./data";
import ProductCard from "./ProductCard";
export default function Cards({ cart, onAdd, onIncrease, onDecrease }) {
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
