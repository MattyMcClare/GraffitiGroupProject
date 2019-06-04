import React from 'react';

const ArtBox = (props) => {
  return (
    <div className="art-box">
      <img src={props.img} alt="default" height="200" width="200"></img>
      <p>{props.location}</p>
      <p>{props.date}</p>
    </div>
  )
}

export default ArtBox;
