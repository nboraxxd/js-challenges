// iterate approach -> space O(1), O(n) time
const removeNode = (head, targetVal) => {
  if (head.val === targetVal) return head.next
  let current = head
  let prev = null

  while (current !== null) {
    if (current.val === targetVal) {
      prev.next = current.next
      break // need to have break to only remove the first targetVal
    }
    prev = current
    current = current.next
  }

  return head
}

// recursive approach -> space O(n), O(n) time
const removeNode2 = (head, targetVal) => {
  if (head === null) return null
  if (head.val === targetVal) return head.next

  head.next = removeNode2(head.next, targetVal)
  return head
}
