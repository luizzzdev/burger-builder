import { OrderSummary } from '../OrderSummary';
import React from 'react';
import { mount } from 'enzyme';
import { click } from '../../../../helpers/testHelpers';

describe('Order Summary', () => {
  let wrapper;

  const ingredients = {
    salad: 3,
    meat: 2,
    cheese: 1,
    bacon: 4,
  };

  const getIngredientCountInDOM = (wrapper, ingredient) => {
    return +wrapper
      .find(`.${ingredient} span`)
      .at(1)
      .text();
  };

  it('renders properly', () => {
    wrapper = mount(<OrderSummary ingredients={ingredients} />);
    expect(wrapper).toBeTruthy();
  });

  it('calls purchase canceled when cancel button is clicked', () => {
    const callback = jest.fn();
    wrapper = mount(
      <OrderSummary ingredients={ingredients} purchaseCanceled={callback} />
    );
    click(wrapper.find('.Button.Danger'));
    expect(callback).toHaveBeenCalled();
    expect(callback.mock.calls.length).toBe(1);
  });

  it('calls purchase continued when continue button is clicked', () => {
    const callback = jest.fn();
    wrapper = mount(
      <OrderSummary ingredients={ingredients} purchaseContinued={callback} />
    );
    click(wrapper.find('.Button.Success'));
    expect(callback).toHaveBeenCalled();
    expect(callback.mock.calls.length).toBe(1);
  });

  it('renders the price properly', () => {
    wrapper = mount(<OrderSummary ingredients={ingredients} price={10} />);
    const price = wrapper.find('.Price').text();
    expect(price).toEqual('10');
  });

  it('renders the ingredient count properly', () => {
    wrapper = mount(<OrderSummary ingredients={ingredients} />);

    Object.keys(ingredients).forEach(ingredient => {
      expect(getIngredientCountInDOM(wrapper, ingredient)).toBe(
        ingredients[ingredient]
      );
    });
  });
});
