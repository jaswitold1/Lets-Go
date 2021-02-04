import React from "react";
import { useDispatch } from "react-redux";
import { hover } from "../redux/actions";
function Place({ photoName, photos, placeName, placeDesc }) {
  const dispatch = useDispatch();
  const handleHover = (event) => {
    event.stopPropagation();
    dispatch(hover(event.target.id));
  };
  return (
    <div onMouseOver={handleHover} id={photoName} className='place'>
      <img
        id={photoName}
        alt=''
        src={photos.filter((url) => url.includes(photoName))}
      />
      <div id={photoName} className='placeContainer'>
        <h1 id={photoName} className='placeName'>
          {placeName}
        </h1>
        <p id={photoName} className='placeDesc'>
          {placeDesc.length >= 30
            ? placeDesc.substring(0, 30) + "..."
            : placeDesc}
        </p>
        <span id={photoName} className='placeCategory'>
          Category:
        </span>
        <span id={photoName} className='placeRating'>
          ☆☆☆☆☆
        </span>
      </div>
    </div>
  );
}

export default Place;
