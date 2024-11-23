class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

const longestStreak = (head) => {
  let count = 1
  let longest = 0

  let current = head
  let prevVal = null

  while (current) {
    if (current.val === prevVal) {
      count++
    } else {
      count = 1
    }

    if (count > longest) longest = count
    prevVal = current.val
    current = current.next
  }

  return longest
}

const longestStreak2 = (head, prevVal = null, count = 1, longest = 0) => {
  if (!head) return longest

  if (head.val === prevVal) {
    count++
  } else {
    count = 1
  }

  if (count > longest) longest = count

  return longestStreak2(head.next, head.val, count, longest)
}

module.exports = {
  longestStreak,
  Node,
}
