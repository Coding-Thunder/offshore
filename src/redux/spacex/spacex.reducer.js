import spaceXTypes from "./spacex.types";

const INITIAL_STATE = {
  data: [],
  fetching: false,
};

const spaceXReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case spaceXTypes.FETCH_LAUNCHES:
      return {
        ...state,
        data: action.payload,
      };
    case spaceXTypes.SET_LOADING:
      return {
        ...state,
        fetching: action.paload,
      };
    default:
      return state;
  }
};

export default spaceXReducer;
