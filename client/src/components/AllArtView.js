import React from 'react';
import ArtGrid from './ArtGrid';
import Filter from './filters/Filter';
import Sort from './sorts/Sort';

const AllArtView = ({ allArt }) => {

    return (
        <div>
            <Filter />
            <Sort />
            <ArtGrid allArt={allArt} />
        </div>
    )

}

export default AllArtView;
