import React from 'react';

const ArtBox = (props) => {

  const source = "./seedimages/" + props.img.slice(14)

  return (
    <div className= "art-box ">
        <img src={source} alt={props.description}></img>
        <div className="art-text">
          <p><strong>{props.location}</strong></p>
          <p>{props.date}</p>
        </div>
    </div>
  )
}

export default ArtBox;
