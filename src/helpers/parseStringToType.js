import { isBoolean, isNumeric, parseBoolean } from './index';

/**
 *
 * @param {string} value
 * @returns {boolean|number}
 */
export default value => {
  if (isNumeric(value)) return +value;
  if (isBoolean(value)) return parseBoolean(value);
};
