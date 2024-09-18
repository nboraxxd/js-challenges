# Challenge: insertNode

Write a function, insertNode, that takes in the head of a linked list, a value, and an index. The function should insert a new node with the value into the list at the specified index. Consider the head of the linked list as index 0. The function should return the head of the resulting linked list.

Do this in-place.

You may assume that the input list is non-empty and the index is not greater than the length of the input list.

Viết một hàm `insertNode` nhận vào đầu danh sách liên kết, một giá trị và một chỉ số. Hàm này sẽ chèn một nút mới có giá trị đó vào danh sách tại vị trí được chỉ định. Coi đầu của danh sách liên kết là vị trí 0. Hàm cần trả về đầu của danh sách liên kết sau khi đã chèn.

Thực hiện thao tác này trực tiếp trên danh sách liên kết (in-place).

Giả sử danh sách đầu vào không rỗng và chỉ số không lớn hơn độ dài của danh sách đầu vào.

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
insertNode(a, 'x', 2)
// a -> b -> x -> c -> d
```
