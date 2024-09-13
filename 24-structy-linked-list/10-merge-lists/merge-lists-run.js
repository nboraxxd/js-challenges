const { mergeLists, Node } = require('./merge-lists')

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

const result = mergeLists(a, q)

console.log(JSON.stringify(result)) // 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 12 -> 20 -> 25 -> 28
