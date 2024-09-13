const { linkedListFind, Node } = require('./linked-list-find')

const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')

a.next = b
b.next = c
c.next = d

const result = linkedListFind(a, 'c')

console.log(result)
