# Challenge: linked list find

Write a function, linkedListFind, that takes in the head of a linked list and a target value. The function should return a boolean indicating whether or not the linked list contains the target.

## Sample Input

```js
const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')

a.next = b
b.next = c
c.next = d

// a -> b -> c -> d
```

## Sample Output

```js
linkedListFind(a, 'c') // true
```
