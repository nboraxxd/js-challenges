const { maxValue } = require('./max-value')

test('Test case #1', () => {
  expect(maxValue([4, 7, 2, 8, 10, 9])).toBe(10)
})

test('Test case #2', () => {
  expect(maxValue([10, 5, 40, 40.3])).toBe(40.3)
})

test('Test case #3', () => {
  expect(maxValue([-5, -2, -1, -11])).toBe(-1)
})

test('Test case #4', () => {
  expect(maxValue([42])).toBe(42)
})

test('Test case #5', () => {
  expect(maxValue([1000, 8])).toBe(1000)
})

test('Test case #6', () => {
  expect(maxValue([1000, 8, 9000])).toBe(9000)
})

test('Test case #7', () => {
  expect(maxValue([2, 5, 1, 1, 4])).toBe(5)
})
