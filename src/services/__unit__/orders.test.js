import { OrdersService } from '../orders';
import { Api } from '../api';
import { orderApiResponse, orderResponseParsed } from './orderApiResponse.mock';

jest.mock('../api');

describe('Order Service', () => {
  it('should retrieve the orders successfully', async () => {
    Api.get.mockImplementationOnce(() => orderApiResponse);
    const response = await OrdersService.get();
    expect(response).toEqual(orderResponseParsed);
  });

  it('save a new order successfully', async () => {
    Api.post.mockImplementationOnce(() => ({ name: '-Lvwpf_AfOco2mlnwNJg' }));

    const response = await OrdersService.post({ ingredients: {} });
    expect(response).toHaveProperty('name');
  });
});
