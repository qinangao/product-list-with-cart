import Button from "./Button";
export default function ProductCard({
  productObj,
  quantity,
  onAdd,
  onIncrease,
  onDecrease,
}) {
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
