# Challenge: longestStreak

Write a function, longestStreak, that takes in the head of a linked list as an argument. The function should return the length of the longest consecutive streak of the same value within the list.

Viết một hàm, longestStreak, nhận vào đầu của một danh sách liên kết làm đối số. Hàm này sẽ trả về độ dài của chuỗi liên tiếp dài nhất có cùng giá trị trong danh sách.

## Sample Input

```js
const a = new Node(5)
const b = new Node(5)
const c = new Node(7)
const d = new Node(7)
const e = new Node(7)
const f = new Node(6)

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f

// 5 -> 5 -> 7 -> 7 -> 7 -> 6
```

## Sample Output

```js
longestStreak(a) // 3 (7 -> 7 -> 7)
```
