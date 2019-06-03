import React from 'react';
import Artist from './Artist';

const ArtInfoWithName = ({ handle, signature, location }) => {
    return (
        <div className="art-info-with-name">
            <Artist
                handle={handle}
                signature={signature}
            />
            <p>{location}</p>
        </div>
    )
}

export default ArtInfoWithName;