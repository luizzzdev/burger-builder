/**
 * @param possibleBoolean
 * @returns {boolean}
 */
export default possibleBoolean => {
  if (possibleBoolean === 'true') return true;
  if (possibleBoolean === 'false') return false;
  return !!possibleBoolean;
};
