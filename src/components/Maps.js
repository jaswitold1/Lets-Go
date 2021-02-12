import React, { useState, useEffect } from "react";
import control from "../components/src/L.Control.MapCenterCoord";
//redux
import { useSelector, useDispatch } from "react-redux";
import { pinLocation } from "../redux/actions";
//leaflet
import L from "leaflet";

function Maps() {
  const hamburgerLightsOut = useSelector(
    (state) => state.hamburgerState.hamburgerLightsOut
  );
  const data = useSelector((state) => state.dataState.data);
  const dispatch = useDispatch();
  const hoverLat = useSelector((state) => state.hoverState.hoverLat);
  const hoverLng = useSelector((state) => state.hoverState.hoverLng);
  const placeName = useSelector((state) => state.hoverState.hoverPlaceName);

  const [map, setMap] = useState();

  //mounting leaflet Map
  useEffect(() => {
    var mymap = L.map("mapid", {
      center: [51.505, -0.09],
      zoom: "15",
    });
    //locating user
    mymap.locate({ setView: true, maxZoom: "11" });
    // user marker position
    L.control.mapCenterCoord().addTo(mymap);

    mymap.addEventListener("moveend", function () {
      dispatch(pinLocation(mymap.getCenter()));
    });

    setMap(mymap);
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        maxZoom: 19,
        minZoom: 5,

        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoiamFzd2l0b2xkMSIsImEiOiJja2ZoZDZydHQwMThvMnRxbXk5bmUyZ2Z6In0.xyFZ2Wq7NzGgMTkMUMM9Og",
      }
    ).addTo(mymap);
  }, [dispatch]);

  // place markers on the map
  useEffect(() => {
    map
      ? Object.entries(data).forEach((el) => {
          Object.entries(el[1]).forEach((element) => {
            L.marker([element[1].placeLat, element[1].placeLng])
              .bindPopup(`<b>${element[1].placeName}</b>`)
              .addTo(map);
          });
        })
      : console.log(
          "map markers function called before map mounted or location services disabled"
        );
  }, [data, map]);

  // pan map to hovered place
  useEffect(() => {
    if (map) {
      L.popup({
        autoPanPadding: new L.Point(200, 200),
      })
        .setLatLng([hoverLat, hoverLng])
        .setContent(`<b>${placeName}</b>`)

        .openOn(map);
    }
  }, [hoverLat, hoverLng, placeName]);

  return (
    <div
      style={{ filter: `grayscale(80%) ${hamburgerLightsOut}` }}
      id='mapid'
    ></div>
  );
}

export default Maps;
