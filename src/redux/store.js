import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// import root reducer in the future
import rootReducer from "./rootReducer";

const Store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);
export default Store;
