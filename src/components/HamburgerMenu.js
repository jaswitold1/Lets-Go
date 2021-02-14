import React, { useState } from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
import { inactive, toggle } from "../redux/actions";
//router
import { NavLink } from "react-router-dom";
//firebase
import firebase from "firebase";

function HamburgerMenu() {
  const [username, setUsername] = useState();
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUsername(user.email);
    } else {
      setUsername("");
    }
  });

  const hamburgerWidth = useSelector(
    (state) => state.hamburgerState.hamburgerWidth
  );
  const toggleState = useSelector((state) => state.toggleState.toggleData);
  const dispatch = useDispatch();

  const handleLogout = () => {
    firebase.auth().signOut();
    dispatch(inactive());
    if (toggleState == true) {
      dispatch(toggle());
    }
  };
  const handleYourPlaces = () => {
    dispatch(toggle());
    dispatch(inactive());
  };
  return (
    <div style={{ transform: hamburgerWidth }} className='hamburgerMenu'>
      <NavLink onClick={() => dispatch(inactive())} to='/'>
        Home
      </NavLink>

      {username ? (
        // LOGGED IN !!!!!!!!!
        <>
          <NavLink onClick={handleLogout} to='/logout'>
            Log Out
          </NavLink>
          <NavLink onClick={() => dispatch(inactive())} to='/add-place'>
            Add place
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
        </>
      ) : (
        //   NOT LOGGED IN !!!!!!!
        <>
          <NavLink onClick={() => dispatch(inactive())} to='/login'>
            Log In
          </NavLink>
          <NavLink onClick={() => dispatch(inactive())} to='/signin'>
            Create an Account
          </NavLink>
          <NavLink onClick={() => dispatch(inactive())} to='/signin'>
            Add place
          </NavLink>
          <NavLink onClick={() => dispatch(inactive())} to='/signin'>
            Your Places
          </NavLink>
          <NavLink
            style={{ color: "#ff6a75" }}
            onClick={() => dispatch(inactive())}
            to='/signin'
          >
            Plan a Route
          </NavLink>

          <NavLink onClick={() => dispatch(inactive())} to='/signin'>
            Radius
          </NavLink>
          <NavLink onClick={() => dispatch(inactive())} to='/signin'>
            Categories
          </NavLink>
        </>
      )}
    </div>
  );
}

export default HamburgerMenu;
