import React from 'react';
import ArtBox from './ArtBox';

const ArtGrid = (props) => {
    const artBoxes = props.allArt.map(art => {

      return (
        <ArtBox
          key={art.art.id}
          img={art.art.imageUrl}
          date={art.art.dateUploaded}
          location={art.stringLocation}
        >
        </ArtBox>
      )
    });
    return (
        <div className="art-grid">
            {artBoxes}
        </div>
    )
}
export default ArtGrid;
