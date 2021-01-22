import React, { useState } from "react";
//firebase
import firebase from "firebase";
//redux
import { useSelector, useDispatch } from "react-redux";
import { logged, notLogged } from "../redux/actions";

function LowerMenu() {
  const [username, setusername] = useState("");
  const lowerMenuDisplay = useSelector(
    (state) => state.authState.lowerMenuDisplay
  );
  const dispatch = useDispatch();

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      dispatch(logged());
      setusername(user.email);
    } else {
      dispatch(notLogged());
      setusername("");
    }
  });
  return (
    <div style={{ display: lowerMenuDisplay }} className='lowerMenu'>
      <div className='welcomeUsername'>Welcome {username} !</div>
      <button className='addPlaceBtn'>Add place !</button>
    </div>
  );
}

export default LowerMenu;
