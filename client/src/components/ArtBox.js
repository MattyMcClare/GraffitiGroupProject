import React from 'react';

const ArtBox = (props) => {
    const handleSelectArt = (evt) => {
        // evt.preventDefault();
        evt.persist();
        const selectedId = props.art.art.id;
        props.onSelectArt(selectedId)
        console.log("props", props);
    }

    return (
        <div onClick={handleSelectArt} className="art-box">
            <img src={props.art.img} alt="default" height="200" width="200"></img>
            <p>{props.art.location}</p>
            <p>{props.art.date}</p>
        </div>
    )
}

export default ArtBox;
