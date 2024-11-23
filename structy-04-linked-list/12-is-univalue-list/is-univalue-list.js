class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const isUnivalueList = (head) => {
  let current = head

  while (current) {
    if (current.val === head.val) {
      current = current.next
    } else {
      return false
    }
  }

  return true
}

const isUnivalueList2 = (head) => {
  if (!head.next) return true
  return head.val === head.next.val ? isUnivalueList2(head.next) : false
}

module.exports = {
  isUnivalueList,
  Node,
}
