const nonConstructibleChange = require('./non-constructible-change')

test('Test case #1', () => {
  const input = [5, 7, 1, 1, 2, 3, 22]
  const expected = 20
  const actual = nonConstructibleChange(input)

  expect(actual).toBe(expected)
})

test('Test case #2', () => {
  const input = [1, 1, 1, 1, 1]
  const expected = 6
  const actual = nonConstructibleChange(input)

  expect(actual).toBe(expected)
})

test('Test case #3', () => {
  const input = [1, 5, 1, 1, 1, 10, 15, 20, 100]
  const expected = 55
  const actual = nonConstructibleChange(input)

  expect(actual).toBe(expected)
})

test('Test case #4', () => {
  const input = [6, 4, 5, 1, 1, 8, 9]
  const expected = 3
  const actual = nonConstructibleChange(input)

  expect(actual).toBe(expected)
})

test('Test case #5', () => {
  const input = []
  const expected = 1
  const actual = nonConstructibleChange(input)

  expect(actual).toBe(expected)
})

test('Test case #6', () => {
  const input = [87]
  const expected = 1
  const actual = nonConstructibleChange(input)

  expect(actual).toBe(expected)
})

test('Test case #7', () => {
  const input = [5, 6, 1, 1, 2, 3, 4, 9]
  const expected = 32
  const actual = nonConstructibleChange(input)

  expect(actual).toBe(expected)
})

test('Test case #8', () => {
  const input = [5, 6, 1, 1, 2, 3, 43]
  const expected = 19
  const actual = nonConstructibleChange(input)

  expect(actual).toBe(expected)
})

test('Test case #9', () => {
  const input = [1, 1]
  const expected = 3
  const actual = nonConstructibleChange(input)

  expect(actual).toBe(expected)
})

test('Test case #10', () => {
  const input = [2]
  const expected = 1
  const actual = nonConstructibleChange(input)

  expect(actual).toBe(expected)
})

test('Test case #11', () => {
  const input = [1]
  const expected = 2
  const actual = nonConstructibleChange(input)

  expect(actual).toBe(expected)
})

test('Test case #12', () => {
  const input = [109, 2000, 8765, 19, 18, 17, 16, 8, 1, 1, 2, 4]
  const expected = 87
  const actual = nonConstructibleChange(input)

  expect(actual).toBe(expected)
})

test('Test case #13', () => {
  const input = [1, 2, 3, 4, 5, 6, 7]
  const expected = 29
  const actual = nonConstructibleChange(input)

  expect(actual).toBe(expected)
})
