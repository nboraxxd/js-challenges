# Challenge: uncompress

Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

Viết một hàm `uncompress` nhận vào một chuỗi làm tham số. Chuỗi đầu vào sẽ được định dạng thành nhiều nhóm theo mẫu sau:

```plaintext
<number><char>

for example, '2c' or '3a'.
```

The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively.

You may assume that the input string is well-formed according to the previously mentioned pattern.

Hàm này sẽ trả về phiên bản giải nén của chuỗi, trong đó mỗi 'char' của một nhóm được lặp lại 'number' lần liên tiếp.

Bạn có thể giả định rằng chuỗi đầu vào được định dạng đúng theo mẫu đã đề cập trước đó.

```js
uncompress('2c3a1t') // -> 'ccaaat'
uncompress('4s2b') // -> 'ssssbb'
```
