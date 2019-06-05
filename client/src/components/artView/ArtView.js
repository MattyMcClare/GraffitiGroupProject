import React from "react";
import ArtViewGrid from './ArtViewGrid'
const ArtView = (props) => {

    return (
        <div className="art-view">
            <img src={props.selectedArtView.img} alt="default" height="400" width="600"></img>
            <h4>{props.selectedArtView.handle}</h4>
            <p>{props.selectedArtView.location}</p>
            <ArtViewGrid worksByArtist={props.selectedArtView.worksByArtist} />
        </div>
    );

}

export default ArtView;