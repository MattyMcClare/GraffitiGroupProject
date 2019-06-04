import React from "react";

const ArtView = (props) => {
    console.log(props);

    return (
        <div className="art-view">
            <img src={props.selectedArtView.img} alt="default" height="400" width="600"></img>
            <h4>{props.selectedArtView.handle}</h4>
            {/* <p>{props.selectedArtView.location}</p> */}
            {/* <ModalArtGrid grid={} /> */}
        </div>
    );

}

export default ArtView;