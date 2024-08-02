const findClosestValueInBst = require('./branch-sums')

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const tree = new BST(10)
tree.left = new BST(5)
tree.left.left = new BST(2)
tree.left.left.left = new BST(1)
tree.left.right = new BST(5)
tree.right = new BST(15)
tree.right.left = new BST(13)
tree.right.left.right = new BST(14)
tree.right.right = new BST(22)

console.log(firstClosestValueInBst(tree, 12)) // 13
