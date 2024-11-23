const { longestStreak, Node } = require('./longest-streak')

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

const result = longestStreak(a)

console.log(result) // 3
