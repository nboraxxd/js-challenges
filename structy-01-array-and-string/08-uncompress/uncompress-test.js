const { uncompress } = require('./uncompress')

test('Test case #0', () => {
  expect(uncompress('2c3a1t')).toBe('ccaaat')
})

test('Test case #1', () => {
  expect(uncompress('4s2b')).toBe('ssssbb')
})

test('Test case #2', () => {
  expect(uncompress('2p1o5p')).toBe('ppoppppp')
})

test('Test case #3', () => {
  expect(uncompress('3n12e2z')).toBe('nnneeeeeeeeeeeezz')
})

test('Test case #4', () => {
  expect(uncompress('127y')).toBe(
    'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'
  )
})
