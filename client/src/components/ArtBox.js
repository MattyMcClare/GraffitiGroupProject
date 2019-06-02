import React from 'react';
import ArtInfoWithName from './ArtInfoWithName';
import defaultImage from '../img/default-image.jpg'

const ArtBox = () => {
    return (
        <div className="art-box">
            <img src={defaultImage} alt="default" height="200" width="200"></img>
            <ArtInfoWithName />
        </div>
    )

}

export default ArtBox;