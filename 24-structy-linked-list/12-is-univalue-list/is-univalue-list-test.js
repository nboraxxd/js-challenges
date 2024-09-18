const { isUnivalueList, Node } = require('./is-univalue-list')

test('Test case #1', () => {
  const a = new Node(7)
  const b = new Node(7)
  const c = new Node(7)

  a.next = b
  b.next = c

  expect(isUnivalueList(a)).toBe(true)
})

test('Test case #2', () => {
  const a = new Node(7)
  const b = new Node(7)
  const c = new Node(4)

  a.next = b
  b.next = c

  expect(isUnivalueList(a)).toBe(false)
})

test('Test case #3', () => {
  const u = new Node(2)
  const v = new Node(2)
  const w = new Node(2)
  const x = new Node(2)
  const y = new Node(2)

  u.next = v
  v.next = w
  w.next = x
  x.next = y

  expect(isUnivalueList(u)).toBe(true)
})

test('Test case #4', () => {
  const u = new Node(2)
  const v = new Node(2)
  const w = new Node(3)
  const x = new Node(3)
  const y = new Node(2)

  u.next = v
  v.next = w
  w.next = x
  x.next = y

  expect(isUnivalueList(u)).toBe(false)
})

test('Test case #5', () => {
  const z = new Node('z')

  expect(isUnivalueList(z)).toBe(true)
})

test('Test case #6', () => {
  const u = new Node(2)
  const v = new Node(1)
  const w = new Node(2)
  const x = new Node(2)
  const y = new Node(2)

  u.next = v
  v.next = w
  w.next = x
  x.next = y

  expect(isUnivalueList(u)).toBe(false)
})
