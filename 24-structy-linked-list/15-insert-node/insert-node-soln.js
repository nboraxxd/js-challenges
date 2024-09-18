// iterative approach -> space O(1), O(n) time
const insertNode2 = (head, value, index) => {
  const newNode = new Node(value)
  let current = head
  let count = 0
  if (index === count) {
    newNode.next = head
    return newNode
  }
  while (current !== null) {
    if (index - 1 === count) {
      const temp = current.next
      current.next = newNode
      newNode.next = temp
      break
    }
    current = current.next
    count++
  }
  return head
}

// recursive approach -> space O(n), O(n) time
const insertNode = (head, value, index) => {
  if (head === null) return null
  if (index === 0) {
    const newNode = new Node(value)
    newNode.next = head
    return newNode
  }
  if (index - 1 === 0) {
    const temp = head.next
    head.next = new Node(value)
    head.next.next = temp
    return head
  }
  head.next = insertNode(head.next, value, index - 1)
  return head
}
