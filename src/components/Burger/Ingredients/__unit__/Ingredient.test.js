import React from 'react';
import { Ingredient } from '../Ingredient';
import { mount } from 'enzyme';
import { INGREDIENTS_TYPES } from '../constants';

describe('Ingredient', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = null;
  });

  const getClass = ingredientType => {
    return `.${ingredientType[0].toUpperCase() + ingredientType.substring(1)}`;
  };

  it('renders the ingredient type properly', () => {
    Object.values(INGREDIENTS_TYPES).forEach(ingredientType => {
      wrapper = mount(<Ingredient type={ingredientType} />);
      expect(wrapper.exists(getClass(ingredientType))).toBe(true);
    });
  });
});
