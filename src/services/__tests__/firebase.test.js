import { FirebaseService } from '../firebase';
import { orderApiResponse, orderResponseParsed } from './orderApiResponse.mock';

describe('Firebase Service', () => {
  it('parse properly the response', () => {
    const parsed = FirebaseService.parseResponse(orderApiResponse.data);
    expect(parsed).toEqual(orderResponseParsed);
  });
});
