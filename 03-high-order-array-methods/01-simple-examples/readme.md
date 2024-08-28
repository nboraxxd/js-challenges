# What Are High Order Array Methods?

Most of the challenges that we have done so far have used loops. Loops are one of the biggest fundamentals in computer science in general. It's important that you know how to use them. For the next batch of challenges, I want to utilize some of the high order array methods in JavaScript, such as `map` and `filter`. These methods are very useful and can help you write cleaner code. Using loops is usually a bit more efficient, but the difference is negligible unless you are dealing with a very very large data set. In everyday code, it's better to write clean code that is easy to read and understand.

Most of you probably know what high order array methods are, but I just want to quickly go over some of the common ones before we jump into the challenges.

A high order array method is a method that takes in a function as an argument or returns a function as a result. The most common high order array methods are `map`, `filter`, and `reduce`. There are a few others, but these are the ones that I use the most. They allow us to iterate over an array and perform some sort of operation on each element.

Let's use the following array for our examples:

Hầu hết các thử thách mà chúng ta đã làm cho đến nay đã sử dụng vòng lặp. Vòng lặp là một trong những nền tảng quan trọng nhất trong khoa học máy tính nói chung. Quan trọng là bạn biết cách sử dụng chúng. Cho các thử thách tiếp theo, tôi muốn sử dụng một số phương thức high order array trong JavaScript, chẳng hạn như `map` và `filter`. Những phương thức này rất hữu ích và có thể giúp bạn viết mã sạch hơn. Sử dụng vòng lặp thường hiệu quả hơn một chút, nhưng sự khác biệt là không đáng kể trừ khi bạn đang làm việc với một tập dữ liệu rất lớn. Trong mã hàng ngày, việc viết mã sạch dễ đọc và hiểu hơn.

Hầu hết các bạn có lẽ đã biết các phương thức high order array là gì, nhưng tôi chỉ muốn nhanh chóng đi qua một số phương thức phổ biến trước khi chúng ta bắt đầu vào các thử thách.

Một phương thức high order array là một phương thức nhận một hàm làm đối số hoặc trả về một hàm làm kết quả. Các phương thức mảng cao cấp phổ biến nhất là `map`, `filter` và `reduce`. Có một vài phương thức khác, nhưng đây là những phương thức tôi sử dụng nhiều nhất. Chúng cho phép chúng ta lặp qua một mảng và thực hiện một số thao tác trên mỗi phần tử.

Hãy sử dụng mảng sau cho các ví dụ của chúng ta:

```js
const numbers = [1, 2, 3, 4, 5]
```

## Map

The `map` method takes in a function as an argument and returns a new array with the result of calling the function on each element in the array. Here is an example:

Phương thức `map` nhận một hàm làm đối số và trả về một mảng mới với kết quả của việc gọi hàm trên mỗi phần tử trong mảng. Dưới đây là một ví dụ:

```js
const doubledNumbers = numbers.map((num) => {
  return num * 2
})

console.log(doubledNumbers)

// Output: [2, 4, 6, 8, 10]
```

In the example above, we have an array of numbers. We call the `map` method on the array and pass in a function as an argument. The function takes in a number as an argument and returns the number multiplied by 2. The `map` method then returns a new array with the result of calling the function on each element in the array.

In this example I multiplied each number by 2, but you can do whatever you want in the function.

Trong ví dụ trên, chúng ta có một mảng các số. Chúng ta gọi phương thức `map` trên mảng và truyền một hàm làm đối số. Hàm nhận một số làm đối số và trả về số nhân với 2. Phương thức `map` sau đó trả về một mảng mới với kết quả của việc gọi hàm trên mỗi phần tử trong mảng.

Trong ví dụ này, tôi nhân mỗi số lên 2, nhưng bạn có thể làm bất kỳ điều gì bạn muốn trong hàm.

## Filter

The `filter` method takes in a function as an argument and returns a new array with all the elements that pass the test implemented by the function. Here is an example:

Phương thức `filter` nhận một hàm làm đối số và trả về một mảng mới với tất cả các phần tử vượt qua kiểm tra được thực hiện bởi hàm. Dưới đây là một ví dụ:

```js
const numbers = [1, 2, 3, 4, 5]

const evenNumbers = numbers.filter((num) => {
  return num % 2 === 0
})

console.log(evenNumbers)

// Output: [2, 4]
```

In the example above, we have an array of numbers. We call the `filter` method on the array and pass in a function as an argument. The function takes in a number as an argument and returns `true` if the number is even and `false` if the number is odd. The `filter` method then returns a new array with all the elements that pass the test implemented by the function.

Again, in this example I filtered out all the odd numbers, but you can do whatever you want in the function.

Trong ví dụ trên, chúng ta có một mảng các số. Chúng ta gọi phương thức `filter` trên mảng và truyền một hàm làm đối số. Hàm nhận một số làm đối số và trả về `true` nếu số là chẵn và `false` nếu số là lẻ. Phương thức `filter` sau đó trả về một mảng mới với tất cả các phần tử vượt qua kiểm tra được thực hiện bởi hàm.

Một lần nữa, trong ví dụ này, tôi lọc ra tất cả các số lẻ, nhưng bạn có thể làm bất kỳ điều gì bạn muốn trong hàm.

## Reduce

The `reduce` method takes in a function as an argument and returns a single value. Here is an example:

Phương thức `reduce` nhận một hàm làm đối số và trả về một giá trị duy nhất. Dưới đây là một ví dụ:

```js
const numbers = [1, 2, 3, 4, 5]

const sum = numbers.reduce((total, num) => {
  return total + num
}, 0)

console.log(sum)

// Output: 15
```

In the example above, we have an array of numbers. We call the `reduce` method on the array and pass in a function as an argument. The function takes in two arguments, `total` and `num`. The `total` argument is the value that we are accumulating. The `num` argument is the current value in the array. The function returns the sum of the `total` and `num`. The `reduce` method then returns a single value.

Trong ví dụ trên, chúng ta có một mảng các số. Chúng ta gọi phương thức `reduce` trên mảng và truyền một hàm làm đối số. Hàm nhận hai đối số, `total` và `num`. Đối số `total` là giá trị chúng ta đang tích lũy. Đối số `num` là giá trị hiện tại trong mảng. Hàm trả về tổng của `total` và `num`. Phương thức `reduce` sau đó trả về một giá trị duy nhất.

## forEach

The `forEach` method takes in a function as an argument and executes the function on each element in the array. Here is an example:

Phương thức `forEach` nhận một hàm làm đối số và thực thi hàm trên mỗi phần tử trong mảng. Dưới đây là một ví dụ:

```js
const numbers = [1, 2, 3, 4, 5]

numbers.forEach((num) => {
  console.log(num)
})

// Output: 1 2 3 4 5
```

In the example above, we have an array of numbers. We call the `forEach` method on the array and pass in a function as an argument. The function takes in a number as an argument and logs the number to the console. The `forEach` method then executes the function on each element in the array.

Here are some other high order array methods that you might see:

- `some` - returns `true` if at least one element in the array passes the test implemented by the function
- `every` - returns `true` if all elements in the array pass the test implemented by the function
- `find` - returns the value of the first element in the array that passes the test implemented by the function
- `findIndex` - returns the index of the first element in the array that passes the test implemented by the function
- `sort` - sorts the elements in the array
- `reverse` - reverses the order of the elements in the array
- `includes` - returns `true` if the array contains a certain element

Trong ví dụ trên, chúng ta có một mảng các số. Chúng ta gọi phương thức `forEach` trên mảng và truyền một hàm làm đối số. Hàm nhận một số làm đối số và ghi số ra console. Phương thức `forEach` sau đó thực thi hàm trên mỗi phần tử trong mảng.

Dưới đây là một số phương thức mảng cao cấp khác mà bạn có thể gặp:

- `some` - trả về `true` nếu ít nhất một phần tử trong mảng vượt qua kiểm tra được thực hiện bởi hàm
- `every` - trả về `true` nếu tất cả các phần tử trong mảng vượt qua kiểm tra được thực hiện bởi hàm
- `find` - trả về giá trị của phần tử đầu tiên trong mảng vượt qua kiểm tra được thực hiện bởi hàm
- `findIndex` - trả về chỉ mục của phần tử đầu tiên trong mảng vượt qua kiểm tra được thực hiện bởi hàm
- `sort` - sắp xếp các phần tử trong mảng
- `reverse` - đảo ngược thứ tự các phần tử trong mảng
- `includes` - trả về `true` nếu mảng chứa một phần tử nhất định
