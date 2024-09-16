const { fibonacci } = require('./fibonacci')

test('Test case #1', () => {
  expect(fibonacci(0)).toBe(0)
})

test('Test case #2', () => {
  expect(fibonacci(1)).toBe(1)
})

test('Test case #3', () => {
  expect(fibonacci(2)).toBe(1)
})

test('Test case #4', () => {
  expect(fibonacci(3)).toBe(2)
})

test('Test case #5', () => {
  expect(fibonacci(4)).toBe(3)
})

test('Test case #6', () => {
  expect(fibonacci(5)).toBe(5)
})

test('Test case #7', () => {
  expect(fibonacci(8)).toBe(21)
})
