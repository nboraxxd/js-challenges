/**
 * Returns the missing number in an array of unique numbers from 1 to n (inclusive).
 * @param {number[]} arr - The array of numbers.
 * @returns {number} - The missing number.
 */
function findMissingNumber(arr) {
  if (!Array.isArray(arr) || !arr) return undefined

  if (arr.length === 0) return 1

  const uniqueElements = new Set(arr)
  if (uniqueElements.size !== arr.length) return undefined

  const n = arr.length + 1
  const expectedSum = (n * (n + 1)) / 2

  const actualSum = arr.reduce((sum, num) => sum + num, 0)

  return expectedSum - actualSum || undefined
}

module.exports = findMissingNumber
