import cartTypes from "./cart.types";

const INITIAL_STATE = {
  data: [],
  modal: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        data: action.payload,
      };
    case cartTypes.OPEN_CART_MODAL:
      return {
        ...state,
        modal: !state.modal,
      };
    default:
      return state;
  }
};

export default cartReducer;
