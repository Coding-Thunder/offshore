import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import productReducer from "./product/products.reducer";

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
