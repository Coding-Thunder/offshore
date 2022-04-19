import cartTypes from "./cart.types";

export const addToCart = (data) => ({
  type: cartTypes.ADD_ITEM_TO_CART,
  payload: data,
});

export const toogleCart = () => ({
  type: cartTypes.OPEN_CART_MODAL,
});
