/**
 * Returns the missing letter in an array of consecutive letters.
 * @param {string[]} arr - An array of consecutive letters.
 * @returns {string | []} - The missing letter.
 */
function findMissingLetter(arr) {
  const start = arr[0].charCodeAt()

  for (i = 0; i < arr.length; i++) {
    const current = arr[i].charCodeAt()

    if (current !== start + i) {
      return String.fromCharCode(start + i)
    }
  }

  return ''
}

// function findMissingLetter(arr) {
//   let start = arr[0].charCodeAt()

//   for (i = 0; i < arr.length; i++) {
//     const current = arr[i].charCodeAt()

//     if (current - start > 1) {
//       return String.fromCharCode(start + 1)
//     }

//     start = current
//   }

//   return ''
// }

// function findMissingLetter(arr) {
//   const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
//   const startIndex = alphabet.indexOf(arr[0])

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== alphabet[startIndex + i]) {
//       return alphabet[startIndex + i]
//     }
//   }

//   return ''
// }

// function findMissingLetter(arr) {
//   if (!arr.every((e) => /[a-zA-Z]/.test(e))) return []

//   const firstElementUnicode = arr[0].charCodeAt()
//   const lastElementUnicode = arr[arr.length - 1].charCodeAt()

//   const expectedSum = ((firstElementUnicode + lastElementUnicode) * (lastElementUnicode - firstElementUnicode + 1)) / 2

//   const actualSum = arr.reduce((sum, e) => sum + e.charCodeAt(), 0)

//   return String.fromCharCode(expectedSum - actualSum)
// }

module.exports = findMissingLetter
