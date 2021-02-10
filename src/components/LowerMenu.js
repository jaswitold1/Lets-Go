import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      <div className='lowerMenuContainer'>
        <Link to='/add-place' className='addPlaceBtn'>
          Add place !
        </Link>
        <div className='welcomeUsername'>Welcome {username} !</div>
      </div>
    </div>
  );
}

export default LowerMenu;
