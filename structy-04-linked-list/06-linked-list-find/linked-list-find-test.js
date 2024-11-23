const { linkedListFind, Node } = require('./linked-list-find')

test('Test case #1', () => {
  const a = new Node('a')
  const b = new Node('b')
  const c = new Node('c')
  const d = new Node('d')
  a.next = b
  b.next = c
  c.next = d
  // a -> b -> c -> d

  expect(linkedListFind(a, 'c')).toBe(true)
})

test('Test case #2', () => {
  const a = new Node('a')
  const b = new Node('b')
  const c = new Node('c')
  const d = new Node('d')
  a.next = b
  b.next = c
  c.next = d
  // a -> b -> c -> d

  expect(linkedListFind(a, 'd')).toBe(true)
})

test('Test case #3', () => {
  const node1 = new Node('jason')
  const node2 = new Node('leneli')
  node1.next = node2
  // jason -> leneli

  expect(linkedListFind(node1, 'jason')).toBe(true)
})

test('Test case #4', () => {
  const node1 = new Node(42)
  // 42

  expect(linkedListFind(node1, 42)).toBe(true)
})

test('Test case #5', () => {
  const node1 = new Node(42)
  // 42

  expect(linkedListFind(node1, 100)).toBe(false)
})
