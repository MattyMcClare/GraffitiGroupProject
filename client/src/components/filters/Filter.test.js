import React from 'react';
import Filter from './Filter';
import LocationFilter from './LocationFilter'
import AdvancedFilter from './AdvancedFilter'
import { shallow } from 'enzyme';

describe("Filter", () => {
    let wrapper;

    beforeEach(() => wrapper = shallow(<Filter />));

    it('should render a <form>', () => {
        const formCount = wrapper.find('form').length;
        expect(formCount).toEqual(1);
    });

    it('should render a LocationFilter', () => {
        const locationFilter = wrapper.containsMatchingElement(<LocationFilter />);
        expect(locationFilter).toEqual(true);
    });

    it('should render an input', () => {
        const inputCount = wrapper.find('input').length;
        expect(inputCount).toEqual(1);
    })

    it('should render AdvancedFilter', () => {
        const advancedFilter = wrapper.containsMatchingElement(<AdvancedFilter />);
        expect(advancedFilter).toEqual(true);
    })

    // it('should render a <h3>', () => {
    //     const h3Count = wrapper.find('h3').length;
    //     expect(h3Count).toEqual(1);
    // });

});