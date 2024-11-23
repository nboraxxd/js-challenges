class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const removeNode = (head, targetVal) => {
  let prev = null
  let current = head

  while (current) {
    if (current.val === targetVal) {
      if (prev) {
        prev.next = current.next
      } else {
        head = current.next
      }
      break
    }
    prev = current
    current = current.next
  }

  return head
}

const removeNode2 = (head, targetVal) => {
  if (!head) return null

  if (head.val === targetVal) return head.next

  head.next = removeNode2(head.next, targetVal)

  return head
}

module.exports = {
  removeNode: removeNode2,
  Node,
}
