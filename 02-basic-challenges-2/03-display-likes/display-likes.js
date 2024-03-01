/**
 * Returns a string of who likes the post.
 * @param {string[]} names - The names of the people who like the post.
 * @returns {string} - A string of who likes the post.
 */
function displayLikes(names) {
  if (!Array.isArray(names)) {
    return 'please provide an array of names'
  }

  switch (true) {
    case names.length === 1:
      return `${names[0]} likes this`

    case names.length === 2:
      return `${names[0]} and ${names[1]} like this`

    case names.length === 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`

    case names.length > 3:
      const [name1, name2, ...rest] = names
      return `${name1}, ${name2} and ${rest.length} others like this`

    default:
      return 'no one likes this'
  }
}

// function displayLikes(names) {
//   if (!Array.isArray(names)) {
//     return 'please provide an array of names'
//   }

//   if (names.length === 0) {
//     return 'no one likes this'
//   }

//   if (names.length === 1) {
//     return `${names[0]} likes this`
//   }

//   if (names.length === 2) {
//     return `${names[0]} and ${names[1]} like this`
//   }

//   if (names.length === 3) {
//     return `${names[0]}, ${names[1]} and ${names[2]} like this`
//   }

//   if (names.length > 3) {
//     const [name1, name2,...rest] = names
//     return `${name1}, ${name2} and ${rest.length} others like this`
//   }
// }

module.exports = displayLikes
