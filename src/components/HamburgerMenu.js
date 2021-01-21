import React from "react";
//redux
import { useSelector, useDispatch } from "react-redux";
import { inactive } from "../redux/actions";
//router
import { NavLink } from "react-router-dom";
//firebase
import firebase from "firebase";

function HamburgerMenu() {
  const hamburgerWidth = useSelector((state) => state.hamburgerWidth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    firebase.auth().signOut();
    dispatch(inactive());
  };
  return (
    <div style={{ transform: hamburgerWidth }} className='hamburgerMenu'>
      <NavLink onClick={() => dispatch(inactive())} to='/'>
        Home
      </NavLink>
      <NavLink onClick={() => dispatch(inactive())} to='/login'>
        Log In
      </NavLink>
      <NavLink onClick={() => dispatch(inactive())} to='/signin'>
        Create an Account
      </NavLink>
      <NavLink onClick={handleLogout} to='/logout'>
        Log Out
      </NavLink>
    </div>
  );
}

export default HamburgerMenu;
