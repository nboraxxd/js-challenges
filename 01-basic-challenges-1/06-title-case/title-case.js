/**
 * Returns a string with the first letter of each word capitalized.
 * @param {string} str - The string to capitalize.
 * @returns {string} - The string with the first letter of each word capitalized.
 */
function titleCase(str) {
  return str
    .split(' ')
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1).toLowerCase()
    })
    .join(' ')
}

module.exports = titleCase
