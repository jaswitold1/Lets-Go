import React from "react";
import { fetchData, fetchPhotos } from "../redux/actions";
//redux
import { useDispatch, useSelector } from "react-redux";

function Sidebar() {
  const data = useSelector((state) => state.dataState.loading);
  const photos = useSelector((state) => state.photosState.loading);

  const dispatch = useDispatch();
  return (
    <div className='sidebar'>
      <button onClick={() => dispatch(fetchData())}>{data}</button>
      <button onClick={() => dispatch(fetchPhotos())}>{photos}</button>
    </div>
  );
}

export default Sidebar;
