import { parseStringToType } from '../index';

describe('parseStringToType', () => {
  it('returns a number when a number is passed', () => {
    expect(parseStringToType('321321')).toBe(321321);
  });

  it('returns a boolean when a boolean is passed', () => {
    expect(parseStringToType('false')).toBe(false);
    expect(parseStringToType('true')).toBe(true);
  });

  it('returns the string if is not a boolean or number', () => {
    expect(parseStringToType('hello')).toBe('hello');
  });
});
