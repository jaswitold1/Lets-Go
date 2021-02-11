import React, { useState } from "react";
import { useHistory } from "react-router-dom";
//firebase
import firebase from "firebase";
//redux
import { useSelector } from "react-redux";
//https://source.unsplash.com/700x1000/?travel
function AddPlace() {
  let history = useHistory();
  const pinLocation = useSelector(
    (state) => state.pinLocationState.pinLocation
  );
  const db = firebase.database();
  const [places, setPlaces] = useState({});
  const [photo, setPhoto] = useState();

  const handlePhotoSelect = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleInput = (event) => {
    setPlaces({
      ...places,

      [event.target.name]: event.target.value,
      uid: firebase.auth().currentUser.uid,
      lat: pinLocation.lat,
      lng: pinLocation.lng,
    });
  };
  const handleAddPlace = () => {
    var photoId = Math.floor(Math.random() * 999999) + 1;
    let storageRef = firebase.storage().ref("photos/" + photoId);

    storageRef.put(photo);
    db.ref(`places/${places.uid}`).push({
      placeName: places.placeName,
      uid: places.uid,
      placeDesc: places.placeDescription,
      photoName: photoId,
      placeLat: places.lat,
      placeLng: places.lng,
    });

    setPlaces({
      placeName: "",
      uid: places.uid,
      placeDesc: "",
    });
    history.push("/");
  };
  const handleBothAdd = () => {
    handleAddPlace();
  };

  return (
    <div className='addPlace'>
      <form className='addPlaceContainer'>
        <label for='placeName'>Place Name</label>
        <input
          onChange={handleInput}
          value={places.placeName}
          type='text'
          name='placeName'
        />
        <label for='placeDescription'>Place Description</label>
        <textarea
          className='textarea'
          onChange={handleInput}
          value={places.placeDesc}
          type='textarea'
          name='placeDescription'
        />
        <label for='photo'>Photo</label>
        <input onChange={handlePhotoSelect} type='file' name='photo' />
        <button
          className='addPlaceInsideBtn'
          type='button'
          onClick={handleBothAdd}
        >
          Add place
        </button>
      </form>
    </div>
  );
}

export default AddPlace;
