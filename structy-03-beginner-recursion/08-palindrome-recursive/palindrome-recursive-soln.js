const palindrome = (s, start = 0, end = s.length - 1) => {
  if (start === end) return true
  if (s.length === 0) return true

  if (s[start] !== s[end]) return false
  return palindrome(s, start + 1, end - 1)
}

//O(n) time and O(n) space

module.exports = {
  palindrome,
}
