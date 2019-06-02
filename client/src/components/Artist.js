import React from 'react';
import defaultImage from '../img/default-image.jpg'

const Artist = () => {
    return (
        <div className="artist">
            <img src={defaultImage} alt="default" height="40" width="40"></img>
            <p>Artist Name</p>
        </div>
    )
}

export default Artist;