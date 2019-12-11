import { Api } from './api';

export const OrdersService = {
  async get(params) {
    const response = await Api.get('/orders.json', { params });

    return Object.keys(response.data).reduce((orders, orderId) => {
      const order = {
        ...response.data[orderId],
        id: orderId,
      };
      orders.push(order);
      return orders;
    }, []);
  },
  post(body) {
    return Api.post('/orders.json', body);
  },
};
