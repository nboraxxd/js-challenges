const { removeNode, Node } = require('./remove-node')

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

const result = removeNode(a, 'c')

console.log(JSON.stringify(result))
