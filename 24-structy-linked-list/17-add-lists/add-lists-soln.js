// Approach:
// Since the LSD is first in the lists, get the value of the nodes in both lists at the same position and add the values (including any carry)
// If the sum is larger than 9, set a carry variable to 1 and set a new node to the singles digit of the sum
// If one list is longer, add carry to the value of those nodes only

// Time complexity: linear O(max(n, m))
// Space complexity: linear O(max(n, m))
const addLists = (head1, head2) => {
  let carry = 0
  let current1 = head1
  let current2 = head2
  let dummyhead = new Node()
  let tail = dummyhead

  // Iterate until all nodes in both lists have been used
  while (current1 || current2) {
    // Calculate the sum, value for new node and updated carry
    const digit1 = current1?.val || 0
    const digit2 = current2?.val || 0
    const sum = digit1 + digit2 + carry
    const nodeVal = sum > 9 ? sum % 10 : sum
    carry = sum > 9 ? 1 : 0

    // Add the new node to the result list
    tail.next = new Node(nodeVal)

    // Update pointers
    current1 = current1?.next
    current2 = current2?.next
    tail = tail.next
  }

  // If there's a carry left over, add the final node
  tail.next = carry ? new Node(carry) : null
  return dummyhead.next
}

// Time complexity: linear O(max(n, m))
// Space complexity: linear O(max(n, m))
// Each recursive step returns a node for the solution
const addListsRec = (head1, head2, carry = 0) => {
  if (!head1 && !head2 && !carry) return null

  const digit1 = head1 ? head1.val : 0
  const digit2 = head2 ? head2.val : 0
  const sum = digit1 + digit2 + carry
  carry = sum > 9 ? 1 : 0

  const newNode = new Node(sum % 10)
  newNode.next = addListsRec(head1?.next, head2?.next, carry)
  return newNode
}
