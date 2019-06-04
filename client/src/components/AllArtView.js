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
            <Sort
                changeSortMethod={props.changeSortMethod}
                sortMethod={props.sortMethod}
            />
            <ArtGrid
                allArt={props.allArt} />
        </div>
    )

}

export default AllArtView;
