import React from 'react';
import { shallow } from 'enzyme';
import { Input } from '../Input';

describe('Input', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = null;
  });

  it('should render a input element by default', () => {
    wrapper = shallow(<Input />);
    expect(wrapper.find('input').name()).toBe('input');
  });

  it('should render a textarea', () => {
    wrapper = shallow(<Input inputtype="textarea" />);
    expect(wrapper.find('textarea').name()).toBe('textarea');
  });

  it('should render the label', () => {
    wrapper = shallow(<Input label="some label" />);
    expect(wrapper.find('.Label').text()).toBe('some label');
  });
});
