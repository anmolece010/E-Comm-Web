import { TextField } from "@mui/material";
import React from "react";
import { CartState } from "../Context/Context";

const FormControl = ({ prod }) => {
  const { dispatch } = CartState();

  return (
    <div>
      <TextField
        sx={{ width: 90 }}
        id="filled-select-quantity"
        select
        label="Quantity"
        value={prod.qty}
        SelectProps={{
          native: true,
        }}
        onChange={(e) =>
          dispatch({
            type: "CHANGE_CART_QTY",
            payload: {
              id: prod.id,
              qty: e.target.value,
            },
          })
        }
        variant="filled"
      >
        {[...Array(prod.inStock).keys()].map((x) => (
          <option key={x + 1}>{x + 1}</option>
        ))}
      </TextField>
    </div>
  );
};

export default FormControl;
