/**
 * Returns the number of vowels in a string.
 * @param {string} str - The string to search.
 * @returns {number} - The number of vowels in the string.
 */
function countVowels(str) {
  let vowelTotal = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[aeiou]/gi)) {
      vowelTotal += 1
    }
  }

  return vowelTotal
}

module.exports = countVowels
