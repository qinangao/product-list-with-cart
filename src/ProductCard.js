import Button from "./Button";
import { useState, useEffect } from "react";
export default function ProductCard({
  productObj,
  quantity,
  onAdd,
  onIncrease,
  onDecrease,
}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 576);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="card">
      <div className="image-box">
        <img
          src={isMobile ? productObj.image.mobile : productObj.image.desktop}
          alt={productObj.category}
        />
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
