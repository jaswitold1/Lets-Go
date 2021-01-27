import React from "react";
import LowerMenu from "./LowerMenu";
import logo from "../assets/logo.jpg";
//redux
import { active, inactive } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
//router
import { Link } from "react-router-dom";

function Navi() {
  const dispatch = useDispatch();
  const hamburgerWidth = useSelector(
    (state) => state.hamburgerState.hamburgerWidth
  );
  const isActive = useSelector((state) => state.hamburgerState.isActive);
  const upperNaviHeight = useSelector(
    (state) => state.authState.upperNaviHeight
  );
  const handleActive = () => {
    hamburgerWidth == "translateX(-100%)"
      ? dispatch(active())
      : dispatch(inactive());
  };
  return (
    <div className='navi'>
      <div style={{ height: upperNaviHeight }} className='upperNavi'>
        <div className='balanceSpaceBetween'></div>
        <Link to='/' className='logo'>
          <img alt='logo' src={logo} />
        </Link>
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
      <LowerMenu />
    </div>
  );
}

export default Navi;
