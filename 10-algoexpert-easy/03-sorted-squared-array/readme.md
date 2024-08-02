# Challenge: Sorted Squared Array

Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sorted in ascending order.

Viết một hàm nhận vào một mảng không rỗng các số nguyên đã được sắp xếp theo thứ tự tăng dần và trả về một mảng mới có cùng độ dài với các số nguyên gốc đã được bình phương và cũng được sắp xếp theo thứ tự tăng dần.

## Sample Input

```js
array = [1, 2, 3, 5, 6, 8, 9]
```

## Sample Output

```js
;[1, 4, 9, 25, 36, 64, 81]
```

## Optimal Space & Time Complexity

O(n) time | O(n) space - where n is the length of the input array

## Hints

<details>

<summary>Hints 1</summary>
  
While the integers in the input array are sorted in increasing order, their squares won't necessarily be as well, because of the possible presence of negative numbers.

Trong khi các số nguyên trong mảng đầu vào được sắp xếp theo thứ tự tăng dần, bình phương của chúng không nhất thiết cũng sẽ được sắp xếp theo thứ tự tăng dần, do có thể có sự hiện diện của các số âm.

</details>

<details>

<summary>Hints 2</summary>

Traverse the array value by value, square each value, and insert the squares into an output array. Then, sort the output array before returning it. Is this the optimal solution?

Duyệt qua từng giá trị trong mảng, bình phương từng giá trị và chèn các bình phương vào một mảng kết quả. Sau đó, sắp xếp mảng kết quả trước khi trả về. Đây có phải là giải pháp tối ưu không?

</details>

<details>

<summary>Hints 3</summary>
  
To reduce the time complexity of the algorithm mentioned in Hint #2, you need to avoid sorting the ouput array. To do this, as you square the values of the input array, try to directly insert them into their correct position in the output array.

Để giảm độ phức tạp thời gian của thuật toán được đề cập trong Gợi ý #2, bạn cần tránh việc sắp xếp mảng kết quả. Để làm điều này, khi bạn bình phương các giá trị trong mảng đầu vào, hãy thử chèn chúng trực tiếp vào vị trí đúng của chúng trong mảng kết quả.

</details>

<details>

<summary>Hints 4</summary>

Use two pointers to keep track of the smallest and largest values in the input array. Compare the absolute values of these smallest and largest values, square the larger absolute value, and place the square at the end of the output array, filling it up from right to left. Move the pointers accordingly, and repeat this process until the output array is filled.

Sử dụng hai con trỏ để theo dõi giá trị nhỏ nhất và lớn nhất trong mảng đầu vào. So sánh giá trị tuyệt đối của hai giá trị này, bình phương giá trị tuyệt đối lớn hơn và đặt bình phương đó vào cuối mảng kết quả, điền từ phải sang trái. Di chuyển các con trỏ tương ứng và lặp lại quá trình này cho đến khi mảng kết quả được điền đầy.

</details>
