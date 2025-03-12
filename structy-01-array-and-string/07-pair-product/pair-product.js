/**
 * @param {number[]} numbers - array of numbers
 * @param {*} targetProduct - target product
 * @returns {number[]} - array containing two numbers of indices whose elements product to targetProduct
 */
const pairProduct = (numbers, targetProduct) => {
  const previous = {}

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    const complement = targetProduct / number

    if (complement in previous) {
      return [previous[complement], i]
    }

    previous[number] = i
  }
}

module.exports = {
  pairProduct,
}
