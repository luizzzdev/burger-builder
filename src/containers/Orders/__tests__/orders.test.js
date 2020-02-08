import { OrdersService } from '../../../services/orders';
import { Orders } from '../Orders';
import React from 'react';
import { Order } from '../../../components/Order/Order';
import { mount } from 'enzyme';
import { act } from '@testing-library/react';
import { orderResponseParsed } from '../../../services/__unit__/orderApiResponse.mock';

jest.mock('../../../services/orders');

describe('Orders', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = null;
  });

  it('should fetch the orders when rendered', async () => {
    OrdersService.get.mockImplementationOnce(() => orderResponseParsed);

    wrapper = mount(<Orders />);

    await act(async () => {
      await Promise.resolve(wrapper);
      wrapper.update();
    });

    expect(wrapper.find(Order)).toHaveLength(3);
  });
});
