// solution 1 (time complexity: O(n^2), space complexity: O(n))
// /**
//  *
//  * @param {string[]} strings
//  * @returns {number}
//  */
// const sumOfLengths = (strings) => {
//   if (strings.length === 0) return 0

//   return strings[0].length + sumOfLengths(strings.slice(1))
// }

// solution 2:
//  time complexity: O(n)
//  space complexity: O(n)
/**
 *
 * @param {string[]} strings
 * @returns {number}
 */
const sumOfLengths = (strings) => {
  if (strings.length === 0) return 0

  return strings.pop().length + sumOfLengths(strings)
}

module.exports = {
  sumOfLengths,
}
