import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import CardRating from "./CardRating";
import { CartState } from "../Context/Context";

export default function SingleProduct({ prod }) {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={prod.image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {prod.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span>₹ {prod.price}</span>
              {/* <br /> */}
              {prod.fastDelivery ? (
                <div>Fast Delivery</div>
              ) : (
                <div>4 Days Delivery</div>
              )}
              <CardRating rate={prod.ratings} />
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {cart.some((p) => p.id === prod.id) ? (
            <Button
              size="small"
              color="secondary"
              variant="contained"
              onClick={() => {
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                });
              }}
            >
              Remove from Cart
            </Button>
          ) : (
            <Button
              size="small"
              color="primary"
              variant="contained"
              disabled={!prod.inStock}
              onClick={() => {
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                });
              }}
            >
              {!prod.inStock ? "Out of Stock" : "Add to Cart"}
            </Button>
          )}
        </CardActions>
      </Card>
    </div>
  );
}
