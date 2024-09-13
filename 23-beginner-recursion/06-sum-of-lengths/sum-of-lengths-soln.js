const sumOfLengths = (strings) => {
  if (strings.length === 0) return 0
  return strings.pop().length + sumOfLengths(strings)
}

// O(n) time and O(n) space

module.exports = {
  reverseString,
}
