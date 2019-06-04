import React from 'react';
import ArtGrid from './ArtGrid';
import Filter from './filters/Filter';
import Sort from './sorts/Sort';
import './AllArtView.css'

const SearchView = (props) => {

    const locationNotFound = () => {

    }

    return (
        <div>
            <Filter
              displayLocationNotFound = {locationNotFound()}
              setLocation = {props.setLocation}
              setDefaultLocation = {props.setDefaultLocation}
              setDistance = {props.setDistance}
              handleSearchSubmit = {props.handleSearchSubmit}
            />
            <Sort
                changeSortMethod={props.changeSortMethod}
                sortMethod={props.sortMethod}
            />
            <ArtGrid allArt={props.allArt} />
        </div>
    )

}

export default SearchView;
