import React from "react";
import { connect } from "react-redux";

import styles from "./Shop.module.css";
import * as actionCreators from "./store/actions/actions";
import Items from "../../components/Items/Items";
import Cart from "../../components/Cart/Cart";

class Shop extends React.Component {
  componentDidMount() {
    this.props.getItems();
    this.props.getCartItems(this.props.userId);
  }

  render() {
    return (
      <div className={styles.Shop}>
        <Items items={this.props.items} order={this.props.onItemOrder} />
        {this.props.cartItems.length > 0 ? (
          <Cart
            cartItems={this.props.cartItems}
            deleteCartItem={this.props.onDeleteCartItem}
            updateCartItem={this.props.onUpdateCartItem}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.shop.userId,
    items: state.shop.items,
    cartItems: state.shop.cartItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getItems: () => dispatch(actionCreators.getItems()),
    getCartItems: userId => dispatch(actionCreators.getCart(userId)),
    onItemOrder: itemId => dispatch(actionCreators.itemOrder(itemId)),
    onDeleteCartItem: cartItemId =>
      dispatch(actionCreators.deleteCartItem(cartItemId)),
    onUpdateCartItem: (key, value, cartItem) =>
      dispatch(actionCreators.updateCartItem(key, value, cartItem))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shop);
