const { compress } = require('./compress')

test('Test case #0', () => {
  expect(compress('ccaaatsss')).toBe('2c3at3s')
})

test('Test case #1', () => {
  expect(compress('ssssbbz')).toBe('4s2bz')
})

test('Test case #2', () => {
  expect(compress('ppoppppp')).toBe('2po5p')
})

test('Test case #3', () => {
  expect(compress('nnneeeeeeeeeeeezz')).toBe('3n12e2z')
})

test('Test case #4', () => {
  expect(compress('127y')).toBe('127y')
})
