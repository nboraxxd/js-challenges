/**
 * Returns the number of occurrences of a character in a string.
 * @param {string} str - The string to search.
 * @param {string} char - The character to search for.
 * @returns {number} - The number of occurrences of the character in the string.
 */
function countOccurrences(str, char) {
  let count = 0

  str.split('').forEach((item) => {
    if (item === char) {
      count += 1
    }
  })

  return count
}

// function countOccurrences(str, char) {
//   let count = 0

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count += 1
//     }
//   }

//   return count
// }

module.exports = countOccurrences
