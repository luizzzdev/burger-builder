import { mount, shallow } from 'enzyme';
import { Burger } from '../Burger';
import React from 'react';
import { Ingredient } from '../Ingredients/Ingredient';

describe('Burger', () => {
  let wrapper;

  it('renders the correct amount of ingredients', () => {
    const ingredients = {
      salad: 2,
      meat: 1,
      bacon: 0,
      cheese: 3,
    };

    wrapper = shallow(<Burger ingredients={ingredients} />);
    expect(wrapper.find(Ingredient).length).toBe(8);
  });

  it('should not break without ingredients', () => {
    wrapper = shallow(<Burger />);
    expect(wrapper).toBeTruthy();
  });

  it('renders by default bread top and bread bottom', () => {
    const ingredients = {
      salad: 0,
      meat: 0,
      bacon: 0,
      cheese: 0,
    };

    wrapper = shallow(<Burger ingredients={ingredients} />);
    expect(wrapper.find(Ingredient).length).toBe(2);
  });
});
