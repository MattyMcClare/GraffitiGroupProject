import React, { Component } from 'react';
import ArtGrid from '../components/ArtGrid';
import Filter from '../components/Filter';
import Sort from '../components/Sort';

class AllArtView extends Component {
    render() {
        return (
            <>
                <Filter />
                <Sort />
                <ArtGrid />
            </>
        )
    }
}

export default AllArtView;