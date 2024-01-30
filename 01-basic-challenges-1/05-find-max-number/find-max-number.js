/**
 * Returns the largest number in an array.
 * @param {number[]} arr - The array of numbers.
 * @returns {number} - The largest number in the array.
 */
function findMaxNumber(arr) {
  return Math.max(...arr)
}

// function findMaxNumber(arr) {
//   let max = arr[0]

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i]
//     }
//   }

//   return max
// }

// function findMaxNumber(arr) {
//   let largestNumber = -Infinity

//   arr.forEach(num => {
//     if (num > largestNumber) {
//       largestNumber = num
//     }
//   })

//   return largestNumber
// }

module.exports = findMaxNumber
