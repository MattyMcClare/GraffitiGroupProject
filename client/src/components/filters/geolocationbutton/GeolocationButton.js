import React from 'react';
import geologo from './geolocationicon.png';

const GeolocationButton = (props) => {
  return (
    <button type = "button" className="image-button" onClick={props.handleGeolocatorClick}>
      <img src={geologo} alt="compass"/>
    </button>
  )
}

export default GeolocationButton;
