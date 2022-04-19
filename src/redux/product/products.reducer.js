import productTypes from "./products.types";

const INITIAL_STATE = {
  data: [],
  modal: false,
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productTypes.GET_ALL_PRODUCTS:
      return {
        ...state,
        data: action.payload,
      };
    case productTypes.OPEN_MODAL:
      return {
        ...state,
        modal: !state.modal,
      };
    default:
      return state;
  }
};

export default productReducer;
