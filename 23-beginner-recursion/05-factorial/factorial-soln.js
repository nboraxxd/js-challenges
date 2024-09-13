const factorial = (n) => {
  if (n === 0) return 1
  if (n === 1) return 1

  return n * factorial(n - 1)
}

// n = input number
// Time: O(n)
// Space: O(n)
