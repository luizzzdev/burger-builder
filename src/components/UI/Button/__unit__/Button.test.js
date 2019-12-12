import React from 'react';
import { Button } from '../Button';
import { mount, shallow } from 'enzyme';

describe('Button', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = null;
  });

  it('call the callback when clicked', () => {
    const cb = jest.fn();
    wrapper = shallow(<Button clicked={cb} />);
    wrapper.find('button').simulate('click');
    expect(cb).toHaveBeenCalled();
    expect(cb.mock.calls.length).toBe(1);
  });

  it('apply colors variations', () => {
    const variations = ['danger', 'success', 'primary'];

    variations.forEach(variation => {
      const props = { [variation]: true };
      wrapper = mount(<Button {...props} />);
      const regex = new RegExp(variation, 'i');
      expect(wrapper.find('button').hasClass(regex)).toBe(true);
    });
  });
});
