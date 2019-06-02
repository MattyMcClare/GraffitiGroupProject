import React from 'react';
import AllArtView from './AllArtView'
import { shallow, mount } from 'enzyme';

describe('AllArtView', () => {
    let wrapper;


    beforeEach(() => (
        wrapper = shallow(<AllArtView />)
    ));

    it('should have a div', () => {
        const divCount = wrapper.find('div').length;
        expect(divCount).toEqual(1);
    });
});