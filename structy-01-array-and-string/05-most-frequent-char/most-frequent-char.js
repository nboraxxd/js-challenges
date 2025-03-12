/**
 * @param {string} s - a string
 * @returns {string} The most frequent character in the string.
 * If there are multiple characters that are the most frequent, return the character that appears first in the string.
 */
const mostFrequentChar2 = (s) => {
  const countChar = {}
  let mostFrequent = 1

  for (let char of s) {
    countChar[char] = (countChar[char] ?? 0) + 1

    if (countChar[char] > mostFrequent) mostFrequent = countChar[char]
  }

  for (let char of s) {
    if (countChar[char] === mostFrequent) {
      return char
    }
  }
}

const mostFrequentChar = (s) => {
  const countChar = {}
  const mostCountChar = {}
  let max = 1

  for (const char of s) {
    countChar[char] = (countChar[char] ?? 0) + 1

    if (countChar[char] > max) max = countChar[char]
  }

  for (const char in countChar) {
    if (countChar[char] === max) {
      mostCountChar[char] = max
    }
  }

  if (Object.keys(mostCountChar).length === 1) {
    return Object.keys(mostCountChar)[0]
  }

  for (const char of s) {
    if (char in mostCountChar) return char
  }
}

module.exports = {
  mostFrequentChar: mostFrequentChar2,
}
