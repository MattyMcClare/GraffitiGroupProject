import React from 'react';
import ArtBox from './ArtBox';

const ArtGrid = ({ allArt }) => {
    const artBoxes = allArt.map(art => {
        return (
            <ArtBox
                key={art.id}
                img={art.img}
                handle={art.handle}
                signature={art.signature}
                location={art.location}
            >
            </ArtBox>
        )
    });
    return (
        <div className="art-grid">
            {artBoxes}
        </div>
    )
}
export default ArtGrid;