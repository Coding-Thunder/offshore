import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./root-reducer";
import thunk from "redux-thunk";

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
