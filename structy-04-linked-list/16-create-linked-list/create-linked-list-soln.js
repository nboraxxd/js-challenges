// Approach:
// Return null if input is an empty array
// Create a null 'head' node and iterate through the array, adding a new node with the element value
// Time complexity: linear O(n)
// Space complexity: linear O(n)
const createLinkedList = (values) => {
  // Create dummy head node and create pointer for previous node
  const dummyhead = new Node()
  let prev = dummyhead

  // Iterate through array, create new node and attach it to the end of the list
  for (let value of values) {
    const newNode = new Node(value)
    prev.next = newNode
    prev = newNode
  }

  // Return dummy head's next as new linked list
  return dummyhead.next
}

// Approach:
// Return null if input is an empty array
// Create a head node for the first element and it's next would be calling the fn on the rest of the array
// Time complexity: linear O(n)
// Space complexity: linear O(n)
const createLinkedList2 = (values) => {
  if (!values.length) return null

  const newNode = new Node(values[0])
  newNode.next = createLinkedList2(values.slice(1))

  return newNode
}
