import { Rating } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { CartState } from "../Context/Context";

const Rating1 = () => {
  const {
    productState: { byFastDelivery, byRating, byStock, sort },
    productDisptach,
  } = CartState();

  // console.log(productState);
  const [value, setValue] = useState(byRating);
  //   console.log(value);

  return (
    <div>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);

          productDisptach({
            type: "FILTER_BY_RATING",
            payload: newValue,
          });
        }}
        // onClick={(i) =>
        //   productDisptach({
        //     type: "FILTER_BY_RATING",
        //     payload: i + 1,
        //   })
        // }
      />
    </div>
  );
};

export default Rating1;
