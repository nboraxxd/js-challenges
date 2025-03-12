const { mostFrequentChar } = require('./most-frequent-char')

test('Test case #0', () => {
  expect(mostFrequentChar(' ')).toBe(' ')
})

test('Test case #1', () => {
  expect(mostFrequentChar('bookeeper')).toBe('e')
})

test('Test case #2', () => {
  expect(mostFrequentChar('david')).toBe('d')
})

test('Test case #3', () => {
  expect(mostFrequentChar('abby')).toBe('b')
})

test('Test case #4', () => {
  expect(mostFrequentChar('mississippi')).toBe('i')
})

test('Test case #5', () => {
  expect(mostFrequentChar('potato')).toBe('o')
})

test('Test case #6', () => {
  expect(mostFrequentChar('eleventennine')).toBe('e')
})

test('Test case #7', () => {
  expect(mostFrequentChar('riverbed')).toBe('r')
})
