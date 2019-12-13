import { parseURLParams } from '../index';

describe('parseURLParams', () => {
  it('parse a URL params properly', () => {
    expect(parseURLParams('?salad=1&bacon=1&cheese=1&meat=1&price=7.9')).toEqual({
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1,
      price: 7.9,
    });
  });
});
