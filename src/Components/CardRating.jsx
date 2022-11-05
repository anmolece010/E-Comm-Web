import { Rating } from "@mui/material";
import React, { useState } from "react";

const CardRating = ({ rate }) => {
  const [value, setValue] = useState(rate);
  //   console.log(value);
  return (
    <div>
      <Rating name="read-only" value={value} readOnly />
    </div>
  );
};

export default CardRating;
