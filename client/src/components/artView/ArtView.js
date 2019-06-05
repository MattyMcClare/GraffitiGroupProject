import React from "react";
import ArtViewGrid from './ArtViewGrid'
// import TimeAgo from 'react-timeago'
import dateString from '../../helpers/dateString'


const ArtView = (props) => {
    if (props.selectedArtView === null) {
        return null;
    }


    return (
        <div className="art-view">
            <h3>ArtView</h3>
            <img src={props.selectedArtView.imageUrl} alt="default" height="400" width="600"></img>
            {/* <img src={props.selectedArtView._embedded.artist.signature} alt="signature" height="40" width="40"> ></img> */}
            <h4>{props.selectedArtView._embedded.artist.handle}</h4>
            <p>{props.selectedArtView._embedded.location.art.location.stringLocation}</p>
            <p>{dateString(props.selectedArtView.dateUploaded)}</p>
            <p>Style: {props.selectedArtView.style}</p>
            <p>Description: {props.selectedArtView.description}</p>
            <ArtViewGrid worksByArtist={props.selectedArtView._embedded.artist.art} />
        </div>
    );

}

export default ArtView;