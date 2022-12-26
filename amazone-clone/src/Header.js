import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <h2 className="header__logoImage">amazon</h2>
      </div>

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
        <div className="nav__item">
          <span className="nav__itemLineOne">Basket</span>

          <span className="nav__itemLineTwo">0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
