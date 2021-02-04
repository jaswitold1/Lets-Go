import { combineReducers } from "redux";
import {
  authStateReducer,
  hamburgerWidthReducer,
  dataStateReducer,
  photosStateReducer,
  hoverReducer,
} from "./reducers";

const rootReducer = combineReducers({
  authState: authStateReducer,
  hamburgerState: hamburgerWidthReducer,
  dataState: dataStateReducer,
  photosState: photosStateReducer,
  hoverState: hoverReducer,
});
export default rootReducer;
