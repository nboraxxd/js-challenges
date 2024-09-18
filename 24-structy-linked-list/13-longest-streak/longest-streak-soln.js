// recursive approach -> space O(n), O(n) time
const longestStreak = (head, prevVal = null, count = 0, maxLen = 0) => {
  if (head === null) return maxLen
  if (head.val === prevVal) {
    count += 1
  } else {
    count = 1
  }

  maxLen = Math.max(maxLen, count)

  return longestStreak(head.next, head.val, count, maxLen)
}

// iterative approach -> space O(1), O(n) time
const longestStreak2 = (head) => {
  let current = head
  let maxLength = 0
  let count = 0
  let prevVal = null

  while (current !== null) {
    if (current.val === prevVal) {
      count += 1
    } else {
      count = 1
    }

    if (count > maxLength) maxLength = count
    prevVal = current.val // need to store the value before node moves
    current = current.next
  }
  return maxLength
}
