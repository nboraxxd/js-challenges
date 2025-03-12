const { intersection } = require('./intersection')

test('Test case #0', () => {
  expect(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10])).toEqual([2, 6])
})

test('Test case #1', () => {
  expect(intersection([2, 4, 6], [4, 2])).toEqual([2, 4])
})

test('Test case #2', () => {
  expect(intersection([4, 2, 1], [1, 2, 4, 6])).toEqual([1, 2, 4])
})

test('Test case #3', () => {
  expect(intersection([0, 1, 2], [10, 11])).toEqual([])
})

test('Test case #4', () => {
  const a = []
  const b = []
  const result = []
  for (let i = 0; i < 50000; i += 1) {
    a.push(i)
    b.push(i)
    result.push(i)
  }
  expect(intersection(a, b)).toEqual(result)
})
