/**
 * Returns true if all characters in a string are unique.
 * @param {string} str - The string to check.
 * @returns {boolean} - Whether all characters in the string are unique.
 */
function areAllCharactersUnique(str) {
  const charCount = {}

  for (let i = 0; i < str.length; i++) {
    const char = str[i]

    if (charCount[char]) return false

    charCount[char] = true
  }

  return true
}

// function areAllCharactersUnique(str) {
//   if (str.length === 0) return true

//   const charSet = new Set()

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i]
//     if (charSet.has(char)) {
//       return false
//     }

//     charSet.add(char)
//   }

//   return true
// }

// function areAllCharactersUnique(str) {
//   if (str.length === 0) return true

//   const uniqueElements = new Set(str)
//   if (uniqueElements.size === str.length) return true

//   return false
// }

module.exports = areAllCharactersUnique
