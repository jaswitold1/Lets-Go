import React, { useEffect, useState } from "react";
import Place from "./Place";
import Search from "./Search";
import { fetchData, fetchPhotos, toggle } from "../redux/actions";
//redux
import { useDispatch, useSelector } from "react-redux";
//firebase
import firebase from "firebase";

function Sidebar() {
  //search state
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  //usedispatch
  const dispatch = useDispatch();

  //loading data from firebase
  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchPhotos());
  }, [dispatch]);

  //useSelector
  const toggleData = useSelector((state) => state.toggleState.toggle);
  const data = useSelector((state) => state.dataState.data);
  const photos = useSelector((state) => state.photosState.photos);
  const hamburgerLightsOut = useSelector(
    (state) => state.hamburgerState.hamburgerLightsOut
  );

  // converting all user's data to array of all places
  let placeArr = [];
  Object.entries(data).forEach((el) => {
    Object.entries(el[1]).forEach((element) => {
      placeArr.push(element[1]);
    });
  });
  //yourPlaces - placeArr for logged user only
  // let placeUserArr = [];
  // if (placeArr) {
  //   console.log(
  //     placeArr.filter((el) => el.uid === firebase.auth().currentUser.uid)
  //   );
  // }
  //search
  let placeSearchArr = placeArr.filter((el) =>
    el.placeName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ filter: hamburgerLightsOut }} className='sidebar'>
      <div className='sidebarNavi'>
        <div className='sidebarNaviContainer'>
          <Search search={search} handleSearch={handleSearch} />
        </div>
        {/* <input onClick={dispatch(toggle())} type='checkbox' /> */}
      </div>
      {search
        ? placeSearchArr.map((el, i) => {
            return (
              <Place
                photos={photos}
                photoName={el.photoName}
                placeName={el.placeName}
                placeDesc={el.placeDesc}
                placeLat={el.placeLat}
                placeLng={el.placeLng}
                key={i}
              />
            );
          })
        : placeArr.map((el, i) => {
            return (
              <Place
                photos={photos}
                photoName={el.photoName}
                placeName={el.placeName}
                placeDesc={el.placeDesc}
                placeLat={el.placeLat}
                placeLng={el.placeLng}
                key={i}
              />
            );
          })}
    </div>
  );
}

export default Sidebar;
