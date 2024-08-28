/**
 * Returns whether the string is a valid email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Whether the email address is valid.
 */
function validateEmail(email) {
  if (email.indexOf('@') < 0) return false

  const [localPart, domain] = email.split('@')

  if (localPart.length === 0 || domain.length < 3) return false

  const domainExtension = domain.split('.')

  if (domainExtension.length < 2 || domainExtension[1].length < 2) return false

  return true
}

// function validateEmail(email) {
//   return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
// }

module.exports = validateEmail
