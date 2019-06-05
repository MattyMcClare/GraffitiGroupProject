import React from "react";


const ModalView = (props) => {
    // let image = props.allArtView[parseInt(props.match.params.id, 10)];

    // if (!image) return null;

    let back = e => {
        e.stopPropagation();
        props.history.goBack();
    };

    return (
        <div
            onClick={back}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                background: "rgba(0, 0, 0, 0.15)"
            }}
        >
            <div
                className="modal"
                style={{
                    position: "absolute",
                    background: "#fff",
                    top: 25,
                    left: "10%",
                    right: "10%",
                    padding: 15,
                    border: "2px solid #444"
                }}
            >
                <div className="art-view">
                    <img src={props.selectedArtView.img} alt="default" height="400" width="600"></img>
                    <h4>{props.selectedArtView.handle}</h4>
                    {/* <p>{props.selectedArtView.location}</p> */}
                    {/* <ModalArtGrid grid={} /> */}
                </div>

                <button type="button" onClick={back}>
                    Close
                </button>
            </div>
        </div>
    );
}

// render(<ModalView />, document.getElementById("root"));
export default ModalView;