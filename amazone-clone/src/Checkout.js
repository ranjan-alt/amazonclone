import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import SubTotal from "./SubTotal";
const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h2 className="checkout__title"></h2>
          <CheckoutProduct />
          <CheckoutProduct />
        </div>
      </div>
      <div className="checkout__right">
        <SubTotal />
      </div>
    </div>
  );
};

export default Checkout;
