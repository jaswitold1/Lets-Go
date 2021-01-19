import React from "react";
import Hamburger from "./Hamburger";
import logo from "../assets/logo.jpg";

function Navi() {
  return (
    <div className='navi'>
      <div className='upperNavi'>
        <div></div>
        <img alt='logo' src={logo} />
        <button>k</button>
      </div>
    </div>
  );
}

export default Navi;
