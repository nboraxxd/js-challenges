# Challenge: addLists

Write a function, `addLists`, that takes in the head of two linked lists, each representing a number. The nodes of the linked lists contain digits as values. The nodes in the input lists are reversed; this means that the least significant digit of the number is the head. The function should return the head of a new linked listed representing the sum of the input lists. The output list should have its digits reversed as well.

You must do this by traversing through the linked lists once.

Say we wanted to compute 621 + 354 normally. The sum is 975:

```
   621
 + 354
 -----
   975
```

Then, the reversed linked list format of this problem would appear as:

```
    1 -> 2 -> 6
 +  4 -> 5 -> 3
 --------------
    5 -> 7 -> 9
```

Viết một hàm, `addLists`, nhận vào đầu của hai danh sách liên kết, mỗi danh sách đại diện cho một số. Các node của danh sách liên kết chứa các chữ số làm giá trị. Các node trong danh sách liên kết đầu vào được đảo ngược; điều này có nghĩa là chữ số có giá trị nhỏ nhất của số là đầu tiên. Hàm sẽ trả về đầu của một danh sách liên kết mới, đại diện cho tổng của hai danh sách đầu vào. Danh sách đầu ra cũng phải có các chữ số được đảo ngược.

Bạn phải thực hiện điều này bằng cách duyệt qua các danh sách liên kết một lần.

Giả sử chúng ta muốn tính toán 621 + 354 theo cách thông thường. Tổng của chúng là 975:

```
   621
 + 354
 -----
   975
```

Sau đó, định dạng danh sách liên kết bị đảo ngược của bài toán này sẽ xuất hiện như sau:

```
    1 -> 2 -> 6
 +  4 -> 5 -> 3
 --------------
    5 -> 7 -> 9
```

## Sample Input

```js
const a1 = new Node(1)
const a2 = new Node(4)
const a3 = new Node(5)
const a4 = new Node(7)
a1.next = a2
a2.next = a3
a3.next = a4
// 1 -> 4 -> 5 -> 7

const b1 = new Node(2)
const b2 = new Node(3)
b1.next = b2
// 2 -> 3
```

## Sample Output

```js
addLists(a1, b1)
// 3 -> 7 -> 5 -> 7
```
