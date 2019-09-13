import React from "react";

import styles from "./Cart.module.css";
import CartItems from "./CartItems/CartItems";

const cart = props => {
  return (
    <div className={styles.Cart}>
      <h1>CART</h1>
      <CartItems
        cartItems={props.cartItems}
        deleteCartItem={props.deleteCartItem}
        updateCartItem={props.updateCartItem}
      />
    </div>
  );
};

export default cart;
