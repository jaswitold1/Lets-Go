import { combineReducers } from "redux";
import {
  authStateReducer,
  hamburgerWidthReducer,
  dataStateReducer,
  photosStateReducer,
} from "./reducers";

const rootReducer = combineReducers({
  authState: authStateReducer,
  hamburgerState: hamburgerWidthReducer,
  dataState: dataStateReducer,
  photosState: photosStateReducer,
});
export default rootReducer;
