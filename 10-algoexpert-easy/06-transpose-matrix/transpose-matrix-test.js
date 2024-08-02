const transposeMatrix = require('./transpose-matrix')

test('Test case #1', () => {
  const input = [[1]]
  const expected = [[1]]
  const actual = transposeMatrix(input)

  expect(actual).toEqual(expected)
})

test('Test case #2', () => {
  const input = [[1], [-1]]
  const expected = [[1, -1]]
  const actual = transposeMatrix(input)

  expect(actual).toEqual(expected)
})

test('Test case #3', () => {
  const input = [[1, 2, 3]]
  const expected = [[1], [2], [3]]
  const actual = transposeMatrix(input)

  expect(actual).toEqual(expected)
})

test('Test case #4', () => {
  const input = [[1], [2], [3]]
  const expected = [[1, 2, 3]]
  const actual = transposeMatrix(input)

  expect(actual).toEqual(expected)
})

test('Test case #5', () => {
  const input = [
    [1, 2, 3],
    [4, 5, 6],
  ]
  const expected = [
    [1, 4],
    [2, 5],
    [3, 6],
  ]
  const actual = transposeMatrix(input)

  expect(actual).toEqual(expected)
})

test('Test case #6', () => {
  const input = [
    [0, 0, 0],
    [1, 1, 1],
  ]
  const expected = [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
  const actual = transposeMatrix(input)

  expect(actual).toEqual(expected)
})

test('Test case #7', () => {
  const input = [
    [0, 1],
    [0, 1],
    [0, 1],
  ]
  const expected = [
    [0, 0, 0],
    [1, 1, 1],
  ]
  const actual = transposeMatrix(input)

  expect(actual).toEqual(expected)
})

test('Test case #8', () => {
  const input = [
    [0, 0, 0],
    [0, 0, 0],
  ]
  const expected = [
    [0, 0],
    [0, 0],
    [0, 0],
  ]
  const actual = transposeMatrix(input)

  expect(actual).toEqual(expected)
})

test('Test case #9', () => {
  const input = [
    [1, 4],
    [2, 5],
    [3, 6],
  ]
  const expected = [
    [1, 2, 3],
    [4, 5, 6],
  ]
  const actual = transposeMatrix(input)

  expect(actual).toEqual(expected)
})

test('Test case #10', () => {
  const input = [
    [-7, -7],
    [100, 12],
    [-33, 17],
  ]
  const expected = [
    [-7, 100, -33],
    [-7, 12, 17],
  ]
  const actual = transposeMatrix(input)

  expect(actual).toEqual(expected)
})

test('Test case #11', () => {
  const input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
  const expected = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ]
  const actual = transposeMatrix(input)

  expect(actual).toEqual(expected)
})

test('Test case #12', () => {
  const input = [
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ]
  const expected = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]
  const actual = transposeMatrix(input)

  expect(actual).toEqual(expected)
})

test('Test case #13', () => {
  const input = [
    [5, 6, 3, -3, 12],
    [-3, 6, 5, 2, -1],
    [0, 0, 3, 12, 3],
  ]
  const expected = [
    [5, -3, 0],
    [6, 6, 0],
    [3, 5, 3],
    [-3, 2, 12],
    [12, -1, 3],
  ]
  const actual = transposeMatrix(input)

  expect(actual).toEqual(expected)
})

test('Test case #14', () => {
  const input = [
    [0, -1, -2, -3],
    [4, 5, 6, 7],
    [2, 3, -2, -3],
    [42, 100, 30, -42],
  ]
  const expected = [
    [0, 4, 2, 42],
    [-1, 5, 3, 100],
    [-2, 6, -2, 30],
    [-3, 7, -3, -42],
  ]
  const actual = transposeMatrix(input)

  expect(actual).toEqual(expected)
})

test('Test case #15', () => {
  const input = [
    [1234, 6935, 4205],
    [-23459, 314159, 0],
    [100, 3, 987654],
  ]
  const expected = [
    [1234, -23459, 100],
    [6935, 314159, 3],
    [4205, 0, 987654],
  ]
  const actual = transposeMatrix(input)

  expect(actual).toEqual(expected)
})
