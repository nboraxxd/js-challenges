# Challenge: compress

Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

Viết một hàm, compress, nhận vào một chuỗi làm đối số. Hàm này sẽ trả về phiên bản nén của chuỗi, trong đó các ký tự xuất hiện liên tiếp giống nhau được nén thành số lần xuất hiện kèm theo ký tự đó. Các ký tự xuất hiện một lần không nên thay đổi.

```plaintext
'aaa' compresses to '3a'
'cc' compresses to '2c'
't' should remain as 't'
```

You can assume that the input only contains alphabetic characters.

Bạn có thể giả định rằng đầu vào chỉ chứa các ký tự chữ cái.

```js
compress('ccaaatsss') // -> '2c3at3s'
compress('ssssbbz') // -> '4s2bz'
```
