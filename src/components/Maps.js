import React from "react";
import firebase from "firebase";
//redux
import { useSelector } from "react-redux";

function Maps() {
  const mapsHeight = useSelector((state) => state.mapsHeight);

  console.log(firebase.auth());
  return <div style={{ height: mapsHeight }} className='maps'></div>;
}

export default Maps;
