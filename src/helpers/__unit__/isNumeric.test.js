import {isBoolean, isNumeric} from '../index';

describe('isNumeric', () => {
  it('returns true when a text number is passed', () => {
    expect(isNumeric('1')).toBe(true);
  });

  it('returns true when a regular number is passed', () => {
    expect(isNumeric(1)).toBe(true);
  });

  it('returns false when a text is passed', () => {
    expect(isNumeric('hello')).toBe(false);
  });

  it('returns when another data type is passed', () => {
    expect(isBoolean([])).toBe(false);
    expect(isBoolean({})).toBe(false);
    expect(isBoolean(() => {})).toBe(false);
  });
});
