import React from 'react';
import Filter from './Filter';
import { shallow, mount } from 'enzyme';

describe("Filter", () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<Filter />));

    it('should render a <h3>', () => {
        const h3Count = wrapper.find('h3').length;
        expect(h3Count).toEqual(1);
    });

    it('should render a <div', () => {
        const divCount = wrapper.find('div').length;
        expect(divCount).toEqual(1);
    });

    it('should render a <form', () => {
        const formCount = wrapper.find('form').length;
        expect(formCount).toEqual(1);
    });

    it('should render a <label', () => {
        const labelCount = wrapper.find('label').length;
        expect(labelCount).toEqual(3);
    });

    it('should render a select', () => {
        const selectCount = wrapper.find('select').length;
        expect(selectCount).toEqual(2);
    });

    it('should render an input', () => {
        const inputCount = wrapper.find('input').length;
        expect(inputCount).toEqual(2);
    })

});