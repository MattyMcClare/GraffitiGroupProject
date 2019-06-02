import React from 'react';
import defaultImage from '../img/default-image.jpg'

const Artist = () => {
    return (
        <>
            <img src={defaultImage} alt="default" height="40" width="40"></img>
            <p>Artist Name</p>
        </>
    )
}

export default Artist;