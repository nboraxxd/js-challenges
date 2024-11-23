const { mergeLists, Node } = require('./merge-lists')

const h = new Node(30)
// 30

const p = new Node(15)
const q = new Node(67)
p.next = q

const result = mergeLists(h, p)

console.log(JSON.stringify(result))
