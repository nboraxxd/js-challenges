const { insertNode, Node } = require('./insert-node')

test('Test case #0', () => {
  const a = new Node('a')
  const b = new Node('b')
  const c = new Node('c')
  const d = new Node('d')
  a.next = b
  b.next = c
  c.next = d
  // a -> b -> c -> d

  const a2 = new Node('a')
  const b2 = new Node('b')
  const x = new Node('x')
  const c2 = new Node('c')
  const d2 = new Node('d')

  expect(insertNode(a, 'x', 2)).toEqual(a2)
})

test('Test case #1', () => {
  const a = new Node('a')
  const b = new Node('b')
  const c = new Node('c')
  const d = new Node('d')
  a.next = b
  b.next = c
  c.next = d
  // a -> b -> c -> d

  const a2 = new Node('a')
  const b2 = new Node('b')
  const c2 = new Node('c')
  const v = new Node('v')
  const d2 = new Node('d')
  a2.next = b2
  b2.next = c2
  c2.next = v
  v.next = d2

  expect(insertNode(a, 'v', 3)).toEqual(a2)
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

  const a2 = new Node('a')
  const b2 = new Node('b')
  const c2 = new Node('c')
  const d2 = new Node('d')
  const m = new Node('m')
  a2.next = b2
  b2.next = c2
  c2.next = d2
  d2.next = m

  expect(insertNode(a, 'm', 4)).toEqual(a2)
})

// insertNode(a, 'z', 0);
test('Test case #3', () => {
  const a = new Node('a')
  const b = new Node('b')
  a.next = b
  // a -> b

  const z2 = new Node('z')
  const a2 = new Node('a')
  const b2 = new Node('b')

  z2.next = a2
  a2.next = b2

  expect(insertNode(a, 'z', 0)).toEqual(z2)
})
