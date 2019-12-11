import { Api } from './api';

export const OrdersService = {
  get(params) {
    return Api.get('/orders.json', { params });
  },
  post(body) {
    return Api.post('/orders.json', body);
  },
};
