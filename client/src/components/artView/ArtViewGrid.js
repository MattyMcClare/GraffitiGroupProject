import React from 'react';
import { Link } from 'react-router-dom';
import ArtBox from '../ArtBox'

const ArtViewGrid = (props) => {

    const artBoxes = props.worksByArtist.map(art => {
        return (
            <Link
                key={art.id}
                onClick={props.onOpenModal}
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
        <div className='art-view-grid'>
            {artBoxes}
        </div>
    )
};

export default ArtViewGrid;