const sortedSquaredArray = require('./sorted-squared-array')

test('Test case #1', () => {
  const input = [1, 2, 3, 5, 6, 8, 9]
  const expected = [1, 4, 9, 25, 36, 64, 81]
  const actual = sortedSquaredArray(input)

  expect(actual).toEqual(expected)
})

test('Test case #2', () => {
  const input = [1]
  const expected = [1]
  const actual = sortedSquaredArray(input)

  expect(actual).toEqual(expected)
})

test('Test case #3', () => {
  const input = [1, 2]
  const expected = [1, 4]
  const actual = sortedSquaredArray(input)

  expect(actual).toEqual(expected)
})

test('Test case #4', () => {
  const input = [1, 2, 3, 4, 5]
  const expected = [1, 4, 9, 16, 25]
  const actual = sortedSquaredArray(input)

  expect(actual).toEqual(expected)
})

test('Test case #5', () => {
  const input = [0]
  const expected = [0]
  const actual = sortedSquaredArray(input)

  expect(actual).toEqual(expected)
})

test('Test case #6', () => {
  const input = [10]
  const expected = [100]
  const actual = sortedSquaredArray(input)

  expect(actual).toEqual(expected)
})

test('Test case #7', () => {
  const input = [-1]
  const expected = [1]
  const actual = sortedSquaredArray(input)

  expect(actual).toEqual(expected)
})

test('Test case #8', () => {
  const input = [-2, -1]
  const expected = [1, 4]
  const actual = sortedSquaredArray(input)

  expect(actual).toEqual(expected)
})

test('Test case #9', () => {
  const input = [-5, -4, -3, -2, -1]
  const expected = [1, 4, 9, 16, 25]
  const actual = sortedSquaredArray(input)

  expect(actual).toEqual(expected)
})

test('Test case #10', () => {
  const input = [-10]
  const expected = [100]
  const actual = sortedSquaredArray(input)

  expect(actual).toEqual(expected)
})

test('Test case #11', () => {
  const input = [-10, -5, 0, 5, 10]
  const expected = [0, 25, 25, 100, 100]
  const actual = sortedSquaredArray(input)

  expect(actual).toEqual(expected)
})

test('Test case #12', () => {
  const input = [-7, -3, 1, 9, 22, 30]
  const expected = [1, 9, 49, 81, 484, 900]
  const actual = sortedSquaredArray(input)

  expect(actual).toEqual(expected)
})

test('Test case #13', () => {
  const input = [-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20]
  const expected = [0, 0, 0, 1, 1, 1, 4, 4, 9, 9, 361, 400]
  const actual = sortedSquaredArray(input)

  expect(actual).toEqual(expected)
})

test('Test case #14', () => {
  const input = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const expected = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  const actual = sortedSquaredArray(input)

  expect(actual).toEqual(expected)
})

test('Test case #15', () => {
  const input = [-1, -1, 2, 3, 3, 3, 4]
  const expected = [1, 1, 4, 9, 9, 9, 16]
  const actual = sortedSquaredArray(input)

  expect(actual).toEqual(expected)
})

test('Test case #16', () => {
  const input = [-3, -2, -1]
  const expected = [1, 4, 9]
  const actual = sortedSquaredArray(input)

  expect(actual).toEqual(expected)
})

test('Test case #17', () => {
  const input = [-3, -2, -1]
  const expected = [1, 4, 9]
  const actual = sortedSquaredArray(input)

  expect(actual).toEqual(expected)
})
