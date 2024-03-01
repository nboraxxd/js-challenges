/**
 * Returns an array of numbers from 1 to the number passed in.
 * @param {number} num - The number to loop up to.
 * @returns {any[]} - The array of numbers.
 */
function fizzBuzzArray(number) {
  if (number < 1) return []

  const array = []

  for (let i = 1; i <= number; i++) {
    // if (i % 3 === 0 && i % 5 === 0) {
    //   array.push('FizzBuzz')
    // } else if (i % 3 === 0) {
    //   array.push('Fizz')
    // } else if (i % 5 === 0) {
    //   array.push('Buzz')
    // } else {
    //   array.push(i)
    // }
    switch (true) {
      case i % 3 === 0 && i % 5 === 0:
        array.push('FizzBuzz')
        break;

      case i % 3 === 0:
        array.push('Fizz')
        break;
      
      case i % 5 === 0:
        array.push('Buzz')
        break;

      default:
        array.push(i)
    }
  }

  return array
}

module.exports = fizzBuzzArray
