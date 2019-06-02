import React from 'react';
import ArtGrid from './ArtGrid';
import Filter from './Filter';
import Sort from './Sort';

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