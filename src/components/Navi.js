import React from "react";
import Hamburger from "./Hamburger";
import logo from "../assets/logo.jpg";

function Navi() {
  return (
    <div className='navi'>
      <div className='upperNavi'>
        <Hamburger />
        <img alt='logo' src={logo} />
        <div></div>
      </div>
    </div>
  );
}

export default Navi;
