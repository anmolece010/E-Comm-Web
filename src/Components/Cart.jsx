import React from "react";
import { CartState } from "../Context/Context";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Button, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import CardRating from "./CardRating";
import FormControl from "./FormControl";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  const [total, setTotal] = useState();
  const {
    state: { cart },
    dispatch,
  } = CartState();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className="home">
      <div className="productContainer otherprop">
        {cart.map((prod) => (
          <List
            sx={{ width: "100%", bgcolor: "background.paper" }}
            key={prod.id}
          >
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  src={prod.image}
                  alt={prod.name}
                  sx={{ width: 56, height: 56, marginRight: "20px" }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={prod.name}
                secondary={
                  <>
                    <Typography>₹ {prod.price.split(".")[0]}</Typography>
                    <CardRating rate={prod.ratings} />
                  </>
                }
              />
              <div>
                <span style={{ display: "flex", justifyContent: "flex-end" }}>
                  <FormControl prod={prod} />
                  <span>
                    <Button variant="contained" sx={{ marginLeft: "10px" }}>
                      <DeleteIcon
                        onClick={() =>
                          dispatch({ type: "REMOVE_FROM_CART", payload: prod })
                        }
                      />
                    </Button>
                  </span>
                </span>
              </div>
            </ListItem>
            <hr />
          </List>
        ))}
      </div>
      <div className="filters summary">
        <span className="title">Subtotal ({cart.length}) items </span>
        <span style={{ fontWeight: 700, fontSize: 20 }}>Total: ₹ {total}</span>
        <Button variant="contained" diabled={cart.length === 0}>
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
