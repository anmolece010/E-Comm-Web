import {
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import "./styles.css";
import Rating from "./Rating";
import { CartState } from "../Context/Context";

export default function Filters() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const {
    productState: { byStock, byRating, byFastDelivery, sort },
    productDisptach,
  } = CartState();

  console.log(byStock, byRating, byFastDelivery, sort);

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Typography>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="Ascending"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="asce"
              control={<Radio />}
              label="Ascending"
            />
            <FormControlLabel
              value="desc"
              control={<Radio />}
              label="Descending"
            />
          </RadioGroup>
          <Checkbox {...label} />
          Include Out of Stock
          <br />
          <Checkbox {...label} />
          Fast Delivery Only
          <br />
        </Typography>
      </span>
      <span style={{ display: "flex", flexWrap: "wrap", overflow: "hidden" }}>
        Rating:{" "}
        <span style={{ marginLeft: "10px" }}>
          <Rating />
        </span>
      </span>
      {/* <span></span> */}
      <Button variant="contained">Clear Filters</Button>
    </div>
  );
}
