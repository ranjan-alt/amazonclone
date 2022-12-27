import React from "react";

import "./CheckoutProduct.css";

const CheckoutProduct = () => {
  return (
    <>
      <div className="checkoutProduct">
        <div className="product__info">
          <p className="checkoutProduct__title">title</p>
          <p className="checkoutProduct__price">20</p>
          <div className="checkoutProduct__rating">
            {/* {Array(rating)
              .fill()
              .map(() => (
                <p>*</p>
              ))} */}
          </div>
        </div>
        <button>Remove from Basket</button>
      </div>
    </>
  );
};

export default CheckoutProduct;
