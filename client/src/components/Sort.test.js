import React from 'react';
import Sort from './Sort';
import { shallow, mount } from 'enzyme';

describe('Sort', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<Sort />));

    it('should render <h3>', () => {
        const h3Count = wrapper.find('h3').length;
        expect(h3Count).toEqual(1);
    });

    it('should render <p>', () => {
        const pCount = wrapper.find('p').length;
        expect(pCount).toEqual(2);
    });
});