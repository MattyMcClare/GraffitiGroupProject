import React, { Component } from 'react';
import ArtGrid from './ArtGrid';
import Filter from './filters/Filter';
import Sort from './sorts/Sort';

class AllArtView extends Component {
    constructor(props) {
        super(props);
        this.locationNotFound = this.locationNotFound.bind(this);
    }

    locationNotFound() {

    }

    render() {
        return (
            <div>
                <Filter displayLocationNotFound={this.locationNotFound} />
                <Sort />
                <ArtGrid />
            </div>
        )
    }
}

export default AllArtView;
