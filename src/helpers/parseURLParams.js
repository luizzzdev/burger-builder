import { parseStringToType } from './index';

/**
 * @param {string} search Something like q=burger&salad=true&pickles=2
 */
export default search => {
  const urlSearchParams = new URLSearchParams(search);
  const response = {};

  for (let param of urlSearchParams.entries()) {
    response[param[0]] = parseStringToType(param[1]);
  }

  return response;
};
