const tournamentWinner = require('./tournament-winner')

test('Test case #1', () => {
  const competitions = [
    ['HTML', 'C#'],
    ['C#', 'Python'],
    ['Python', 'HTML'],
  ]
  const results = [0, 0, 1]
  const expected = 'Python'
  const actual = tournamentWinner(competitions, results)

  expect(actual).toEqual(expected)
})

test('Test case #2', () => {
  const competitions = [
    ['HTML', 'Java'],
    ['Java', 'Python'],
    ['Python', 'HTML'],
  ]
  const results = [0, 1, 1]
  const expected = 'Java'
  const actual = tournamentWinner(competitions, results)

  expect(actual).toEqual(expected)
})

test('Test case #3', () => {
  const competitions = [
    ['HTML', 'Java'],
    ['Java', 'Python'],
    ['Python', 'HTML'],
    ['C#', 'Python'],
    ['Java', 'C#'],
    ['C#', 'HTML'],
  ]
  const results = [0, 1, 1, 1, 0, 1]
  const expected = 'C#'
  const actual = tournamentWinner(competitions, results)

  expect(actual).toEqual(expected)
})

test('Test case #4', () => {
  const competitions = [
    ['HTML', 'Java'],
    ['Java', 'Python'],
    ['Python', 'HTML'],
    ['C#', 'Python'],
    ['Java', 'C#'],
    ['C#', 'HTML'],
    ['SQL', 'C#'],
    ['HTML', 'SQL'],
    ['SQL', 'Python'],
    ['SQL', 'Java'],
  ]
  const results = [0, 1, 1, 1, 0, 1, 0, 1, 1, 0]
  const expected = 'C#'
  const actual = tournamentWinner(competitions, results)

  expect(actual).toEqual(expected)
})

test('Test case #5', () => {
  const competitions = [['Bulls', 'Eagles']]
  const results = [1]
  const expected = 'Bulls'
  const actual = tournamentWinner(competitions, results)

  expect(actual).toEqual(expected)
})

test('Test case #6', () => {
  const competitions = [
    ['Bulls', 'Eagles'],
    ['Bulls', 'Bears'],
    ['Bears', 'Eagles'],
  ]
  const results = [0, 0, 0]
  const expected = 'Eagles'
  const actual = tournamentWinner(competitions, results)

  expect(actual).toEqual(expected)
})

test('Test case #7', () => {
  const competitions = [
    ['Bulls', 'Eagles'],
    ['Bulls', 'Bears'],
    ['Bulls', 'Monkeys'],
    ['Eagles', 'Bears'],
    ['Eagles', 'Monkeys'],
    ['Bears', 'Monkeys'],
  ]
  const results = [1, 1, 1, 1, 1, 1]
  const expected = 'Bulls'
  const actual = tournamentWinner(competitions, results)

  expect(actual).toEqual(expected)
})

test('Test case #8', () => {
  const competitions = [
    ['AlgoMasters', 'FrontPage Freebirds'],
    ['Runtime Terror', 'Static Startup'],
    ['WeC#', 'Hypertext Assassins'],
    ['AlgoMasters', 'WeC#'],
    ['Static Startup', 'Hypertext Assassins'],
    ['Runtime Terror', 'FrontPage Freebirds'],
    ['AlgoMasters', 'Runtime Terror'],
    ['Hypertext Assassins', 'FrontPage Freebirds'],
    ['Static Startup', 'WeC#'],
    ['AlgoMasters', 'Static Startup'],
    ['FrontPage Freebirds', 'WeC#'],
    ['Hypertext Assassins', 'Runtime Terror'],
    ['AlgoMasters', 'Hypertext Assassins'],
    ['WeC#', 'Runtime Terror'],
    ['FrontPage Freebirds', 'Static Startup'],
  ]
  const results = [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0]
  const expected = 'AlgoMasters'
  const actual = tournamentWinner(competitions, results)

  expect(actual).toEqual(expected)
})

test('Test case #9', () => {
  const competitions = [
    ['HTML', 'Java'],
    ['Java', 'Python'],
    ['Python', 'HTML'],
    ['C#', 'Python'],
    ['Java', 'C#'],
    ['C#', 'HTML'],
    ['SQL', 'C#'],
    ['HTML', 'SQL'],
    ['SQL', 'Python'],
    ['SQL', 'Java'],
  ]
  const results = [0, 0, 0, 0, 0, 0, 1, 0, 1, 1]
  const expected = 'SQL'
  const actual = tournamentWinner(competitions, results)

  expect(actual).toEqual(expected)
})

test('Test case #10', () => {
  const competitions = [['A', 'B']]
  const results = [0]
  const expected = 'B'
  const actual = tournamentWinner(competitions, results)

  expect(actual).toEqual(expected)
})
