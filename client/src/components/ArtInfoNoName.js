import React from 'react';

const ArtInfoNoName = (props) => {
    return (
        <div className="art-info-no-name">
            <p>{props.location}</p>
            <p>{props.date}</p>
        </div>
    )
}

export default ArtInfoNoName;