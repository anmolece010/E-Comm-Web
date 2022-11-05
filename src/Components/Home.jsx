import React from "react";
import { CartState } from "../Context/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";
import "./styles.css";

const Home = () => {
  const {
    state: { products },
  } = CartState();
  console.log(products);
  return (
    <>
      <div className="home">
        <Filters />
        <div className="productContainer">
          {products.map((prod, index) => {
            return <SingleProduct prod={prod} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
