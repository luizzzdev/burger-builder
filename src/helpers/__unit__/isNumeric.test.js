import {isBoolean, isNumeric} from '../index';

describe('isNumeric', () => {
  it('returns true when a text number is pass', () => {
    expect(isNumeric('1')).toBe(true);
  });

  it('returns true when a regular number is pass', () => {
    expect(isNumeric(1)).toBe(true);
  });

  it('returns false when a text is pass', () => {
    expect(isNumeric('hello')).toBe(false);
  });

  it('returns when another data type is pass', () => {
    expect(isBoolean([])).toBe(false);
    expect(isBoolean({})).toBe(false);
    expect(isBoolean(() => {})).toBe(false);
  });
});
