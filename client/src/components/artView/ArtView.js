import React from "react";

const ArtView = (props) => {
    console.log(props);

    return (
        <div className="modal">
            <img src={props.selectedArtView.img} alt="default" height="80%" width="80%"></img>
            <h4>this is Art View Window</h4>
            {/* <p>{props.selectedArtView.location}</p> */}
            {/* <ModalArtGrid grid={} /> */}
        </div>
    );

}

export default ArtView;