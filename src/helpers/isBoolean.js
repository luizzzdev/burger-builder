/**
 *
 * @param possibleBoolean
 * @returns {boolean}
 */
export default possibleBoolean => {
  return (
    typeof possibleBoolean === 'boolean' ||
    possibleBoolean === 'true' ||
    possibleBoolean === 'false'
  );
};
