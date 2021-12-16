import { combineReducers } from "redux";
import shopReducer from "./reducer/shop-reducer";

export const rootReducer = combineReducers({
  shop: shopReducer,
});
