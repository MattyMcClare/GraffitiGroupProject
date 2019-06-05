import React from 'react';
import ArtBox from './ArtBox';
import { Link } from 'react-router-dom';


const ArtGrid = (props) => {
    const artBoxes = props.allArt.map(art => {
        return (
            <Link
                key={art.id}
                to={{
                    pathname: `/art/${art.id}`
                }}
            >
                <ArtBox
                    key={art.id}
                    img={art.img}
                    handle={art.handle}
                    signature={art.signature}
                    location={art.location}
                >
                </ArtBox>
            </Link>
        )
    });
    return (
        <div className="art-grid">
            {artBoxes}
        </div>
    )
}
export default ArtGrid;
