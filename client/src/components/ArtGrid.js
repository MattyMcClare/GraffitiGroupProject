import React from 'react';
import ArtBox from './ArtBox';
import { Link } from 'react-router-dom';


const ArtGrid = (props) => {

    const artBoxes = props.allArt.map(art => {

        return (
            <Link
                key={art.id}
                to={{
                    pathname: `/art/${art.art.id}`
                }}

            >
                <ArtBox
                    art={art}
                    key={art.id}
                    img={art.art.imageUrl}
                    description={art.art.description}
                    location={art.stringLocation}
                    date={art.art.dateUploaded}
                    onSelectArt={props.onSelectArt}
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
