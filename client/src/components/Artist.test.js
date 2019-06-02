import React from 'react';
import Artist from './Artist';
import { shallow } from 'enzyme';

describe('Artist', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<Artist />));

    it('should render <div>', () => {
        const divCount = wrapper.find('div').length;
        expect(divCount).toEqual(1);
    });

    it('should render <img>', () => {
        const imgCount = wrapper.find('img').length;
        expect(imgCount).toEqual(1);
    });

    it('should render <p>', () => {
        const pCount = wrapper.find('p').length;
        expect(pCount).toEqual(1);
    });
});