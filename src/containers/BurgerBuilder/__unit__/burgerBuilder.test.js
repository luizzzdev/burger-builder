import { BurgerBuilder, INGREDIENT_PRICES } from '../BurgerBuilder';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { BuildControls } from '../../../components/Burger/BuildControls/BuildControls';
import { INGREDIENTS_TYPES } from '../../../components/Burger/Ingredients/constants';
import { OrderSummary } from '../../../components/Burger/OrderSummary/OrderSummary';
import { Spinner } from '../../../components/UI/Spinner/Spinner';
import { MemoryRouter } from 'react-router-dom';
import transformObjectIntoQueryParams from '../../../helpers/transformObjectIntoQueryParams';

describe('Burger Builder', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = null;
  });

  const defaultIngredients = {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  };

  const defaultPrice = 4;

  it('should not order if no ingredients were added', () => {
    wrapper = shallow(<BurgerBuilder />);
    expect(wrapper.find(BuildControls).prop('purchasable')).toBe(false);
    wrapper.instance().addIngredientHandler('salad');
    expect(wrapper.find(BuildControls).prop('purchasable')).toBe(true);
  });

  it('should update the price when an ingredient is added', () => {
    wrapper = shallow(<BurgerBuilder />);
    const oldPrice = wrapper.state('totalPrice');
    wrapper.instance().addIngredientHandler(INGREDIENTS_TYPES.SALAD);
    const newPrice = wrapper.state('totalPrice');
    expect(newPrice).toBe(oldPrice + INGREDIENT_PRICES.salad);
  });

  it('should update the price when an ingredient is removed', () => {
    wrapper = shallow(<BurgerBuilder />);
    const oldPrice = wrapper.state('totalPrice');
    wrapper.instance().addIngredientHandler(INGREDIENTS_TYPES.SALAD);
    wrapper.instance().removeIngredientHandler(INGREDIENTS_TYPES.SALAD);
    const newPrice = wrapper.state('totalPrice');
    expect(newPrice).toBe(oldPrice);
  });

  it('should show the spinner only if it is loading', () => {
    wrapper = shallow(<BurgerBuilder />);
    wrapper.instance().setState({ loading: true });
    expect(wrapper.exists(Spinner)).toBe(true);
    wrapper.instance().setState({ loading: false });
    expect(wrapper.exists(Spinner)).toBe(false);
  });

  it('should show the order summary only if it is not loading', () => {
    wrapper = shallow(<BurgerBuilder />);
    wrapper.instance().setState({ loading: true });
    expect(wrapper.exists(OrderSummary)).toBe(false);
    wrapper.instance().setState({ loading: false });
    expect(wrapper.exists(OrderSummary)).toBe(true);
  });

  it('should send to checkout when purchase is continued', () => {
    const history = {
      push: jest.fn(),
    };
    const wrapped = mount(
      <MemoryRouter>
        <BurgerBuilder history={history} />
      </MemoryRouter>
    );

    wrapper = wrapped.find(BurgerBuilder);
    wrapper.instance().purchaseContinueHandler();

    const expectedSearch = transformObjectIntoQueryParams({
      ...defaultIngredients,
      price: defaultPrice,
    });

    expect(history.push).toHaveBeenCalled();
    expect(history.push.mock.calls.length).toBe(1);
    expect(history.push).toHaveBeenCalledWith({
      pathname: '/checkout',
      search: expectedSearch,
    });
  });

  it('should update purchasing state when purchasing handler is called', () => {
    wrapper = shallow(<BurgerBuilder />);
    wrapper.instance().purchasingHandler();
    expect(wrapper.state('purchasing')).toBe(true);
    wrapper.instance().purchaseCancelHandler();
    expect(wrapper.state('purchasing')).toBe(false);
  });

  it('should not remove and ingredient if there is none', () => {
    wrapper = shallow(<BurgerBuilder />);
    wrapper.instance().removeIngredientHandler(INGREDIENTS_TYPES.SALAD);
    expect(wrapper.state('ingredients').salad).toBe(0);
    expect(wrapper.state('totalPrice')).toBe(4);
  });
});
