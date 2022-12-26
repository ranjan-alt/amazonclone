import "./Product.css";

const Product = ({ id, title, price, rating }) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">{price}</p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>*</p>
            ))}
        </div>
      </div>
      <button>Add to basket</button>
    </div>
  );
};

export default Product;
