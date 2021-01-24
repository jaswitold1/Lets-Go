import React from "react";

function Place({ placeName, placeDesc, photo }) {
  return (
    <div className='place'>
      <img src={photo} alt='' />
      <div>
        <h1>{placeName}</h1>
        <p>{placeDesc}</p>
      </div>
    </div>
  );
}

export default Place;
