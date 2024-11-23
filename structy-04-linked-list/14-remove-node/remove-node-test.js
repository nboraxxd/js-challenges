const { removeNode, Node } = require('./remove-node')

test('Test case #0', () => {
  const a = new Node('a')
  const b = new Node('b')
  const c = new Node('c')
  const d = new Node('d')
  const e = new Node('e')
  const f = new Node('f')
  a.next = b
  b.next = c
  c.next = d
  d.next = e
  e.next = f
  // a -> b -> c -> d -> e -> f

  const a2 = new Node('a')
  const b2 = new Node('b')
  const d2 = new Node('d')
  const e2 = new Node('e')
  const f2 = new Node('f')

  a2.next = b2
  b2.next = d2
  d2.next = e2
  e2.next = f2

  expect(removeNode(a, 'c')).toEqual(a2)
})

test('Test case #1', () => {
  const x = new Node('x')
  const y = new Node('y')
  const z = new Node('z')
  x.next = y
  y.next = z
  // x -> y -> z

  const x2 = new Node('x')
  const y2 = new Node('y')
  x2.next = y2
  // x -> y

  expect(removeNode(x, 'z')).toEqual(x2)
})

test('Test case #2', () => {
  const q = new Node('q')
  const r = new Node('r')
  const s = new Node('s')
  q.next = r
  r.next = s
  // q -> r -> s

  const r2 = new Node('r')
  const s2 = new Node('s')
  r2.next = s2
  // r -> s

  expect(removeNode(q, 'q')).toEqual(r2)
})

test('Test case #3', () => {
  const node1 = new Node('h')
  const node2 = new Node('i')
  const node3 = new Node('j')
  const node4 = new Node('i')
  node1.next = node2
  node2.next = node3
  node3.next = node4
  // h -> i -> j -> i

  const node1Copy = new Node('h')
  const node3Copy = new Node('j')
  const node4Copy = new Node('i')
  node1Copy.next = node3Copy
  node3Copy.next = node4Copy
  // h -> j -> i

  expect(removeNode(node1, 'i')).toEqual(node1Copy)
})

test('Test case #4', () => {
  const t = new Node('t')

  expect(removeNode(t, 't')).toEqual(null)
})

test('Test case #5', () => {
  const node1 = new Node('a')
  const node2 = new Node('a')
  const node3 = new Node('a')
  const node4 = new Node('b')
  const node5 = new Node('b')
  const node6 = new Node('a')
  node1.next = node2
  node2.next = node3
  node3.next = node4
  node4.next = node5
  node5.next = node6
  // a -> a -> a -> b -> b -> a

  const node2Copy = new Node('a')
  const node3Copy = new Node('a')
  const node4Copy = new Node('b')
  const node5Copy = new Node('b')
  const node6Copy = new Node('a')
  node2Copy.next = node3Copy
  node3Copy.next = node4Copy
  node4Copy.next = node5Copy
  node5Copy.next = node6Copy
  // a -> a -> b -> b -> a

  expect(removeNode(node1, 'a')).toEqual(node2Copy)
})

test('Test case #6', () => {
  const node1 = new Node('a')
  const node2 = new Node('a')
  const node3 = new Node('a')
  const node4 = new Node('b')
  node1.next = node2
  node2.next = node3
  node3.next = node4
  // a -> a -> a -> b

  const node1Copy = new Node('a')
  const node2Copy = new Node('a')
  const node3Copy = new Node('a')
  node1Copy.next = node2Copy
  node2Copy.next = node3Copy
  // a -> a -> a

  expect(removeNode(node1, 'b')).toEqual(node1Copy)
})
