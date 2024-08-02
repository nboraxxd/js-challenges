# Challenge: Non-Constructible Change

Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum amount of change (the minimum sum of money) that you **cannot** create. The given coins can have any positive integer value and aren't necessarily unique (i.e., you can have multiple coins of the same value).

For example, if you're given `coins = [1, 2, 5]`, the minimum amount of change that you can't create is `4`. If you're given no coins, the minimum amount of change that you can't create is `1`.

Cho một mảng các số nguyên dương đại diện cho giá trị của các đồng xu trong tay bạn, viết một hàm trả về số tiền tối thiểu **không thể** tạo ra (tổng tiền tối thiểu) bằng cách sử dụng các đồng xu đó. Các đồng xu được cho có thể có bất kỳ giá trị nguyên dương nào và không nhất thiết phải là duy nhất (tức là bạn có thể có nhiều đồng xu cùng một giá trị).

Ví dụ, nếu bạn được cho `coins = [1, 2, 5]`, số tiền tối thiểu không thể tạo ra là `4`. Nếu bạn không có đồng xu nào, số tiền tối thiểu không thể tạo ra là `1`.

## Sample Input

```js
coins = [5, 7, 1, 1, 2, 3, 22]
```

## Sample Output

```js
20
```

## Optimal Space & Time Complexity

O(nlogn) time | O(1) space - where n is the number of coins

## Hints

<details>

<summary>Hints 1</summary>
  
One approach to solve this problem is to attempt to create every single amount of change, starting at 1 and going up until you eventually can't create an amount. While this approach works, there is a better one.

Một cách tiếp cận để giải quyết vấn đề này là cố gắng tạo ra mọi số tiền thay đổi, bắt đầu từ 1 và tiếp tục cho đến khi cuối cùng bạn không thể tạo ra một số tiền nào đó. Mặc dù cách tiếp cận này hoạt động, nhưng có một cách tiếp cận tốt hơn.

</details>

<details>

<summary>Hints 2</summary>

Start by sorting the input array. Since you're trying to find the minimum amount of change that you can't create, it makes sense to consider the smallest coins first.

Bắt đầu bằng cách sắp xếp mảng đầu vào. Vì bạn đang cố gắng tìm số tiền tối thiểu không thể tạo ra, nên hợp lý để xem xét các đồng xu nhỏ nhất trước.

</details>

<details>

<summary>Hints 3</summary>
  
To understand the trick to this problem, consider the following example: `coins = [1, 2, 4]`. With this set of coins, we can create `1, 2, 3, 4, 5, 6, 7` cents worth of change. Now, if we were to add a coin of value `9` to this set, we would not be able to create `8` cents. However, if we were to add a coin of value `7`, we would be able to create `8` cents, and we would also be able to create all values of change from `1` to `15`. Why is this the case?

Để hiểu cách giải quyết vấn đề này, hãy xem xét ví dụ sau: `coins = [1, 2, 4]`. Với tập hợp đồng xu này, chúng ta có thể tạo ra `1, 2, 3, 4, 5, 6, 7` cent. Bây giờ, nếu chúng ta thêm một đồng xu có giá trị `9` vào tập hợp này, chúng ta sẽ không thể tạo ra `8` cent. Tuy nhiên, nếu chúng ta thêm một đồng xu có giá trị `7`, chúng ta sẽ có thể tạo ra `8` cent và chúng ta cũng có thể tạo ra tất cả các giá trị tiền thối từ `1` đến `15`. Tại sao lại như vậy?

</details>

<details>

<summary>Hints 4</summary>
  
Create a variable to store the amount of change that you can currently create up to. Sort all of your coins, and loop through them in ascending order. At every iteration, compare the current coin to the amount of change that you can currently create up to. Here are the two scenarios that you'll encounter:

- The coin value is greater than the amount of change that you can currently create plus 1.
- The coin value is smaller than or equal to the amount of change that you can currently create plus 1.

In the first scenario, you simply return the current amount of change that you can create plus 1, because you can't create that amount of change. In the second scenario, you add the value of the coin to the amount of change that you can currently create up to, and you continue iterating through the coins.

The reason for this is that, if you're in the second scenario, you can create all of the values of change that you can currently create plus the value of the coin that you just considered. If you're given coins `[1, 2]`, then you can make `1, 2, 3` cents. So if you add a coin of value `4`, then you can make `4 + 1` cents, `4 + 2` cents, and `4 + 3` cents. Thus, you can make up to `7` cents.

Tạo một biến để lưu số tiền thối mà bạn có thể tạo ra hiện tại. Sắp xếp tất cả các đồng xu của bạn và lặp qua chúng theo thứ tự tăng dần. Tại mỗi lần lặp, so sánh đồng xu hiện tại với số tiền thối mà bạn có thể tạo ra hiện tại. Dưới đây là hai tình huống mà bạn sẽ gặp phải:

- Giá trị đồng xu lớn hơn số tiền thối mà bạn có thể tạo ra cộng thêm 1.
- Giá trị đồng xu nhỏ hơn hoặc bằng số tiền thối mà bạn có thể tạo ra cộng thêm 1.

Trong tình huống thứ nhất, bạn chỉ cần trả về số tiền thối hiện tại cộng thêm 1, vì bạn không thể tạo ra số tiền đó. Trong tình huống thứ hai, bạn thêm giá trị của đồng xu vào số tiền thối mà bạn có thể tạo ra hiện tại và tiếp tục lặp qua các đồng xu.

Lý do cho điều này là, nếu bạn ở trong tình huống thứ hai, bạn có thể tạo ra tất cả các giá trị tiền thối mà bạn có thể tạo ra cộng thêm giá trị của đồng xu mà bạn vừa xem xét. Nếu bạn được cho các đồng xu `[1, 2]`, thì bạn có thể tạo ra `1, 2, 3` cent. Vì vậy, nếu bạn thêm một đồng xu có giá trị `4`, bạn có thể tạo ra `4 + 1` cent, `4 + 2` cent và `4 + 3` cent. Do đó, bạn có thể tạo ra tối đa `7` cent.

</details>
