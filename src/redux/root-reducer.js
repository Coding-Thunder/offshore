import { combineReducers } from "redux";
import spaceXReducer from "./spacex/spacex.reducer";

const rootReducer = combineReducers({
  spacex: spaceXReducer,
});

export default rootReducer;
