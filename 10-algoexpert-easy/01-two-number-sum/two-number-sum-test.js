const twoNumberSum = require('./two-number-sum')

test('Test case #1', () => {
  const output = twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)
  expect(output.length === 2).toBe(true)
  expect(output.includes(11)).toBe(true)
  expect(output.includes(-1)).toBe(true)
})

test('Test case #2', () => {
  const output = twoNumberSum([4, 6], 10)
  expect(output.length === 2).toBe(true)
  expect(output.includes(4)).toBe(true)
  expect(output.includes(6)).toBe(true)
})

test('Test case #3', () => {
  const output = twoNumberSum([4, 6, 1], 5)
  expect(output.length === 2).toBe(true)
  expect(output.includes(1)).toBe(true)
  expect(output.includes(4)).toBe(true)
})

test('Test case #4', () => {
  const output = twoNumberSum([4, 6, 1, -3], 3)
  expect(output.length === 2).toBe(true)
  expect(output.includes(6)).toBe(true)
  expect(output.includes(-3)).toBe(true)
})

test('Test case #5', () => {
  const output = twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 17)
  expect(output.length === 2).toBe(true)
  expect(output.includes(8)).toBe(true)
  expect(output.includes(9)).toBe(true)
})

test('Test case #6', () => {
  const output = twoNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18)
  expect(output.length === 2).toBe(true)
  expect(output.includes(3)).toBe(true)
  expect(output.includes(15)).toBe(true)
})

test('Test case #7', () => {
  const output = twoNumberSum([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5)
  expect(output.length === 2).toBe(true)
  expect(output.includes(-5)).toBe(true)
  expect(output.includes(0)).toBe(true)
})

test('Test case #8', () => {
  const output = twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163)
  expect(output.length === 2).toBe(true)
  expect(output.includes(-47)).toBe(true)
  expect(output.includes(210)).toBe(true)
})

test('Test case #9', () => {
  const output = twoNumberSum([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 164)
  expect(output.length === 0).toBe(true)
})

test('Test case #10', () => {
  const output = twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 15)
  expect(output.length === 0).toBe(true)
})

test('Test case #11', () => {
  const output = twoNumberSum([14], 15)
  expect(output.length === 0).toBe(true)
})

test('Test case #12', () => {
  const output = twoNumberSum([15], 15)
  expect(output.length === 0).toBe(true)
})
