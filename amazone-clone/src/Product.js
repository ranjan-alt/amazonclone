import { useState } from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
const Product = ({ id, title, price, rating }) => {
  const [state, dispatch] = useStateValue(); //dispatch is an alternative name to actions

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        price: price,
        rating: rating,
      },
    });
  };
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
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
