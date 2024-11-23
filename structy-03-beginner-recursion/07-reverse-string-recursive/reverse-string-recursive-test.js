const { reverseString } = require('./reverse-string-recursive')

test('Test case #1', () => {
  expect(reverseString('hello')).toBe('olleh')
})

test('Test case #2', () => {
  expect(reverseString('abcdefg')).toBe('gfedcba')
})

test('Test case #3', () => {
  expect(reverseString('stopwatch')).toBe('hctawpots')
})

test('Test case #4', () => {
  expect(reverseString('')).toBe('')
})
