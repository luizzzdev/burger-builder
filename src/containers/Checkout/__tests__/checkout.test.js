import { Checkout } from '../Checkout';
import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Route, Router } from 'react-router-dom';
import { OrdersService } from '../../../services/orders';
import { BurgerContext } from '../../../context/burgerContext';

jest.mock('../../../services/orders');

const testContext = {
  ingredients: {
    salad: 1,
    bacon: 2,
    cheese: 3,
    meat: 4,
  },
  price: 10,
};

export const renderWithRouter = (
  Component,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) => {
  return render(
    <Router history={history}>
      <BurgerContext.Provider value={testContext}>
        <Route component={Component} />
      </BurgerContext.Provider>
    </Router>
  );
};

describe('Checkout', () => {
  it('renders the contact data only when the order gets confirmed', async () => {
    OrdersService.post.mockImplementationOnce(() => {});

    const ingredients = {
      salad: 1,
      bacon: 2,
      cheese: 3,
      meat: 4,
    };

    const history = createMemoryHistory();

    const container = renderWithRouter(Checkout, { history });

    const continueButton = container.getByText(/continue/i);
    continueButton.click();

    const nameInput = container.getByPlaceholderText(/name/i);
    fireEvent.input(nameInput, { target: { value: 'Luiz' } });

    const emailInput = container.getByPlaceholderText(/email/i);
    fireEvent.input(emailInput, { target: { value: 'email@email.com' } });

    const streetInput = container.getByPlaceholderText(/street/i);
    fireEvent.input(streetInput, { target: { value: 'Main Street' } });

    const zipCodeInput = container.getByPlaceholderText(/zip code/i);
    fireEvent.input(zipCodeInput, { target: { value: '123456' } });

    const countryInput = container.getByPlaceholderText(/country/i);
    fireEvent.input(countryInput, { target: { value: 'Alaska' } });

    const orderButton = container.getByText(/order/i);
    orderButton.click();

    await wait(() => [
      expect(OrdersService.post).toHaveBeenCalledWith({
        ingredients,
        price: 10,
        deliveryMethod: 'fast',
        customer: {
          name: 'Luiz',
          email: 'email@email.com',
          address: {
            street: 'Main Street',
            zipCode: '123456',
            country: 'Alaska',
          },
        },
      }),
    ]);
  });
});
