import React, { useEffect, useState } from "react";
import Place from "./Place";
import Search from "./Search";
import { fetchData, fetchPhotos } from "../redux/actions";
//redux
import { useDispatch, useSelector } from "react-redux";
//firebase
import firebase from "firebase";

function Sidebar() {
  //search state
  const [search, setSearch] = useState("");
  const [placeUserArr, setPlaceUserArr] = useState([]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  //usedispatch
  const dispatch = useDispatch();

  //loading data from firebase
  useEffect(() => {
    dispatch(fetchData());
    setTimeout(() => {
      dispatch(fetchPhotos());
    }, 1000);
  }, [dispatch]);
  //useSelector
  const toggleState = useSelector((state) => state.toggleState.toggleData);
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
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // Object.entries(data).forEach((el) => {
        //   Object.entries(el[1]).forEach((element) => {
        //     placeArr.push(element[1]);
        //   });
        // });
        setPlaceUserArr(placeArr.filter((el) => el.uid == user.uid));
      }
    });
  }, [data]);
  console.log(placeUserArr);
  //search
  let placeSearchArr = [];
  toggleState
    ? (placeSearchArr = placeUserArr.filter((el) =>
        el.placeName.toLowerCase().includes(search.toLowerCase())
      ))
    : (placeSearchArr = placeArr.filter((el) =>
        el.placeName.toLowerCase().includes(search.toLowerCase())
      ));

  return (
    <div style={{ filter: hamburgerLightsOut }} className='sidebar'>
      <div className='sidebarNavi'>
        <div className='sidebarNaviContainer'>
          <Search search={search} handleSearch={handleSearch} />
        </div>
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
        : toggleState
        ? placeUserArr.map((el, i) => {
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
