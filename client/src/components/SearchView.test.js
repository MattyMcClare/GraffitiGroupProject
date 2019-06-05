import React from 'react';
import AllArtView from './SearchView'
import { shallow } from 'enzyme';

describe('SearchView', () => {
    let wrapper;


    beforeEach(() => (
        wrapper = shallow(<AllArtView />)
    ));

    it('should have a div', () => {
        const divCount = wrapper.find('div').length;
        expect(divCount).toEqual(1);
    });
});
