/**
 * Returns true if the string is a palindrome.
 * @param {string} str - The string to check.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
// function isPalindrome(str) {
//   const alphaNumericStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
//   let reverseStr = ''

//   for (let i = alphaNumericStr.length - 1; i >= 0; i--) {
//     reverseStr += alphaNumericStr[i]
//   }

//   return alphaNumericStr === reverseStr
// }

function isPalindrome(str) {
  const alphaNumericStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  const reverseStr = alphaNumericStr.split('').reverse().join('')

  return alphaNumericStr === reverseStr
}

module.exports = isPalindrome;
