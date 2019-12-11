/**
 * @param {string} possibleNumber
 * @returns {boolean}
 */
export default possibleNumber => {
  return (
    typeof possibleNumber === 'number' || typeof +possibleNumber === 'number'
  );
};

