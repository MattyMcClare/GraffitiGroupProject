import React from 'react';
import Sort from './Sort';
import { shallow, mount } from 'enzyme';

describe('Sort', () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<Sort />));

    it('should render <h4>', () => {
        const h4Count = wrapper.find('h4').length;
        expect(h4Count).toEqual(1);
    });

    it('should render <div>', () => {
        const divCount = wrapper.find('div').length;
        expect(divCount).toEqual(1)
    })
});