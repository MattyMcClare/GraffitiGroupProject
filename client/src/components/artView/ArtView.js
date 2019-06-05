import React from "react";
import ArtViewGrid from './ArtViewGrid'


const ArtView = (props) => {
    if (props.selectedArtView === null) {
        return null;
    }


    return (
        <div className="art-view">
            <h3>ArtView</h3>
            <img src={props.selectedArtView.imageUrl} alt="default" height="400" width="600"></img>
            <p>Style: {props.selectedArtView.style}</p>
            <p>Description: {props.selectedArtView.description}</p>
            <p>Posted: {props.selectedArtView.dateUploaded}</p>
            <ArtViewGrid worksByArtist={props.selectedArtView._embedded.artist.art} />
        </div>
    );

}

export default ArtView;