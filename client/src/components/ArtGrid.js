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
                    art={art.art ? art.art : art}
                    key={art.id}
                    location={art.stringLocation}
                    onSelectArt={props.onSelectArt}
                >
                </ArtBox>
            </Link>
        )
    });

    const column1 = artBoxes.filter( (artBox, i) => i%3 === 0);
    const column2 = artBoxes.filter( (artBox, i) => i%3 === 1);
    const column3 = artBoxes.filter( (artBox, i) => i%3 === 2);

    return (
        <div className="art-grid">
            <div className = "column-1">{column1}</div>
            <div className = "column-2">{column2}</div>
            <div className = "column-3">{column3}</div>
        </div>
    )
}
export default ArtGrid;
