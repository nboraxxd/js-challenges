/**
 * Returns the reverse of a string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reverse of the string.
 */
function reverseString(str) {
  let result = ''

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]
  }

  return result
}

// function reverseString(str) {
//   return str.split('').reverse().join('')
// }

module.exports = reverseString
