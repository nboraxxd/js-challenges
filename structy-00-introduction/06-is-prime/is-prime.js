/**
 * @param {*} n a number
 * @returns {boolean} whether or not the number is prime
 */
const isPrime = (n) => {
  if (n === 1) return false

  let i = 2
  while (i < n) {
    if (n % i === 0) return false
    i++
  }

  return true
}

const isPrime2 = (n) => {
  if (n === 1) return false

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false
  }

  return true
}

module.exports = {
  isPrime: isPrime2,
}
