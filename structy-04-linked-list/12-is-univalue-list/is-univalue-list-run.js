const { isUnivalueList, Node } = require('./is-univalue-list')

const a = new Node(5)
const b = new Node(5)
const c = new Node(5)

const result = isUnivalueList(a)

console.log(result) // true
