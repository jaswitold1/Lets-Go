import React from "react";

function Place({ photoName, photos, placeName, placeDesc }) {
  return (
    <div className='place'>
      <img alt='' src={photos.filter((url) => url.includes(photoName))} />
      <div className='placeContainer'>
        <h1 className='placeName'>{placeName}</h1>
        <p className='placeDesc'>
          {placeDesc.length >= 30
            ? placeDesc.substring(0, 30) + "..."
            : placeDesc}
        </p>
        <span className='placeCategory'>Category:</span>
        <span className='placeRating'>☆☆☆☆☆</span>
      </div>
    </div>
  );
}

export default Place;
