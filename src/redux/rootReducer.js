import { combineReducers } from "redux";
import {
  authStateReducer,
  hamburgerWidthReducer,
  dataStateReducer,
  photosStateReducer,
  hoverReducer,
  pinLocationReducer,
} from "./reducers";

const rootReducer = combineReducers({
  authState: authStateReducer,
  hamburgerState: hamburgerWidthReducer,
  dataState: dataStateReducer,
  photosState: photosStateReducer,
  hoverState: hoverReducer,
  pinLocationState: pinLocationReducer,
});
export default rootReducer;
