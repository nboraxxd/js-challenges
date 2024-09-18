const { insertNode, Node } = require('./insert-node')

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
a.next = b
b.next = c
c.next = d
// a -> b -> c -> d
const result = insertNode(a, 'x', 2)

console.log(result) // a -> b -> x -> c -> d
