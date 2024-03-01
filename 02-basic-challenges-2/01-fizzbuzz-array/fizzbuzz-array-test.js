const fizzBuzzArray = require('./fizzbuzz-array')

test('FizzBuzz Array #1', () => {
  expect(fizzBuzzArray(15)).toEqual([
    1,
    2,
    'Fizz',
    4,
    'Buzz',
    'Fizz',
    7,
    8,
    'Fizz',
    'Buzz',
    11,
    'Fizz',
    13,
    14,
    'FizzBuzz',
  ])
})

test('FizzBuzz Array #2', () => {
  expect(fizzBuzzArray(1)).toEqual([1])
})

test('FizzBuzz Array #3', () => {
  expect(fizzBuzzArray(0)).toEqual([])
})
