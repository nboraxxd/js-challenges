// solution 1
// time complexity: O(n)
// space complexity: O(n)
const palindrome = (s, start = 0, end = s.length - 1) => {
  if (start >= end && s[start] === s[end]) {
    return true
  } else if (start >= end && s[start] !== s[end]) {
    return false
  }

  if (s[start] === s[end]) {
    return palindrome(s, (start += 1), (end -= 1))
  } else {
    return false
  }
}

// solution 2
// time complexity: O(n^2)
// space complexity: O(n)
/**
 * @param {string} s - string to check if it is a palindrome
 *
 * @returns {boolean} - true if the string is a palindrome, false otherwise
 */
// const palindrome = (s) => {
//   if (s.length === 0 || s.length === 1) return true

//   if (s[0] === s.at(-1)) {
//     return palindrome(s.slice(1, -1))
//   } else {
//     return false
//   }
// }

module.exports = {
  palindrome,
}
