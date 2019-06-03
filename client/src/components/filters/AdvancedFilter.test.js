import React from 'react';
import AdvancedFilter from './AdvancedFilter';
import { shallow, mount } from 'enzyme';

describe("AdvancedFilter", () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<AdvancedFilter />));

  it('should have a <div>', () => {
    const divCount = wrapper.find('div').length;
    expect(divCount).toEqual(1);
  })
});
