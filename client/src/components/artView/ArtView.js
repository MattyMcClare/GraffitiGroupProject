import React from "react";
// import ArtViewGrid from './ArtViewGrid'

const ArtView = (props) => {
    console.log(props);
    if (props.selectedArtView === null) {
        props.selectArt();
        return null;
    }

    return (
        <div className="art-view">
            <h3>ArtView</h3>
            {/* <img src={props.selectedArtView.img} alt="default" height="400" width="600"></img> */}
            <h4>{props.selectedArtView.style}</h4>
            <p>{props.selectedArtView.description}</p>
            {/* <ArtViewGrid worksByArtist={props.selectedArtView.worksByArtist} /> */}
        </div>
    );

}

export default ArtView;