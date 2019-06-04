import React from "react";
import { render } from "react-dom";
import Modal from "react-responsive-modal";

class ArtView extends React.Component {
    state = {
        open: false
    };

    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        return (
            <div className="modal">
                <button onClick={this.onOpenModal}>More</button>
                <Modal open={open} onClose={this.onCloseModal}>
                    <img src={this.props.img} alt="default" height="400" width="600"></img>
                    <h4>{this.props.handle}</h4>
                    <p>{this.props.location}</p>
                </Modal>
            </div>
        );
    }
}

render(<ArtView />, document.getElementById("root"));

export default ArtView;