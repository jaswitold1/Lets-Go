import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

// import root reducer
import rootReducer from "./rootReducer";

const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default Store;
