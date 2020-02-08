import { mount, shallow } from 'enzyme';
import { NavigationItem } from '../NavigationItem';
import React from 'react';
import { NavLink } from 'react-router-dom';

describe('NavigationItem', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = null;
  });

  it('should render children', () => {
    const children = <p className="children">hello</p>;
    wrapper = shallow(<NavigationItem link="/">{children}</NavigationItem>);
    expect(wrapper.find('.children').text()).toEqual('hello');
  });

  it('should render a navlink', () => {
    wrapper = shallow(<NavigationItem link="/" />);
    expect(wrapper.exists(NavLink)).toBe(true);
  });

  it('should pass the link to the navlink', () => {
    const link = '/path';
    wrapper = shallow(<NavigationItem link={link} />);
    expect(wrapper.find(NavLink).prop('to')).toBe(link);
  });
});
