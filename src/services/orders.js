import { Api } from './api';
import { FirebaseService } from './firebase';

export const OrdersService = {
  async get(params) {
    const response = await Api.get('/orders.json', { params });
    return FirebaseService.parseResponse(response.data);
  },
  post(body) {
    return Api.post('/orders.json', body);
  },
};
