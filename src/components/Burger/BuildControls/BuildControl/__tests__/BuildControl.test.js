import React from 'react';
import { BuildControl } from '../BuildControl';
import {mount, shallow} from 'enzyme';

describe('Build Control', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = null;
  });

  it('presents the label correctly', () => {
    const label = 'Cheese';
    wrapper = shallow(<BuildControl label={label} />);
    expect(wrapper.find('.Label').text()).toBe(label);
  });

  it('should call remove ingredient when less button is clicked', () => {
    const removeIngredient = jest.fn();
    wrapper = shallow(<BuildControl removeIngredient={removeIngredient} />);
    wrapper.find('.Less').simulate('click');
    expect(removeIngredient).toHaveBeenCalled();
    expect(removeIngredient.mock.calls.length).toBe(1);
  });

  it('should not call remove ingredient when is disabled and less button is clicked', () => {
    const removeIngredient = jest.fn();
    wrapper = mount(
      <BuildControl removeIngredient={removeIngredient} disabled />
    );
    wrapper.find('.Less').simulate('click');
    expect(removeIngredient).not.toHaveBeenCalled();
    expect(removeIngredient.mock.calls.length).toBe(0);
  });

  it('should call add ingredient when add button is clicked', () => {
    const addIngredient = jest.fn();
    wrapper = shallow(<BuildControl addIngredient={addIngredient} />);
    wrapper.find('.More').simulate('click');
    expect(addIngredient).toHaveBeenCalled();
    expect(addIngredient.mock.calls.length).toBe(1);
  });
});
