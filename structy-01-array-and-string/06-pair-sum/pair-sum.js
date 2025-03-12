/**
 * @param {number[]} numbers - array of numbers
 * @param {number} targetSum - target sum
 * @returns {number[]} - array containing two numbers of indices whose elements sum to targetSum
 */
const pairSum = (numbers, targetSum) => {
  const previous = {}

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]

    const complement = targetSum - number

    if (complement in previous) {
      return [i, previous[complement]]
    }

    previous[number] = i
  }
}

console.log(pairSum([6, 4, 2, 8], 12))

module.exports = {
  pairSum,
}
