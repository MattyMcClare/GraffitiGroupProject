import React from 'react';
import ArtGrid from './ArtGrid';
import Filter from './filters/Filter';
import Sort from './sorts/Sort';

const AllArtView = (props) => {

    const locationNotFound = () => {

    }

    return (
        <div>
            <Filter displayLocationNotFound={locationNotFound()} />
            <Sort />
            <ArtGrid allArt={props.allArt} />
        </div>
    )

}

export default AllArtView;
