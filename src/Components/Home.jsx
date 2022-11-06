import React from "react";
import { CartState } from "../Context/Context";
import Filters from "./Filters";
import SingleProduct from "./SingleProduct";
import "./styles.css";

const Home = () => {
  const {
    state: { products },
    productState: { byStock, byRating, byFastDelivery, sort, searchQuery },
  } = CartState();
  console.log(products);
  // let sortedProducts = products;

  let transformProducts = products;
  // eslint-disable-next-line
  {
    if (sort) {
      transformProducts = transformProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (!byStock) {
      transformProducts = transformProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      transformProducts = transformProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      transformProducts = transformProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      transformProducts = transformProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  }
  // eslint-disable-next-line
  console.log("tproducts: ", transformProducts);
  return (
    <>
      <div className="home">
        <Filters />
        <div className="productContainer">
          {transformProducts.map((prod, index) => {
            return <SingleProduct prod={prod} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
