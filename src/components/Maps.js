import React, { useState, useEffect } from "react";

//redux
import { useSelector } from "react-redux";
//leaflet
import L from "leaflet";

function Maps() {
  const hamburgerLightsOut = useSelector(
    (state) => state.hamburgerState.hamburgerLightsOut
  );
  const data = useSelector((state) => state.dataState.data);
  const [userLocation, setUserLocation] = useState();
  const [pinLoc, setPinLoc] = useState();
  const [map, setMap] = useState();

  // place markers on the map
  useEffect(() => {
    Object.entries(data).forEach((el) => {
      Object.entries(el[1]).forEach((element) => {
        L.marker([element[1].placeLat, element[1].placeLng])
          .bindPopup(`<b>${element[1].placeName}</b>`)
          .addTo(map);
      });
    });
  }, [data]);

  // get user location
  navigator.geolocation.getCurrentPosition(showLocation);
  function showLocation(position) {
    setUserLocation({
      lat: position.coords.latitude,
      long: position.coords.longitude,
    });
  }

  //mount leaflet Map
  useEffect(() => {
    var mymap = L.map("mapid").setView([50, 19.9], 4);
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        maxZoom: 19,
        minZoom: 9,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoiamFzd2l0b2xkMSIsImEiOiJja2ZoZDZydHQwMThvMnRxbXk5bmUyZ2Z6In0.xyFZ2Wq7NzGgMTkMUMM9Og",
      }
    ).addTo(mymap);
    // BELOW mapCenterCoord data !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // mymap.locate({ setView: true, enableHighAccuracy: true });
    // L.control.mapCenterCoord().addTo(mymap);
    // L.control.mapCenterCoord({
    //   latlngFormat: "DD",
    //   onMove: true,
    //   template: "{y} | {x}",
    // });
    //dangerous !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // mymap.addEventListener("moveend", function () {
    //   setPinLoc(mymap.getCenter());
    // });
    setMap(mymap);
  }, []);

  return <div style={{ filter: hamburgerLightsOut }} id='mapid'></div>;
}

export default Maps;
