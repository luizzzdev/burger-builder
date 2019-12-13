import { isBoolean, isNumeric, parseBoolean } from './index';

/**
 *
 * @param {string} value
 * @returns
 */
export default value => {
  if (isNumeric(value)) return +value;
  if (isBoolean(value)) return parseBoolean(value);
  return value;
};
