import * as actionTypes from "../types/shop-types";

const initialState = {
  products: [], // {}
  cart: [], //{products, ...qty}
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS:
      return { ...state, products: [...state.products, ...action.payload] };
    case actionTypes.ADD_TO_CART:
      return {};
    case actionTypes.INCREASE_QTY:
      return {};
    case actionTypes.DECREASE_QTY:
      return {};
    default:
      return state;
  }
};

export default shopReducer;
