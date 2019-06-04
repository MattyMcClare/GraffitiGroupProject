import React from "react";
import Modal from "react-responsive-modal";
import ArtView from "./ArtView";


const ModalView = (props) => {
    console.log(props);

    return (
        <div style={props.styles}>
            <Modal open={props.open} onClose={props.onCloseModal}>
                <h2>this is modal art view window</h2>
                <ArtView selectedArtView={props.selectedArtView} />
            </Modal>
        </div>
    );

}

// render(<ModalView />, document.getElementById("root"));
export default ModalView;