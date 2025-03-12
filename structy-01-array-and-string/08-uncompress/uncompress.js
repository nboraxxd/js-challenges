/**
 *
 * @param {string} s - string containing compressed data
 * @returns {string} - string containing uncompressed data
 *
 * For example, given the string "2c3a1t", the function should return "ccaaat".
 */
const uncompress = (s) => {
  const result = []
  let i = 0
  let j = 0

  while (j < s.length) {
    if (isNaN(s[j]) === false) {
      j++
    } else {
      const num = +s.slice(i, j)
      for (let count = 0; count < num; count++) {
        result.push(s[j])
      }
      j++
      i = j
    }
  }

  return result.join('')
}

console.log(uncompress('2c3a1t')) // 'ccaaat'

module.exports = {
  uncompress,
}
