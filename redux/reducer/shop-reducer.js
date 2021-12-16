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
    //   get items fro products
      const item = state.products.find((prod) => prod.uid === action.payload.id);
      console.log(item)
      //check if item is already there
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.uid === action.payload.id
                ? { ...item, qty: item.qty + 1, price: 200 }
                : item
            )
          : [...state.cart, { ...item, qty: 1, price: 200}],
      };
    case actionTypes.INCREASE_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.uid === action.payload.id
            ? { ...item, qty: item.qty + 1 }
            : item
        ),
      };
    case actionTypes.DECREASE_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.uid === action.payload.id
            ? { ...item, qty: item.qty - 1 }
            : item
        ),
      };
    default:
      return state;
  }
};

export default shopReducer;
