import React from 'react';
import LocationFilter from './LocationFilter';
import GeolocationButton from './geolocationbutton/GeolocationButton'
import { shallow } from 'enzyme';

describe('LocationFilter', () => {

    let wrapper;

    beforeEach(() => wrapper = shallow(<LocationFilter />))

    it('should render a select', () => {
        const selectCount = wrapper.find('select').length;
        expect(selectCount).toEqual(1);
    });

    it('should render GeolocationButton', () => {
        const geolocationButton = wrapper.containsMatchingElement(<GeolocationButton />);
        expect(geolocationButton).toEqual(true);
    });
});

export default LocationFilter
