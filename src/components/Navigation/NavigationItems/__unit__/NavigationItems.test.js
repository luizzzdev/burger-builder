import { NavigationItem } from '../NavigationItem/NavigationItem';
import React from 'react';
import { shallow } from 'enzyme';
import { NavigationItems } from '../NavigationItems';

describe('NavigationItems', () => {
  let wrapper;

  it('should render the navigation items', () => {
    wrapper = shallow(<NavigationItems />);
    expect(wrapper.find(NavigationItem).length).toBe(3);
  });
});
