// Approach:
// Values of nodes are numbers so we can easily compare values
// Use 2 pointers to track the current node for each list
// Use a pointer to track the tail of the result
// Decide which head to return by checking which is smaller and then increment tail and currentx
// Loop until one or both node pointers are null

// Time complexity: linear O(min(n, m))
// Space complexity: constant O(1)
const mergeLists = (head1, head2) => {
  const head = head1.val > head2.val ? head2 : head1
  let tail = head
  let current1 = head1.val > head2.val ? head1 : head1.next
  let current2 = head1.val > head2.val ? head2.next : head2

  while (current1 && current2) {
    if (current1.val > current2.val) {
      tail.next = current2
      current2 = current2.next
    } else {
      tail.next = current1
      current1 = current1.next
    }
    tail = tail.next
  }

  tail.next = current1 ? current1 : current2

  return head
}

// Time complexity: linear O(min(n, m))
// Space complexity: linear O(min(n, m)) - call stack
const mergeLists2 = (head1, head2) => {
  if (!head1 && !head2) return null
  if (!head1) return head2
  if (!head2) return head1

  const head = head1.val > head2.val ? head2 : head1
  const next1 = head1.val > head2.val ? head1 : head1.next
  const next2 = head1.val > head2.val ? head2.next : head2
  head.next = mergeLists2(next1, next2)

  return head
}
