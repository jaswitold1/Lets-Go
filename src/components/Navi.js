import React from "react";
import Hamburger from "./Hamburger";
import logo from "../assets/logo.jpg";

function Navi() {
  return (
    <div className='navi'>
      <div className='upper'>
        <Hamburger className='hamburger' />
        <img alt='logo' src={logo} />
        <div></div>
      </div>
      <div className='lower'></div>
    </div>
  );
}

export default Navi;
