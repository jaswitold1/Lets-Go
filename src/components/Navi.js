import React, { useState } from "react";

import logo from "../assets/logo.jpg";

function Navi() {
  const [isActive, setIsActive] = useState("");
  const handleActive = () => {
    isActive == "" ? setIsActive("is-active") : setIsActive("");
  };
  return (
    <div className='navi'>
      <div className='upperNavi'>
        <div></div>
        <img alt='logo' src={logo} />
        <button
          onClick={handleActive}
          className={"hamburger " + "hamburger--vortex " + isActive}
          type='button'
        >
          <span className='hamburger-box'>
            <span className='hamburger-inner'></span>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Navi;
