/**
 *
 * @param {string} s
 * @returns {string} the input string reversed
 */
const reverseString = (s) => {
  if (s.length === 0) return ''

  const strings = s.split('')
  return strings.pop() + reverseString(strings.join(''))
}

module.exports = {
  reverseString,
}
