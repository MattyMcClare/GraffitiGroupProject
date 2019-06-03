import React from 'react';
import ArtInfoWithName from './ArtInfoWithName';
import { shallow } from 'enzyme';
import Artist from './Artist';

describe('ArtInfoWithName', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<ArtInfoWithName />));

    // it('should render <div>', () => {
    //     const divCount = wrapper.find('div').length;
    //     expect(divCount).toEqual(1);
    // });

    // it('should render Artist', () => {
    //     const artist = wrapper.containsMatchingElement(<Artist />);
    //     expect(artist).toEqual(true);
    // });

    it('should render <p>', () => {
        const pCount = wrapper.find('p').length;
        expect(pCount).toEqual(1);
    })
});