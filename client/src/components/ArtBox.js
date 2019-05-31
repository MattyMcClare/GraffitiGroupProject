import React from 'react';
import ArtInfo from './ArtInfoWithName';
import ArtistInfo from './ArtInfoNoName';
import defaultImage from '../img/default-image.jpg'

const ArtBox = () => {
    return (
        <>
            <h2>ArtBox</h2>
            <img src={defaultImage} alt="default" height="200" width="200"></img>
            <ArtInfo />
            <ArtistInfo />
        </>
    )

}

export default ArtBox;