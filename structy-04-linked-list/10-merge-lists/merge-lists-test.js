const { mergeLists, Node } = require('./merge-lists')

test('Test case #0', () => {
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

  expect(mergeLists(a, q)).toEqual({
    val: 5,
    next: {
      val: 6,
      next: {
        val: 7,
        next: {
          val: 8,
          next: {
            val: 9,
            next: {
              val: 10,
              next: {
                val: 12,
                next: { val: 20, next: { val: 25, next: { val: 28, next: null } } },
              },
            },
          },
        },
      },
    },
  })
})

test('Test case #1', () => {
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

  // 1 -> 5 -> 7 -> 8 -> 9 -> 10 -> 10 -> 12 -> 20 -> 25 -> 28
  expect(mergeLists(a, q)).toEqual({
    val: 1,
    next: {
      val: 5,
      next: {
        val: 7,
        next: {
          val: 8,
          next: {
            val: 9,
            next: {
              val: 10,
              next: {
                val: 10,
                next: {
                  val: 12,
                  next: {
                    val: 20,
                    next: { val: 28, next: null },
                  },
                },
              },
            },
          },
        },
      },
    },
  })
})

test('Test case #2', () => {
  const h = new Node(30)
  // 30

  const p = new Node(15)
  const q = new Node(67)
  p.next = q
  // 15 -> 67

  expect(mergeLists(h, p)).toEqual({
    val: 15,
    next: {
      val: 30,
      next: { val: 67, next: null },
    },
  })
})
