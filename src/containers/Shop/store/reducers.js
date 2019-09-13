import * as actionTypes from "./actions/actionTypes";

const initialState = {
  userId: 1,
  items: [],
  cartItems: []
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ITEMS_BEGIN:
      return state;
    case actionTypes.GET_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload.items
      };
    case actionTypes.GET_ITEMS_FAILURE:
      console.log(action.payload);
      return state;

    case actionTypes.ITEM_ORDER_BEGIN:
      return state;
    case actionTypes.ITEM_ORDER_SUCCESS:
      let newCartItems = state.cartItems.filter(
        cartItem => cartItem.item.id !== action.payload.cartItem.item.id
      );
      newCartItems = newCartItems.concat(action.payload.cartItem);
      return {
        ...state,
        cartItems: newCartItems
      };
    case actionTypes.ITEM_ORDER_FAILURE:
      console.log(action.payload);
      return state;

    case actionTypes.GET_CART_BEGIN:
      return state;
    case actionTypes.GET_CART_SUCCESS:
      return {
        ...state,
        cartItems: action.payload.cartItems || []
      };
    case actionTypes.GET_CART_FAILURE:
      console.log(action.payload);
      return state;

    case actionTypes.DELETE_CARTITEM_BEGIN:
      return state;
    case actionTypes.DELETE_CARTITEM_SUCCESS:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.cartItemId
        )
      };
    case actionTypes.DELETE_CARTITEM_FAILURE:
      console.log(action.payload);
      return state;

    case actionTypes.UPDATE_CARTITEM_BEGIN:
      return state;
    case actionTypes.UPDATE_CARTITEM_SUCCESS:
      let updatedCartItems = state.cartItems.filter(
        cartItem => cartItem.item.id !== action.payload.cartItem.item.id
      );
      updatedCartItems = updatedCartItems.concat(action.payload.cartItem);
      return {
        ...state,
        cartItems: updatedCartItems
      };
    case actionTypes.UPDATE_CARTITEM_FAILURE:
      console.log(action.payload);
      return state;

    default:
      return state;
  }
};

export default shopReducer;
