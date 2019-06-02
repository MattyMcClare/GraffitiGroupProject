import React from 'react';
import Artist from './Artist';

const ArtInfoWithName = () => {
    return (
        <div className="art-info-with-name">
            <Artist />
            <p>Location</p>
            <p>Date</p>
        </div>
    )
}

export default ArtInfoWithName;