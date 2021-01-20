import React, { useState } from "react";

import logo from "../assets/logo.jpg";
//redux
import { active, inactive } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
function Navi() {
  const [isActive, setIsActive] = useState("");
  const dispatch = useDispatch();
  const hamburgerWidth = useSelector((state) => state.hamburgerWidth);
  const handleActive = () => {
    isActive == "" ? setIsActive("is-active") : setIsActive("");
    hamburgerWidth == 0 ? dispatch(active()) : dispatch(inactive());
  };
  return (
    <div className='navi'>
      <div className='upperNavi'>
        <div className='balanceSpaceBetween'></div>
        <img alt='logo' src={logo} />
        <button
          onClick={handleActive}
          className={"hamburger hamburger--vortex " + isActive}
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
