import { CheckoutSummary } from '../CheckoutSummary';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { Burger } from '../../../Burger/Burger';
import { click } from '../../../../helpers/testHelpers';

describe('CheckoutSummary', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = null;
  });

  const ingredients = {
    salad: 3,
    meat: 2,
    cheese: 1,
    bacon: 4,
  };

  it('should pass the ingredients to Burger component', () => {
    wrapper = shallow(<CheckoutSummary ingredients={ingredients} />);

    const burgerProps = wrapper.find(Burger).props();
    expect(burgerProps.ingredients).toMatchObject({ ...ingredients });
  });

  it('should call the cancel checkout', () => {
    const cb = jest.fn();

    wrapper = mount(
      <CheckoutSummary onCheckoutCanceled={cb} ingredients={ingredients} />
    );
    click(wrapper.find('.Button.Danger'));
    expect(cb).toHaveBeenCalled();
    expect(cb.mock.calls.length).toBe(1);
  });

  it('should call the continue checkout', () => {
    const cb = jest.fn();

    wrapper = mount(
      <CheckoutSummary onCheckoutContinued={cb} ingredients={ingredients} />
    );
    click(wrapper.find('.Button.Success'));
    expect(cb).toHaveBeenCalled();
    expect(cb.mock.calls.length).toBe(1);
  });
});
