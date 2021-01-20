import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// import root reducer in the future
import hamburgerWidthReducer from "./reducers";

const Store = createStore(
  hamburgerWidthReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);
export default Store;
