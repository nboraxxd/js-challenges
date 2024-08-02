const isValidSubsequence = require('./validate-subsequence')

const array = [5, 1, 22, 25, 6, -1, 8, 10]
const sequence = [1, 6, -1, 10]

console.log(isValidSubsequence(array, sequence)) // true
