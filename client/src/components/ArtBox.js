import React from 'react';

const ArtBox = (props) => {

  const source = "./seedimages/" + props.img.slice(14)

  return (
      <div className="art-box">
          <img src={source} alt={props.description}></img>
          <p>{props.location}</p>
          <p>{props.date}</p>
      </div>
  )
}

export default ArtBox;
