const BinaryTree = require('./binary-tree')
const branchSums = require('./branch-sums')

class BinaryTreeExtends extends BinaryTree {
  constructor(value) {
    super(value)
  }

  insert(values, i = 0) {
    if (i >= values.length) return
    const queue = [this]
    while (queue.length > 0) {
      let current = queue.shift()
      if (current.left === null) {
        current.left = new BinaryTree(values[i])
        break
      }
      queue.push(current.left)
      if (current.right === null) {
        current.right = new BinaryTree(values[i])
        break
      }
      queue.push(current.right)
    }
    this.insert(values, i + 1)
    return this
  }
}

test('Test case #1', () => {
  const tree = new BinaryTreeExtends(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10])
  const expected = [15, 16, 18, 10, 11]

  expect(branchSums(tree)).toEqual(expected)
})

test('Test case #2', () => {
  const tree = new BinaryTreeExtends(1)
  const expected = [1]

  expect(branchSums(tree)).toEqual(expected)
})

test('Test case #3', () => {
  const tree = new BinaryTreeExtends(1).insert([2])
  const expected = [3]

  expect(branchSums(tree)).toEqual(expected)
})

test('Test case #4', () => {
  const tree = new BinaryTreeExtends(1).insert([2, 3])
  const expected = [3, 4]

  expect(branchSums(tree)).toEqual(expected)
})

test('Test case #5', () => {
  const tree = new BinaryTreeExtends(1).insert([2, 3, 4, 5])
  const expected = [7, 8, 4]

  expect(branchSums(tree)).toEqual(expected)
})

test('Test case #6', () => {
  const tree = new BinaryTreeExtends(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1])
  const expected = [15, 16, 18, 9, 11, 11, 11]

  expect(branchSums(tree)).toEqual(expected)
})
