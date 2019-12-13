import { parseBoolean } from '../index';

describe('parseBoolean', () => {
  it('returns true when true as string is passed', () => {
    expect(parseBoolean('true')).toBe(true);
  });

  it('returns false when false as string is passed', () => {
    expect(parseBoolean('false')).toBe(false);
  });

  it('returns true when truthy data types are passed', () => {
    expect(parseBoolean([])).toBe(true);
    expect(parseBoolean({})).toBe(true);
    expect(parseBoolean(() => {})).toBe(true);
  });

  it('returns true when falsy data types are passed', () => {
    expect(parseBoolean('')).toBe(false);
    expect(parseBoolean(0)).toBe(false);
    expect(parseBoolean(null)).toBe(false);
    expect(parseBoolean(undefined)).toBe(false);
    expect(parseBoolean(NaN)).toBe(false);
  });
});
