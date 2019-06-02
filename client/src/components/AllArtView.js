import React, { Component } from 'react';
import ArtGrid from './ArtGrid';
import Filter from './Filter';
import Sort from './Sort';

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