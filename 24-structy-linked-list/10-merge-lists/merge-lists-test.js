const { mergeLists, Node } = require('./merge-lists')

const areListsEqual = (list1, list2) => {
  while (list1 !== null && list2 !== null) {
    if (list1.val !== list2.val) {
      return false
    }
    list1 = list1.next
    list2 = list2.next
  }
  return list1 === null && list2 === null
}

test('Test case 1', () => {
  head1 = null
  head2 = null
  result = mergeLists(head1, head2)
  expect(result).toBe(null)
})

test('Test case 2', () => {
  head1 = null
  head2 = new Node(1)
  result = mergeLists(head1, head2)
  expect(areListsEqual(result, new Node(1))).toBe(true)
})

test('Test case 3', () => {
  head1 = new Node(1)
  head1.next = new Node(3)
  head1.next.next = new Node(5)

  head2 = new Node(2)
  head2.next = new Node(4)
  head2.next.next = new Node(6)

  result = mergeLists(head1, head2)

  const expected = new Node(1)
  expected.next = new Node(2)
  expected.next.next = new Node(3)
  expected.next.next.next = new Node(4)
  expected.next.next.next.next = new Node(5)
  expected.next.next.next.next.next = new Node(6)

  expect(areListsEqual(result, expected)).toBe(true)
})

test('Test case 4', () => {
  const a = new Node(5)
  const b = new Node(7)
  const c = new Node(10)
  const d = new Node(12)
  const e = new Node(20)
  const f = new Node(28)
  a.next = b
  b.next = c
  c.next = d
  d.next = e
  e.next = f
  // 5 -> 7 -> 10 -> 12 -> 20 -> 28

  const q = new Node(6)
  const r = new Node(8)
  const s = new Node(9)
  const t = new Node(25)
  q.next = r
  r.next = s
  s.next = t
  // 6 -> 8 -> 9 -> 25

  result = mergeLists(a, q)

  const expected = new Node(5)
  expected.next = new Node(6)
  expected.next.next = new Node(7)
  expected.next.next.next = new Node(8)
  expected.next.next.next.next = new Node(9)
  expected.next.next.next.next.next = new Node(10)
  expected.next.next.next.next.next.next = new Node(12)
  expected.next.next.next.next.next.next.next = new Node(20)
  expected.next.next.next.next.next.next.next.next = new Node(25)
  expected.next.next.next.next.next.next.next.next.next = new Node(28)

  expect(areListsEqual(result, expected)).toBe(true)
})

test('Test case 5', () => {
  const a = new Node(5)
  const b = new Node(7)
  const c = new Node(10)
  const d = new Node(12)
  const e = new Node(20)
  const f = new Node(28)
  a.next = b
  b.next = c
  c.next = d
  d.next = e
  e.next = f
  // 5 -> 7 -> 10 -> 12 -> 20 -> 28

  const q = new Node(1)
  const r = new Node(8)
  const s = new Node(9)
  const t = new Node(10)
  q.next = r
  r.next = s
  s.next = t
  // 1 -> 8 -> 9 -> 10

  result = mergeLists(a, q)

  const expected = new Node(1)
  expected.next = new Node(5)
  expected.next.next = new Node(7)
  expected.next.next.next = new Node(8)
  expected.next.next.next.next = new Node(9)
  expected.next.next.next.next.next = new Node(10)
  expected.next.next.next.next.next.next = new Node(10)
  expected.next.next.next.next.next.next.next = new Node(12)
  expected.next.next.next.next.next.next.next.next = new Node(20)
  expected.next.next.next.next.next.next.next.next.next = new Node(28)

  expect(areListsEqual(result, expected)).toBe(true)
})

test('Test case 6', () => {
  const h = new Node(30)

  const p = new Node(15)
  const q = new Node(67)
  p.next = q

  result = mergeLists(h, p)

  const expected = new Node(15)
  expected.next = new Node(30)
  expected.next.next = new Node(67)

  expect(areListsEqual(result, expected)).toBe(true)
})
