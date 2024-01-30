/**
 * Returns a new array with duplicates removed.
 * @param {any[]} arr - The array to remove duplicates from.
 * @returns {any[]} - The new array with duplicates removed.
 */
function removeDuplicates(arr) {
  return arr.filter((value, index, array) => array.indexOf(value) === index)
}

module.exports = removeDuplicates
