import React from "react";
import "./Header.css";
// import { Link, Outlet } from "react-router-dom";
// import { Router, Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
const Header = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <a href="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <h2 className="header__logoImage">amazon</h2>
        </div>
      </a>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
      </div>

      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <span className="nav__itemLineTwo">Sign In </span>
        </div>
        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">shop </span>
        </div>
        <a href="/checkout">
          <div className="nav__item">
            <span className="nav__itemLineOne">Basket</span>

            <span className="nav__itemLineTwo">{basket.length}</span>
          </div>
        </a>{" "}
      </div>
    </div>
  );
};

export default Header;
