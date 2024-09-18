# Challenge: isUnivalueList

Write a function, isUnivalueList, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains exactly one unique value.

You may assume that the input list is non-empty.

Viết một hàm, isUnivalueList, nhận vào đầu của một danh sách liên kết làm đối số. Hàm này sẽ trả về một giá trị boolean cho biết liệu danh sách liên kết chứa chính xác một giá trị duy nhất hay không.

Bạn có thể giả định rằng danh sách đầu vào không rỗng.

## Sample Input

```js
const a = new Node(7)
const b = new Node(7)
const c = new Node(7)

a.next = b
b.next = c

// 7 -> 7 -> 7
```

## Sample Output

```js
isUnivalueList(a) // true
```
