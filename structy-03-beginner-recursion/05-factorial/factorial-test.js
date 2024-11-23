const { factorial } = require('./factorial')

test('Test case #1', () => {
  expect(factorial(3)).toBe(6)
})

test('Test case #2', () => {
  expect(factorial(6)).toBe(720)
})

test('Test case #3', () => {
  expect(factorial(18)).toBe(6402373705728000)
})

test('Test case #4', () => {
  expect(factorial(1)).toBe(1)
})

test('Test case #5', () => {
  expect(factorial(13)).toBe(6227020800)
})

test('Test case #6', () => {
  expect(factorial(0)).toBe(1)
})
