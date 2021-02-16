import React, { useState } from "react";
//router
import { NavLink } from "react-router-dom";
//firebase
import firebase from "firebase";
//redux
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../redux/actions";

function NaviMenu() {
  const [username, setUsername] = useState();
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUsername(user.email);
    } else {
      setUsername("");
    }
  });

  const toggleState = useSelector((state) => state.toggleState.toggleData);
  const dispatch = useDispatch();

  const handleLogout = () => {
    firebase.auth().signOut();

    if (toggleState == true) {
      dispatch(toggle());
    }
  };
  const handleYourPlaces = () => {
    dispatch(toggle());
  };

  return (
    <div className='naviMenu'>
      <NavLink to='/'>Home</NavLink>

      {username ? (
        // LOGGED IN !!!!!!!!!
        <>
          <NavLink onClick={handleLogout} to='/logout'>
            Log Out
          </NavLink>

          <NavLink onClick={handleYourPlaces} to='/'>
            Your Places
            {toggleState ? <span style={{ color: "#ff6a75" }}> ✔</span> : ""}
          </NavLink>
          <NavLink style={{ color: "#ff6a75" }} to='/'>
            Plan a Route
          </NavLink>
          <NavLink to='/'>Radius</NavLink>
          <NavLink to='/'>Categories</NavLink>
          <NavLink to='/add-place'>Add place</NavLink>
        </>
      ) : (
        //   NOT LOGGED IN !!!!!!!
        <>
          <NavLink to='/login'>Log In</NavLink>
          <NavLink to='/signin'>Create an Account</NavLink>
          <NavLink to='/signin'>Your Places</NavLink>
          <NavLink style={{ color: "#ff6a75" }} to='/signin'>
            Plan a Route
          </NavLink>

          <NavLink to='/signin'>Radius</NavLink>
          <NavLink to='/signin'>Categories</NavLink>
          <NavLink to='/signin'>Add place</NavLink>
        </>
      )}
    </div>
  );
}

export default NaviMenu;
