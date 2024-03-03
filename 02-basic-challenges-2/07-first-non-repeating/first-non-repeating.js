/**
 * Returns the first non-repeating character in a string.
 * @param {string} str - The string to search.
 * @returns {string | null} - The first non-repeating character in the string or null if there are no non-repeating characters.
 */
function findFirstNonRepeatingCharacter(str) {
  const charCount = {}

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1
  }

  for (const char of str) {
    if (charCount[char] === 1) return char
  }

  return null
}

// function findFirstNonRepeatingCharacter(str) {
//   const charCount = {}

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i]

//     charCount[char] = charCount[char] ? ++charCount[char] : 1
//   }

//   for (const key in charCount) {
//     if (charCount[key] === 1) {
//       return key
//     }
//   }

//   return null
// }

// function findFirstNonRepeatingCharacter(str) {
//   const charIndexObject = {}

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i]

//     charIndexObject[char] = charIndexObject[char] ? [...charIndexObject[char], i] : [i]
//   }

//   for (const key in charIndexObject) {
//     if (charIndexObject[key].length === 1) {
//       return key
//     }
//   }

//   return null
// }

module.exports = findFirstNonRepeatingCharacter
