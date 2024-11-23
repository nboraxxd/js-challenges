const { longestStreak, Node } = require('./longest-streak')

test('Test case #0', () => {
  const a = new Node(5)
  const b = new Node(5)
  const c = new Node(7)
  const d = new Node(7)
  const e = new Node(7)
  const f = new Node(6)
  a.next = b
  b.next = c
  c.next = d
  d.next = e
  e.next = f

  expect(longestStreak(a)).toBe(3)
})

test('Test case #1', () => {
  const a = new Node(3)
  const b = new Node(3)
  const c = new Node(3)
  const d = new Node(3)
  const e = new Node(9)
  const f = new Node(9)
  a.next = b
  b.next = c
  c.next = d
  d.next = e
  e.next = f

  expect(longestStreak(a)).toBe(4)
})

test('Test case #2', () => {
  const a = new Node(9)
  const b = new Node(9)
  const c = new Node(1)
  const d = new Node(9)
  const e = new Node(9)
  const f = new Node(9)
  a.next = b
  b.next = c
  c.next = d
  d.next = e
  e.next = f

  expect(longestStreak(a)).toBe(3)
})

test('Test case #3', () => {
  const a = new Node(5)
  const b = new Node(5)
  a.next = b

  expect(longestStreak(a)).toBe(2)
})

test('Test case #4', () => {
  const a = new Node(4)

  expect(longestStreak(a)).toBe(1)
})

test('Test case #5', () => {
  expect(longestStreak(null)).toBe(0)
})
