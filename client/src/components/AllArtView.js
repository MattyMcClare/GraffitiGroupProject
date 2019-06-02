import React, { Component } from 'react';
import ArtGrid from './ArtGrid';
import Filter from './filters/Filter';
import Sort from './sorts/Sort';

class AllArtView extends Component {
    render() {
        return (
            <div>
                <Filter />
                <Sort />
                <ArtGrid />
            </div>
        )
    }
}

export default AllArtView;
