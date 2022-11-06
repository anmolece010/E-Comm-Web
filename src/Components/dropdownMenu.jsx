import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Badge, IconButton, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartState } from "../Context/Context";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function CustomizedMenus() {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={cart.length} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            margin: "5px",
            padding: 0,
          }}
        >
          <MenuItem onClick={() => handleClose} className="cart-item">
            {cart.length > 0 ? (
              cart.map((prod) => (
                <span className="cartitem" key={prod.id}>
                  <img
                    src={prod.image}
                    className="cartItemImg"
                    alt={prod.name}
                  />
                  <div className="cartItemDetail">
                    <span>{prod.name}</span>
                    <span>₹ {prod.price.split(".")[0]}</span>
                  </div>
                  <DeleteIcon
                    onClick={() =>
                      dispatch({ type: "REMOVE_FROM_CART", payload: prod })
                    }
                  />
                </span>
              ))
            ) : (
              <span style={{ padding: 10 }}>Cart is Empty!</span>
            )}

            <Button
              variant="contained"
              //   href="#contained-buttons"
              sx={{ display: "flex", flexGrow: 1 }}
            >
              <Typography
                component={Link}
                to={"/cart"}
                sx={{ textDecoration: "none", color: "white" }}
              >
                Go To Cart
              </Typography>
            </Button>
          </MenuItem>
        </div>
      </StyledMenu>
    </div>
  );
}
