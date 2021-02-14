import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hover, hoverLat, hoverLng, hoverPlaceName } from "../redux/actions";
import firebase from "firebase";
function Place({
  photoName,
  photos,
  placeName,
  placeDesc,
  placeLat,
  placeLng,
  uid,
  placeID,
}) {
  let currentUser = "";
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      currentUser = firebase.auth().currentUser;
    }
  });
  const dispatch = useDispatch();
  const handleHover = (event) => {
    event.stopPropagation();
    dispatch(hover(event.target.id));
    dispatch(hoverLat(placeLat));
    dispatch(hoverLng(placeLng));
    dispatch(hoverPlaceName(placeName));
  };

  //deleting

  const handleDelete = (event) => {
    firebase
      .database()
      .ref(`places/${currentUser.uid}/${event.target.id}`)
      .remove();
  };

  return (
    <div onMouseOver={handleHover} id={photoName} className='place'>
      <img
        id={photoName}
        alt=''
        src={photos.filter((url) => url.includes(photoName))}
      />
      <div id={photoName} className='placeContainer'>
        <h1 id={photoName} className='placeName'>
          {placeName}
        </h1>
        <p id={photoName} className='placeDesc'>
          {placeDesc.length >= 30
            ? placeDesc.substring(0, 30) + "..."
            : placeDesc}
        </p>
        <span id={photoName} className='placeCategory'>
          Category:
        </span>
        <span id={photoName} className='placeRating'>
          ☆☆☆☆☆
        </span>
        {uid !== currentUser.uid ? (
          <button id={placeID} onClick={handleDelete} className='deleteBtn'>
            Delete
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Place;
