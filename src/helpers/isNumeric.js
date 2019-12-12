/**
 * @param possibleNumber
 * @returns {boolean}
 */
export default possibleNumber => {
  return typeof possibleNumber === 'number' || !isNaN(+possibleNumber);
};
