import React from "react";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
  <div>
    <div className="home">
        <div className="home_container">
            <img src=""  className="home__image"/>

        </div>
        <div className="home__row">
<Product/>
<Product/>
        </div>
   
        <div className="home__row">
        <Product/>
        <Product/>
        <Product/>
              </div>

              <div className="home__row">
              <Product/>
              <Product/>
              </div>

    </div>
  </div>

  );
};

export default Home;
