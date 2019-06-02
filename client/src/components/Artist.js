import React from 'react';
import defaultImage from '../img/default-image.jpg'

const Artist = ({ handle, signature }) => {
    return (
        <div className="artist">
            <img src={signature} alt="default" height="40" width="40"></img>
            <p>{handle}</p>
        </div>
    )
}

export default Artist;