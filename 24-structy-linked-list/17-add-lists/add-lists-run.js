const { addLists, Node } = require('./add-lists')

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

const result = addLists(a1, b1)

console.log(result) // 5 -> 7 -> 9
