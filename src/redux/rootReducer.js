import { combineReducers } from "redux";
import {
  authStateReducer,
  hamburgerWidthReducer,
  dataStateReducer,
  photosStateReducer,
  hoverReducer,
  pinLocationReducer,
  toggleReducer,
} from "./reducers";

const rootReducer = combineReducers({
  authState: authStateReducer,
  hamburgerState: hamburgerWidthReducer,
  dataState: dataStateReducer,
  photosState: photosStateReducer,
  hoverState: hoverReducer,
  pinLocationState: pinLocationReducer,
  toggleState: toggleReducer,
});
export default rootReducer;
