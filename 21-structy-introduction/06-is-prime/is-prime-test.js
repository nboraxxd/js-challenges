const { isPrime } = require('./is-prime')

test('Test case #1', () => {
  expect(isPrime(2)).toBe(true)
})

test('Test case #2', () => {
  expect(isPrime(3)).toBe(true)
})

test('Test case #3', () => {
  expect(isPrime(4)).toBe(false)
})

test('Test case #4', () => {
  expect(isPrime(5)).toBe(true)
})

test('Test case #5', () => {
  expect(isPrime(6)).toBe(false)
})

test('Test case #6', () => {
  expect(isPrime(7)).toBe(true)
})

test('Test case #7', () => {
  expect(isPrime(8)).toBe(false)
})

test('Test case #8', () => {
  expect(isPrime(25)).toBe(false)
})

test('Test case #9', () => {
  expect(isPrime(31)).toBe(true)
})

test('Test case #10', () => {
  expect(isPrime(2017)).toBe(true)
})

test('Test case #11', () => {
  expect(isPrime(2048)).toBe(false)
})

test('Test case #12', () => {
  expect(isPrime(1)).toBe(false)
})

test('Test case #13', () => {
  expect(isPrime(713)).toBe(false)
})
