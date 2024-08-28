/**
 * Returns the sum of the squares of the even numbers in the array.
 * @param {number[]} numbers - The array of numbers.
 * @returns {number} - The sum of the squares of even numbers.
 */
function sumOfEvenSquares(numbers) {
  return numbers.reduce((acc, number) => (number % 2 === 0 ? acc + number ** 2 : acc), 0)
}

module.exports = sumOfEvenSquares
