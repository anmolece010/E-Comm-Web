import {
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./styles.css";
import { CartState } from "../Context/Context";
import Rating1 from "./Rating";

export default function Filters() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const {
    productState: { byStock, byRating, byFastDelivery, sort },
    productDispatch,
  } = CartState();
  // const [value, setValue] = useState(2);

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
              onChange={() =>
                productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "lowToHigh",
                })
              }
              checked={sort === "lowToHigh" ? true : false}
            />
            <FormControlLabel
              value="desc"
              control={<Radio />}
              label="Descending"
              onChange={() =>
                productDispatch({
                  type: "SORT_BY_PRICE",
                  payload: "highToLow",
                })
              }
              checked={sort === "highToLow" ? true : false}
            />
          </RadioGroup>
          <Checkbox
            {...label}
            onChange={() =>
              productDispatch({
                type: "FILTER_BY_STOCK",
              })
            }
            checked={byStock}
          />
          Include Out of Stock
          <br />
          <Checkbox
            {...label}
            onChange={() =>
              productDispatch({
                type: "FILTER_BY_FASTDELIVERY",
              })
            }
            checked={byFastDelivery}
          />
          Fast Delivery Only
          <br />
        </Typography>
      </span>
      <span style={{ display: "flex", flexWrap: "wrap", overflow: "hidden" }}>
        Rating:{" "}
        <Rating1
          rating={byRating}
          style={{ cursor: "pointer" }}
          onClick={(i) =>
            productDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
        />
      </span>
      <Button
        variant="contained"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
}
