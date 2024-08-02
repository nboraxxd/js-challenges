const sortedSquaredArray = require('./sorted-squared-array')

const competitions = [
  ['HTML', 'C#'],
  ['C#', 'Python'],
  ['Python', 'HTML'],
]

const results = [0, 0, 1]

console.log(sortedSquaredArray(competitions, results)) // 'Python'
