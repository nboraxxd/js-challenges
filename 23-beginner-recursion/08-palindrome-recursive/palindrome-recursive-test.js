const { palindrome } = require('./palindrome-recursive')

test('Test case #1', () => {
  expect(palindrome('pop')).toBe(true)
})

test('Test case #2', () => {
  expect(palindrome('kayak')).toBe(true)
})

test('Test case #3', () => {
  expect(palindrome('pops')).toBe(false)
})

test('Test case #4', () => {
  expect(palindrome('boot')).toBe(false)
})

test('Test case #5', () => {
  expect(palindrome('rotator')).toBe(true)
})

test('Test case #6', () => {
  expect(palindrome('abcbca')).toBe(false)
})

test('Test case #7', () => {
  expect(palindrome('')).toBe(true)
})
