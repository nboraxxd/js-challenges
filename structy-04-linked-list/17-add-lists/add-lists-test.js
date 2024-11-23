const { addLists, Node } = require('./add-lists')

test('Test case #0', () => {
  const a1 = new Node(1)
  const a2 = new Node(2)
  const a3 = new Node(6)
  a1.next = a2
  a2.next = a3
  // 1 -> 2 -> 6

  const b1 = new Node(4)
  const b2 = new Node(5)
  const b3 = new Node(3)
  b1.next = b2
  b2.next = b3
  // 4 -> 5 -> 3

  expect(addLists(a1, b1)).toEqual({ next: { next: { next: null, val: 9 }, val: 7 }, val: 5 })
})

test('Test case #1', () => {
  const a1 = new Node(1)
  const a2 = new Node(4)
  const a3 = new Node(5)
  const a4 = new Node(7)
  a1.next = a2
  a2.next = a3
  a3.next = a4
  // 1 -> 4 -> 5 -> 7

  const b1 = new Node(2)
  const b2 = new Node(3)
  b1.next = b2
  // 2 -> 3

  expect(addLists(a1, b1)).toEqual({ next: { next: { next: { next: null, val: 7 }, val: 5 }, val: 7 }, val: 3 })
})

test('Test case #2', () => {
  const a1 = new Node(9)
  const a2 = new Node(3)
  a1.next = a2
  // 9 -> 3

  const b1 = new Node(7)
  const b2 = new Node(4)
  b1.next = b2
  // 7 -> 4

  expect(addLists(a1, b1)).toEqual({ next: { next: null, val: 8 }, val: 6 })
})

test('Test case #3', () => {
  const a1 = new Node(9)
  const a2 = new Node(8)
  a1.next = a2
  // 9 -> 8

  const b1 = new Node(7)
  const b2 = new Node(4)
  b1.next = b2
  // 7 -> 4

  // 6 -> 3 -> 1
  expect(addLists(a1, b1)).toEqual({ next: { next: { next: null, val: 1 }, val: 3 }, val: 6 })
})

test('Test case #4', () => {
  const a1 = new Node(9)
  const a2 = new Node(9)
  const a3 = new Node(9)
  a1.next = a2
  a2.next = a3
  // 9 -> 9 -> 9

  const b1 = new Node(6)
  // 6

  expect(addLists(a1, b1)).toEqual({ next: { next: { next: { next: null, val: 1 }, val: 0 }, val: 0 }, val: 5 })
})
