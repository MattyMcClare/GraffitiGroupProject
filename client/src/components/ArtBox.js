import React from 'react';

const ArtBox = (props) => {
    const handleSelectArt = (evt) => {
        // evt.preventDefault();
        evt.persist();
        const selectedId = evt.target.id;
        props.onSelectArt(selectedId)
        console.log("handle click", props);
    }

    return (
        <div onClick={handleSelectArt} className="art-box">
            <img src={require(props.img)} alt="default" height="200" width="200"></img>
            <p>{props.location}</p>
            <p>{props.date}</p>
        </div>
    )
}

export default ArtBox;
