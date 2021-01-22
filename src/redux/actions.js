//firebase
import firebase from "firebase";

//actions
export const active = () => {
  return {
    type: "ACTIVE",
  };
};
export const inactive = () => {
  return {
    type: "INACTIVE",
  };
};
export const logged = () => {
  return {
    type: "LOGGED",
  };
};
export const notLogged = () => {
  return {
    type: "NOT_LOGGED",
  };
};
export const dataRequest = () => {
  return {
    type: "DATA_REQUEST",
  };
};
export const dataSuccess = (data) => {
  return {
    type: "DATA_SUCCESS",
    payload: data,
  };
};
export const photosRequest = () => {
  return {
    type: "PHOTOS_REQUEST",
  };
};
export const photosSuccess = (photos) => {
  return {
    type: "PHOTOS_SUCCESS",
    payload: photos,
  };
};
export const fetchData = () => {
  return function (dispatch) {
    dispatch(dataRequest());
    firebase
      .database()
      .ref()
      .child("places")
      .on("value", (snap) => dispatch(dataSuccess(snap.val())));
  };
};
