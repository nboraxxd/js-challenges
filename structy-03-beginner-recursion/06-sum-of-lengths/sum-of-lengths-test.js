const { sumOfLengths } = require('./sum-of-lengths')

test('Test case #1', () => {
  expect(sumOfLengths(['goat', 'cat', 'purple'])).toBe(13)
})

test('Test case #2', () => {
  expect(sumOfLengths(['bike', 'at', 'pencils', 'phone'])).toBe(18)
})

test('Test case #3', () => {
  expect(sumOfLengths([])).toBe(0)
})

test('Test case #4', () => {
  expect(sumOfLengths(['', ' ', '  ', '   ', '    ', '     '])).toBe(15)
})

test('Test case #5', () => {
  expect(sumOfLengths(['0', '313', '1234567890'])).toBe(14)
})
