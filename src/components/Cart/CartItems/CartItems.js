import React from "react";
import List from "@material-ui/core/List";
import ListSubHeader from "@material-ui/core/ListSubheader";
import Typography from "@material-ui/core/Typography";

import CartItem from "./CartItem/CartItem";

const cartItems = props => {
  const cartItems = props.cartItems
    .sort((a, b) => a.item.id - b.item.id)
    .map(cartItem => (
      <CartItem
        key={cartItem.item.id}
        cartItem={cartItem}
        delete={props.deleteCartItem}
        update={props.updateCartItem}
      />
    ));
  const total = props.cartItems.reduce(
    (acc, cur) => acc + cur.item.price * cur.count,
    0
  );
  const itemCount = props.cartItems.reduce((acc, cur) => acc + cur.count, 0);

  return (
    <List dense={true}>
      <ListSubHeader>
        <Typography gutterBottom variant="body2">
          Total: ${total.toFixed(2)}
        </Typography>
        <Typography gutterBottom variant="body2">
          # of Items: {itemCount}
        </Typography>
      </ListSubHeader>
      {cartItems}
    </List>
  );
};

export default cartItems;
