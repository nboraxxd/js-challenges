# Challenge: Transpose Matrix

You're given a 2D array of integers `matrix`. Write a function that returns the transpose of the matrix.

The transpose of a matrix is a flipped version of the original matrix across its main diagonal (which runs from top-left to bottom-right); it switches the row and column indices of the original matrix.

You can assume the input matrix always has at least 1 value; however its width and height are not necessarily the same.

## Sample Input

```js
matrix1 = [[1, 2]]

matrix2 = [
  [1, 2],
  [3, 4],
  [5, 6],
]

matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]
```

## Sample Output

```js
output1 = [[1], [2]]

output2 = [
  [1, 3, 5],
  [2, 4, 6],
]

output3 = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
]
```

## Optimal Space & Time Complexity

O(w \* h) time | O(w \* h) space - where w is the width of the matrix and h is the height

## Hints

<details>

<summary>Hints 1</summary>
  
The row and column indices of each entry in the matrix should be flipped. For example, the value at `matrix[1][2]` will be at `matrix[2][1]` in the transpose of the matrix.

</details>

<details>

<summary>Hints 2</summary>

Each column in the matrix should be become a row in the transpose of the matrix. Each row in the matrix should become a column in the transpose of the matrix.

</details>

<details>

<summary>Hints 3</summary>
  
Try iterating one column at a time, and with each column, create a row of the values to add to the transpose of the matrix.

</details>
