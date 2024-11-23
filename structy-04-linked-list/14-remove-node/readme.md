# Challenge: removeNode

Write a function, removeNode, that takes in the head of a linked list and a target value as arguments. The function should delete the node containing the target value from the linked list and return the head of the resulting linked list. If the target appears multiple times in the linked list, only remove the first instance of the target in the list.

Do this in-place.

You may assume that the input list is non-empty.
You may assume that the input list contains the target.

Viết một hàm, removeNode, nhận vào đầu của một danh sách liên kết và một giá trị mục tiêu làm đối số. Hàm này sẽ xóa nút chứa giá trị mục tiêu khỏi danh sách liên kết và trả về đầu của danh sách liên kết kết quả. Nếu mục tiêu xuất hiện nhiều lần trong danh sách liên kết, chỉ xóa lần xuất hiện đầu tiên của mục tiêu trong danh sách.

Thực hiện thao tác này trực tiếp trên danh sách liên kết (in-place).

Bạn có thể giả định rằng danh sách đầu vào không rỗng.
Bạn có thể giả định rằng danh sách đầu vào chứa mục tiêu.

## Sample Input

```js
const a = new Node('a')
const b = new Node('b')
const c = new Node('c')
const d = new Node('d')
const e = new Node('e')
const f = new Node('f')
a.next = b
b.next = c
c.next = d
d.next = e
e.next = f
// a -> b -> c -> d -> e -> f
```

## Sample Output

```js
removeNode(a, 'c')
// a -> b -> d -> e -> f
```
