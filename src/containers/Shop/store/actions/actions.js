import * as actionTypes from "./actionTypes";
import axios from "../../../../axios";

export const getItems = () => {
  return dispatch => {
    dispatch(getItemsBegin());
    return axios
      .get("/items")
      .then(response => {
        console.log(response.data.items);
        dispatch(getItemsSuccess(response.data.items));
      })
      .catch(error => {
        dispatch(getItemsFailure(error));
      });
  };
};

export const getItemsBegin = () => ({
  type: actionTypes.GET_ITEMS_BEGIN
});

export const getItemsSuccess = items => ({
  type: actionTypes.GET_ITEMS_SUCCESS,
  payload: { items }
});

export const getItemsFailure = error => ({
  type: actionTypes.GET_ITEMS_FAILURE,
  payload: { error }
});

export const itemOrder = itemId => {
  return (dispatch, getState) => {
    dispatch(itemOrderBegin());
    return axios
      .post("/cart/item", {
        itemId: itemId,
        userId: getState().shop.userId,
        count: 1
      })
      .then(response => {
        console.log(response);
        dispatch(itemOrderSuccess(response.data.cartItem));
      })
      .catch(error => {
        dispatch(itemOrderFailure(error));
      });
  };
};

export const itemOrderBegin = () => ({
  type: actionTypes.ITEM_ORDER_BEGIN
});
export const itemOrderSuccess = cartItem => ({
  type: actionTypes.ITEM_ORDER_SUCCESS,
  payload: { cartItem }
});
export const itemOrderFailure = error => ({
  type: actionTypes.ITEM_ORDER_FAILURE,
  payload: { error }
});

export const getCart = userId => {
  return dispatch => {
    dispatch(getCartBegin());
    return axios
      .get("/cart/" + userId)
      .then(response => {
        dispatch(getCartSuccess(response.data.cartItems));
      })
      .catch(error => {
        dispatch(getCartFailure(error));
      });
  };
};
export const getCartBegin = () => ({
  type: actionTypes.GET_CART_BEGIN
});
export const getCartSuccess = cartItems => ({
  type: actionTypes.GET_CART_SUCCESS,
  payload: { cartItems }
});
export const getCartFailure = error => ({
  type: actionTypes.GET_CART_FAILURE,
  payload: { error }
});

export const deleteCartItem = cartItemId => {
  return dispatch => {
    dispatch(deleteCartItemBegin());
    return axios
      .delete("/cart/item/" + cartItemId)
      .then(() => {
        dispatch(deleteCartItemSuccess(cartItemId));
      })
      .catch(error => {
        dispatch(deleteCartItemFailure(error));
      });
  };
};
export const deleteCartItemBegin = () => ({
  type: actionTypes.DELETE_CARTITEM_BEGIN
});
export const deleteCartItemSuccess = cartItemId => ({
  type: actionTypes.DELETE_CARTITEM_SUCCESS,
  payload: { cartItemId }
});
export const deleteCartItemFailure = error => ({
  type: actionTypes.DELETE_CARTITEM_FAILURE,
  payload: { error }
});

export const updateCartItem = (key, value, cartItem) => {
  return (dispatch, getState) => {
    if (key !== "Enter") {
      return;
    }
    if (isNaN(value)) {
      return;
    }
    value = parseInt(value, 10);

    dispatch(updateCartItemBegin());
    return axios
      .put("/cart/item/" + cartItem.id, {
        itemId: cartItem.item.id,
        userId: getState().shop.userId,
        count: value
      })
      .then(response => {
        dispatch(updateCartItemSuccess(response.data.cartItem));
      })
      .catch(error => {
        dispatch(updateCartItemFailure(error));
      });
  };
};
export const updateCartItemBegin = () => ({
  type: actionTypes.UPDATE_CARTITEM_BEGIN
});
export const updateCartItemSuccess = cartItem => ({
  type: actionTypes.UPDATE_CARTITEM_SUCCESS,
  payload: { cartItem }
});
export const updateCartItemFailure = error => ({
  type: actionTypes.UPDATE_CARTITEM_FAILURE,
  payload: { error }
});
