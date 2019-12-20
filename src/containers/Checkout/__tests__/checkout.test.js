import { Checkout } from '../Checkout';
import { fireEvent, wait } from '@testing-library/react';
import { OrdersService } from '../../../services/orders';
import { renderWithRouter } from '../../../helpers/testHelpers';
import React from 'react';
import { BurgerContext } from '../../../context/burgerContext';

jest.mock('../../../services/orders');

describe('Checkout', () => {
  it('renders the contact data only when the order gets confirmed', async () => {
    OrdersService.post.mockImplementationOnce(() => {});

    const burgerContext = {
      ingredients: {
        salad: 1,
        bacon: 2,
        cheese: 3,
        meat: 4,
      },
      price: 10,
    };

    const container = renderWithRouter(props => (
      <BurgerContext.Provider value={burgerContext}>
        <Checkout {...props} />
      </BurgerContext.Provider>
    ));

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
        ingredients: burgerContext.ingredients,
        price: burgerContext.price,
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
