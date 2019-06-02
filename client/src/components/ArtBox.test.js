import React from 'react';
import ArtBox from './ArtBox';
import ArtInfoWithName from './ArtInfoWithName';
import { shallow } from 'enzyme';

describe('ArtInfoWithName', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<ArtBox />));

    it('should render <div>', () => {
        const divCount = wrapper.find('div').length;
        expect(divCount).toEqual(1);
    });

    it('should render <img>', () => {
        const imgCount = wrapper.find('img').length;
        expect(imgCount).toEqual(1);
    });

    it('should render ArtInfoWithName', () => {
        const artInfo = wrapper.containsMatchingElement(<ArtInfoWithName />);
        expect(artInfo).toEqual(true);
    })
});