const isValidSubsequence = require('./validate-subsequence')

test('Test case #1', () => {
  const array = [5, 1, 22, 25, 6, -1, 8, 10]
  const sequence = [1, 6, -1, 10]

  expect(isValidSubsequence(array, sequence)).toBe(true)
})

test('Test case #2', () => {
  const array = [5, 1, 22, 25, 6, -1, 8, 10]
  const sequence = [5, 1, 22, 25, 6, -1, 8, 10]

  expect(isValidSubsequence(array, sequence)).toBe(true)
})

test('Test case #3', () => {
  const array = [5, 1, 22, 25, 6, -1, 8, 10]
  const sequence = [5, 1, 22, 6, -1, 8, 10]

  expect(isValidSubsequence(array, sequence)).toBe(true)
})

test('Test case #4', () => {
  const array = [5, 1, 22, 25, 6, -1, 8, 10]
  const sequence = [22, 25, 6]

  expect(isValidSubsequence(array, sequence)).toBe(true)
})

test('Test case #5', () => {
  const array = [5, 1, 22, 25, 6, -1, 8, 10]
  const sequence = [1, 6, 10]

  expect(isValidSubsequence(array, sequence)).toBe(true)
})

test('Test case #6', () => {
  const array = [5, 1, 22, 25, 6, -1, 8, 10]
  const sequence = [5, 1, 22, 10]

  expect(isValidSubsequence(array, sequence)).toBe(true)
})

test('Test case #7', () => {
  const array = [5, 1, 22, 25, 6, -1, 8, 10]
  const sequence = [5, -1, 8, 10]

  expect(isValidSubsequence(array, sequence)).toBe(true)
})

test('Test case #8', () => {
  const array = [5, 1, 22, 25, 6, -1, 8, 10]
  const sequence = [25]

  expect(isValidSubsequence(array, sequence)).toBe(true)
})

test('Test case #9', () => {
  const array = [1, 1, 1, 1, 1]
  const sequence = [1, 1, 1]

  expect(isValidSubsequence(array, sequence)).toBe(true)
})

test('Test case #10', () => {
  const array = [5, 1, 22, 25, 6, -1, 8, 10]
  const sequence = [5, 1, 22, 25, 6, -1, 8, 10, 12]

  expect(isValidSubsequence(array, sequence)).toBe(false)
})

test('Test case #11', () => {
  const array = [5, 1, 22, 25, 6, -1, 8, 10]
  const sequence = [4, 5, 1, 22, 25, 6, -1, 8, 10]

  expect(isValidSubsequence(array, sequence)).toBe(false)
})

test('Test case #12', () => {
  const array = [5, 1, 22, 25, 6, -1, 8, 10]
  const sequence = [5, 1, 22, 23, 6, -1, 8, 10]

  expect(isValidSubsequence(array, sequence)).toBe(false)
})

test('Test case #13', () => {
  const array = [5, 1, 22, 25, 6, -1, 8, 10]
  const sequence = [5, 1, 22, 22, 25, 6, -1, 8, 10]

  expect(isValidSubsequence(array, sequence)).toBe(false)
})

test('Test case #14', () => {
  const array = [5, 1, 22, 25, 6, -1, 8, 10]
  const sequence = [5, 1, 22, 22, 6, -1, 8, 10]

  expect(isValidSubsequence(array, sequence)).toBe(false)
})

test('Test case #15', () => {
  const array = [5, 1, 22, 25, 6, -1, 8, 10]
  const sequence = [1, 6, -1, -1]

  expect(isValidSubsequence(array, sequence)).toBe(false)
})

test('Test case #16', () => {
  const array = [5, 1, 22, 25, 6, -1, 8, 10]
  const sequence = [1, 6, -1, -1, 10]

  expect(isValidSubsequence(array, sequence)).toBe(false)
})

test('Test case #17', () => {
  const array = [5, 1, 22, 25, 6, -1, 8, 10]
  const sequence = [1, 6, -1, -2]

  expect(isValidSubsequence(array, sequence)).toBe(false)
})

test('Test case #18', () => {
  const array = [5, 1, 22, 25, 6, -1, 8, 10]
  const sequence = [26]

  expect(isValidSubsequence(array, sequence)).toBe(false)
})

test('Test case #19', () => {
  const array = [5, 1, 22, 25, 6, -1, 8, 10]
  const sequence = [5, 1, 25, 22, 6, -1, 8, 10]

  expect(isValidSubsequence(array, sequence)).toBe(false)
})

test('Test case #20', () => {
  const array = [5, 1, 22, 25, 6, -1, 8, 10]
  const sequence = [5, 26, 22, 8]

  expect(isValidSubsequence(array, sequence)).toBe(false)
})

test('Test case #21', () => {
  const array = [1, 1, 6, 1]
  const sequence = [1, 1, 1, 6]

  expect(isValidSubsequence(array, sequence)).toBe(false)
})

test('Test case #22', () => {
  const array = [5, 1, 22, 25, 6, -1, 8, 10]
  const sequence = [1, 6, -1, 10, 11, 11, 11, 11]

  expect(isValidSubsequence(array, sequence)).toBe(false)
})

test('Test case #23', () => {
  const array = [5, 1, 22, 25, 6, -1, 8, 10]
  const sequence = [5, 1, 22, 25, 6, -1, 8, 10, 10]

  expect(isValidSubsequence(array, sequence)).toBe(false)
})

test('Test case #24', () => {
  const array = [5, 1, 22, 25, 6, -1, 8, 10]
  const sequence = [1, 6, -1, 5]

  expect(isValidSubsequence(array, sequence)).toBe(false)
})
