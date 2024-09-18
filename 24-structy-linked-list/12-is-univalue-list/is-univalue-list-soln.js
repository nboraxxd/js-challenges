// Recursive approach
const isUnivalueList = (head, prev = null) => {
  if (head === null) return true
  if (prev === null || prev === head.val) {
    return isUnivalueList(head.next, head.val)
  } else {
    return false
  }
}

// Iterative approach
const isUnivalueList2 = (head) => {
  // Iterative
  let current = head

  while (current !== null) {
    if (current.val !== head.val) {
      return false
    }
    current = current.next
  }
  return true
}
