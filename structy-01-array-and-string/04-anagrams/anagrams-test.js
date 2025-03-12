const { anagrams } = require('./anagrams')

test('Test case #1', () => {
  expect(anagrams('restful', 'fluster')).toBe(true)
})

test('Test case #2', () => {
  expect(anagrams('cats', 'tocs')).toBe(false)
})

test('Test case #3', () => {
  expect(anagrams('monkeyswrite', 'newyorktimes')).toBe(true)
})

test('Test case #4', () => {
  expect(anagrams('paper', 'reapa')).toBe(false)
})

test('Test case #5', () => {
  expect(anagrams('elbow', 'below')).toBe(true)
})

test('Test case #6', () => {
  expect(anagrams('tax', 'taxi')).toBe(false)
})

test('Test case #7', () => {
  expect(anagrams('taxi', 'tax')).toBe(false)
})

test('Test case #8', () => {
  expect(anagrams('night', 'thing')).toBe(true)
})

test('Test case #9', () => {
  expect(anagrams('abbc', 'aabc')).toBe(false)
})

test('Test case #10', () => {
  expect(anagrams('po', 'popp')).toBe(false)
})

test('Test case #11', () => {
  expect(anagrams('pp', 'oo')).toBe(false)
})
