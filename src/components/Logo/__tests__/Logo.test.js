import { shallow } from 'enzyme';
import React from 'react';
import { Logo } from '../Logo';

describe('Logo', () => {
  it('renders properly', () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper.hasClass('Logo')).toBe(true);
  });
});
