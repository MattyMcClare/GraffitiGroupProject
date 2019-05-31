import React from 'react';
import ArtInfoWithName from './ArtInfoWithName';
import defaultImage from '../img/default-image.jpg'

const ArtBox = () => {
    return (
        <>
            <img src={defaultImage} alt="default" height="200" width="200"></img>
            <ArtInfoWithName />
        </>
    )

}

export default ArtBox;