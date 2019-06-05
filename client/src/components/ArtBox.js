import React from 'react';
import dateString from '../helpers/dateString'

const ArtBox = (props) => {

  const handleSelectArt = (evt) => {
      // evt.preventDefault();
      evt.persist();
      const selectedId = props.art.id;
      props.onSelectArt(selectedId)
  }

  if (props.art === undefined){
    return null
  }

  return (
    <div onClick={handleSelectArt} className="art-box">
      <img src={props.art.imageUrl} alt={props.art.description}></img>
      <div className="art-text">
        <p><strong>{props.location}</strong></p>
        <p>{dateString(props.art.dateUploaded)}</p>
      </div>
    </div>
  )

}

export default ArtBox;
