import React, { useEffect } from "react";
import Place from "./Place";
import { fetchData, fetchPhotos } from "../redux/actions";
//redux
import { useDispatch, useSelector } from "react-redux";

function Sidebar() {
  //loading data from firebase
  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchPhotos());
  }, []);

  //useSelector
  const data = useSelector((state) => state.dataState.data);
  const photos = useSelector((state) => state.photosState.photos);

  // converting all user's data to array of all places
  let placeArr = [];
  Object.entries(data).forEach((el) => {
    Object.entries(el[1]).forEach((element) => {
      placeArr.push(element[1]);
    });
  });

  const dispatch = useDispatch();
  return (
    <div className='sidebar'>
      {placeArr.map((el, i) => {
        return (
          <Place
            photos={photos}
            photoName={el.photoName}
            placeName={el.placeName}
            placeDesc={el.placeDesc}
            key={i}
          />
        );
      })}
    </div>
  );
}

export default Sidebar;
