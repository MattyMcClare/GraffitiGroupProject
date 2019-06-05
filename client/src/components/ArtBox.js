import React from 'react';

const ArtBox = (props) => {
    const handleSelectArt = (evt) => {
        // evt.preventDefault();
        evt.persist();
        const selectedId = props.art.art.id;
        props.onSelectArt(selectedId)
    }
    // const source = "./seedimages/" + props.img.slice(14)
    return (
        <div onClick={handleSelectArt} className="art-box">
            {/* <img src={source} alt={props.description}></img> */}
            <p>{props.location}</p>
            <p>{props.date}</p>
        </div>
    )
}

export default ArtBox;
