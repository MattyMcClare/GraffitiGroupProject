import React from 'react';
import ArtInfoNoName from './ArtInfoNoName';
import { shallow } from 'enzyme';

describe('ArtInfoNoName', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<ArtInfoNoName />));

    it('should render <div>', () => {
        const divCount = wrapper.find('div').length;
        expect(divCount).toEqual(1);
    });

    it('should render <p>', () => {
        const pCount = wrapper.find('p').length;
        expect(pCount).toEqual(2);
    });
});