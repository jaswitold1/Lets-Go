import React from "react";
import { fetchData } from "../redux/actions";
//redux
import { useDispatch } from "react-redux";
function Sidebar() {
  const dispatch = useDispatch();
  return (
    <div className='sidebar'>
      <button onClick={() => dispatch(fetchData())}>dupa</button>
    </div>
  );
}

export default Sidebar;
