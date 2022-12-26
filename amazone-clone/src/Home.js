import React from "react";
import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home_container">
          <img src="" className="home__image" />
        </div>
        <div className="home__row">
          <Product id="1234" title="ac" price={12000} rating={4} />
          <Product id="5678" title="ac" price={12000} rating={5} />
        </div>

        <div className="home__row">
          <Product id="91011" title="ac" price={12000} rating={1} />
          <Product id="121314" title="ac" price={12000} rating={2} />
          <Product id="151617" title="ac" price={12000} rating={3} />
        </div>

        <div className="home__row">
          <Product id="181920" title="ac" price={12000} rating={5} />
          <Product id="212223" title="ac" price={12000} rating={4} />
        </div>
      </div>
    </div>
  );
};

export default Home;
