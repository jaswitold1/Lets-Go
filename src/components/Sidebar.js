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
      placeArr.push(element);
    });
  });

  //yourPlaces - placeArr for logged user only
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setPlaceUserArr(placeArr.filter((el) => el[1].uid == user.uid));
      }
    });
  }, [data]);
  //search
  let placeSearchArr = [];
  toggleState
    ? (placeSearchArr = placeUserArr.filter((el) =>
        el[1].placeName.toLowerCase().includes(search.toLowerCase())
      ))
    : (placeSearchArr = placeArr.filter((el) =>
        el[1].placeName.toLowerCase().includes(search.toLowerCase())
      ));

  //add guide red color how to use app
  return (
    <div style={{ filter: hamburgerLightsOut }} className='sidebar'>
      <div className='sidebarNavi'>
        <div className='sidebarNaviContainer'>
          <Search search={search} handleSearch={handleSearch} />
        </div>
      </div>
      {search ? (
        toggleState ? (
          placeSearchArr.map((el, i) => {
            return (
              <Place
                photos={photos}
                photoName={el[1].photoName}
                placeName={el[1].placeName}
                placeDesc={el[1].placeDesc}
                placeLat={el[1].placeLat}
                placeLng={el[1].placeLng}
                uid={el[1].uid}
                placeID={el[0]}
                key={i}
              />
            );
          })
        ) : (
          placeSearchArr.map((el, i) => {
            return (
              <Place
                photos={photos}
                photoName={el[1].photoName}
                placeName={el[1].placeName}
                placeDesc={el[1].placeDesc}
                placeLat={el[1].placeLat}
                placeLng={el[1].placeLng}
                placeID={el[0]}
                key={i}
              />
            );
          })
        )
      ) : toggleState ? (
        placeUserArr.length > 0 ? (
          placeUserArr.map((el, i) => {
            return (
              <Place
                photos={photos}
                photoName={el[1].photoName}
                placeName={el[1].placeName}
                placeDesc={el[1].placeDesc}
                placeLat={el[1].placeLat}
                placeLng={el[1].placeLng}
                uid={el[1].uid}
                placeID={el[0]}
                key={i}
              />
            );
          })
        ) : (
          <span>Add places to see Your places listed here ;)</span>
        )
      ) : (
        placeArr.map((el, i) => {
          return (
            <Place
              photos={photos}
              photoName={el[1].photoName}
              placeName={el[1].placeName}
              placeDesc={el[1].placeDesc}
              placeLat={el[1].placeLat}
              placeLng={el[1].placeLng}
              key={i}
            />
          );
        })
      )}
    </div>
  );
}

export default Sidebar;
