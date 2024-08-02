# Challenge: Tournament Winner

There's an algorithms tournament taking place in which teams of programmers compete against each other to solve algorithmic problems as fast as possible. Teams compete in a round robin, where each team faces off against all other teams. Only two teams compete against each other at a time, and for each competition, one team is designated the home team, while the other team is the away team. In each competition there's always one winner and one loser; there are no ties. A team receives 3 points if it wins and 0 points if it loses. The winner of the tournament is the team that receives the most amount of points.

Given an array of pairs representing the teams that have competed against each other and an array containing the results of each competition, write a function that returns the winner of the tournament. The input arrays are named `competitions` and `results`, respectively. The `competitions` array has elements in the form of `[homeTeam, awayTeam]`, where each team is a string of at most 30 characters representing the name of the team. The `results` array contains information about the winner of each corresponding competition in the `competitions` array. Specifically, `results[i]` denotes the winner of `competitions[i]`, where a `1` in the `results` array means that the home team in the corresponding competition won and a `0` means that the away team won.

It's guaranteed that exactly one team will win the tournament and that each team will compete against all other teams exactly once. It's also guaranteed that the tournament will always have at least two teams.

Có một giải đấu thuật toán đang diễn ra, trong đó các đội lập trình viên cạnh tranh với nhau để giải quyết các vấn đề thuật toán càng nhanh càng tốt. Các đội thi đấu theo hình thức vòng tròn, trong đó mỗi đội đối đầu với tất cả các đội khác. Chỉ có hai đội thi đấu với nhau một lần, và trong mỗi cuộc thi, một đội được chỉ định là đội chủ nhà, trong khi đội kia là đội khách. Trong mỗi cuộc thi, luôn có một người chiến thắng và một người thua; không có trận hòa. Một đội nhận được 3 điểm nếu thắng và 0 điểm nếu thua. Đội chiến thắng giải đấu là đội nhận được số điểm cao nhất.

Cho một mảng các cặp đại diện cho các đội đã thi đấu với nhau và một mảng chứa kết quả của mỗi cuộc thi, hãy viết một hàm trả về đội chiến thắng của giải đấu. Hai mảng đầu vào được đặt tên là `competitions` và `results`. Mảng `competitions` có các phần tử trong dạng `[đội chủ nhà, đội khách]`, trong đó mỗi đội là một chuỗi có tối đa 30 ký tự đại diện cho tên của đội. Mảng `results` chứa thông tin về người chiến thắng của mỗi cuộc thi tương ứng trong mảng `competitions`. Cụ thể, `results[i]` biểu thị người chiến thắng của `competitions[i]`, trong đó `1` trong mảng `results` có nghĩa là đội chủ nhà trong cuộc thi tương ứng đã thắng và `0` có nghĩa là đội khách đã thắng.

Đảm bảo rằng chính xác một đội sẽ giành chiến thắng trong giải đấu và mỗi đội sẽ thi đấu với tất cả các đội khác đúng một lần. Đảm bảo rằng giải đấu luôn có ít nhất hai đội.

## Sample Input

```js
competitions = [
  ['HTML', 'C#'],
  ['C#', 'Python'],
  ['Python', 'HTML'],
]
results = [0, 0, 1]
```

## Sample Output

```js
'Python'
// C# beats HTML, Python Beats C#, and Python Beats HTML.
// HTML - 0 points
// C# -  3 points
// Python -  6 points
```

## Optimal Space & Time Complexity

O(n) time | O(k) space - where n is the number of competitions and k is the number of teams

## Hints

<details>

<summary>Hints 1</summary>
  
Don't overcomplicate this problem. How would you solve it by hand? Consider that approach, and try to translate it into code.

Đừng làm phức tạp bài toán này. Bạn sẽ giải quyết nó như thế nào bằng tay? Hãy xem xét cách tiếp cận đó và cố gắng chuyển nó thành mã.

</details>

<details>

<summary>Hints 2</summary>

Use a hash table to store the total points collected by each team, with the team names as keys in the hash table. Once you know how many points each team has, how can you determine which one is the winner?

Sử dụng một bảng băm để lưu trữ tổng số điểm thu được bởi mỗi đội, với tên đội là các khóa trong bảng băm. Khi bạn biết mỗi đội có bao nhiêu điểm, làm thế nào để xác định đội nào là người chiến thắng?

</details>

<details>

<summary>Hints 3</summary>
  
Loop through all of the competitions, and update the hash table at every iteration. For each competition, consider the name of the winning team; if the name already exists in the hash table, update that entry by adding 3 points to it. If the team name doesn't exist in the hash table, add a new entry in the hash table with the key as the team name and the value as 3 (since the team won its first competition). While looping through all of the competitions, keep track of the team with the highest score, and at the end of the algorithm, return the team with the highest score.

Lặp qua tất cả các cuộc thi và cập nhật bảng băm sau mỗi lần lặp. Đối với mỗi cuộc thi, xem xét tên của đội chiến thắng; nếu tên đã tồn tại trong bảng băm, cập nhật mục đó bằng cách thêm 3 điểm vào nó. Nếu tên đội không tồn tại trong bảng băm, thêm một mục mới trong bảng băm với khóa là tên đội và giá trị là 3 (vì đội đã giành chiến thắng cuộc thi đầu tiên của mình). Trong khi lặp qua tất cả các cuộc thi, theo dõi đội có số điểm cao nhất, và cuối cùng của thuật toán, trả về đội có số điểm cao nhất.

</details>
