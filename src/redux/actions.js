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
export const dataError = (error) => {
  return {
    type: "DATA_ERROR",
    payload: error,
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
  return (dispatch) => {
    dispatch(dataRequest());
    const dbplaces = firebase
      .database()
      .ref()
      .child("places")
      .on("value", (snap) => dispatch(dataSuccess(snap.val())));
  };
};
export const fetchPhotos = () => {
  return (dispatch) => {
    dispatch(photosRequest());
    const getPhotos = async () => {
      let photos = await firebase.storage().ref(`photos/`).listAll();
      photos = photos.items;
      photos = await Promise.all(photos.map((el) => el.getDownloadURL()));
      dispatch(photosSuccess(photos));
    };

    getPhotos();
  };
};