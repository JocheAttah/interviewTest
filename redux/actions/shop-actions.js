import * as actionTypes from "../types/shop-types";
import foodAPI from "../../apis";

export const fetchProducts = () => async (dispatch) => {
  const response = await foodAPI.get("/random_food?size=1");
//   console.log(response.data);
  dispatch({
    type: actionTypes.FETCH_PRODUCTS,
    payload: response.data,
  });
};

// export const setProducts = (products) => {
//   return {
//     type: actionTypes.SET_PRODUCTS,
//     payload: products,
//   };
// };

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const increaseQty = (itemID, value) => {
  return {
    type: actionTypes.INCREASE_QTY,
    payload: {
      id: itemID,
      qty: value,
    },
  };
};

export const decreaseQty = (itemID, value) => {
  return {
    type: actionTypes.DECREASE_QTY,
    payload: {
      id: itemID,
      qty: value,
    },
  };
};
