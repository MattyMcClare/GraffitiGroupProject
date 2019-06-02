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
        const buttonCount = wrapper.find('button').length;
        expect(buttonCount).toEqual(2);
    });
    it('should render <div>', () => {
        const divCount = wrapper.find('div').length;
        expect(divCount).toEqual(1)
    })
});