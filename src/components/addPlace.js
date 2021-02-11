// import React, { useState } from "react";
// //firebase
// import firebase from "firebase";
// //redux
// import { useSelector } from "react-redux";
// //https://source.unsplash.com/700x1000/?travel
// function AddPlace() {
//   const pinLocation = useSelector(
//     (state) => state.pinLocationState.pinLocation
//   );
//   const db = firebase.database();
//   const [places, setPlaces] = useState({});
//   const [photo, setPhoto] = useState();

//   const handlePhotoSelect = (event) => {
//     setPhoto(event.target.files[0]);
//   };

//   const handleInput = (event) => {
//     setPlaces({
//       ...places,

//       [event.target.name]: event.target.value,
//       uid: firebase.auth().currentUser.uid,
//     });
//   };
//   const handleAddPlace = () => {
//     var photoId = Math.floor(Math.random() * 9999) + 1;
//     let storageRef = firebase.storage().ref("photos/" + photoId);

//     storageRef.put(photo);
//     db.ref(`places/${places.uid}`).push({
//       placeName: places.placeName,
//       uid: places.uid,
//       placeDesc: places.placeDesc,
//       photoName: photoId,
//       placeLat: pinLocation.lat,
//       placeLng: pinLocation.lng,
//     });

//     setPlaces({
//       placeName: "",
//       uid: places.uid,
//       placeDesc: "",
//     });
//   };
//   const handleBothAdd = () => {
//     handleAddPlace();
//   };
//   return (
//     <div
//       style={{
//         backgroundImage: `url(${"https://source.unsplash.com/900x1300/?city"})`,
//       }}
//       className='addPlace'
//     >
//       <form className='addPlaceContainer'>
//         <label for='placeName'>Place Name</label>
//         <input
//           onChange={handleInput}
//           value={places.placeName}
//           type='text'
//           name='placeName'
//         />
//         <label for='placeDescription'>Place Description</label>
//         <textarea
//           className='textarea'
//           onChange={handleInput}
//           value={places.placeDesc}
//           type='textarea'
//           name='placeDescription'
//         />
//         <label for='photo'>Photo</label>
//         <input onChange={handlePhotoSelect} type='file' name='photo' />
//         <button
//           className='addPlaceInsideBtn'
//           type='button'
//           onClick={handleBothAdd}
//         >
//           Add place
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddPlace;
