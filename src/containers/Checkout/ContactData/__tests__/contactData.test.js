import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import { ContactData } from '../ContactData';
import { OrdersService } from '../../../../services/orders';
import { wait } from '@testing-library/dom';

jest.mock('../../../../services/orders');

describe('Contact Data', () => {
  beforeEach(cleanup);

  it('send the right data', async () => {
    OrdersService.post.mockImplementationOnce(() => {});

    const history = {
      push: jest.fn(),
    };

    const ingredients = {
      salad: 1,
      bacon: 2,
      cheese: 3,
      meat: 4,
    };

    const container = render(
      <ContactData history={history} price={10} ingredients={ingredients} />
    );

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
      expect(history.push).toHaveBeenCalledTimes(1),
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
