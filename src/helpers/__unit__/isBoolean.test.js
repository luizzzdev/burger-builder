import { isBoolean } from '../index';

describe('isBoolean', () => {
  it('return true when pass a boolean', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
  });

  it('return true when pass a boolean as string', () => {
    expect(isBoolean('true')).toBe(true);
    expect(isBoolean('false')).toBe(true);
  });

  it('return false when pass another data type', () => {
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean(0)).toBe(false);
    expect(isBoolean([])).toBe(false);
    expect(isBoolean({})).toBe(false);
    expect(isBoolean(() => {})).toBe(false);
  });
});
