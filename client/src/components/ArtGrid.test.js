import React from 'react';
import ArtGrid from './ArtGrid';
import ArtBox from './ArtBox';
import { shallow, mount } from 'enzyme';

describe('ArtGrid', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<ArtGrid />));

    it('should render a <div>', () => {
        console.log(wrapper);

        const divCount = wrapper.find('div').length;
        expect(divCount).toEqual(1);
    });

    // it('should render a ArtBox', () => {
    //     const artBox = wrapper.containsMatchingElement(<ArtBox />);
    //     expect(artBox).toEqual(true);
    // });
});