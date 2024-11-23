const { createLinkedList, Node } = require('./create-linked-list')

test('Test case #0', () => {
  const h = new Node('h')
  const e = new Node('e')
  const y = new Node('y')
  h.next = e
  e.next = y

  expect(createLinkedList(['h', 'e', 'y'])).toEqual(h)
})

test('Test case #1', () => {
  const one = new Node(1)
  const seven = new Node(7)
  const one2 = new Node(1)
  const eight = new Node(8)
  one.next = seven
  seven.next = one2
  one2.next = eight

  expect(createLinkedList([1, 7, 1, 8])).toEqual(one)
})

test('Test case #2', () => {
  const a = new Node('a')

  expect(createLinkedList(['a'])).toEqual(a)
})

test('Test case #3', () => {
  expect(createLinkedList([])).toEqual(null)
})
