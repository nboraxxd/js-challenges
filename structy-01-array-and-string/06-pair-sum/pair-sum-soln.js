const pairSum = (numbers, targetSum) => {
  const previousNums = {}
  for (let i = 0; i < numbers.length; i += 1) {
    const num = numbers[i]
    const complement = targetSum - num
    if (complement in previousNums) return [i, previousNums[complement]]

    previousNums[num] = i
  }
}

// n = length of array
// Time: O(n)
// Space: O(n)

/**
 * Giải thích cách thực hiện:
 * - Theo như đề bài, chỉ có 1 cặp số duy nhất trong mảng numbers mà tổng của chúng bằng targetSum
 *
 * - Tạo một object previous để lưu trữ các số đã duyệt qua
 *  + Key: item đã duyệt qua trong mảng numbers
 *  + Value: index của number đó trong mảng numbers
 *  + Trường hợp có 2 item trong numbers giống nhau thì cứ lấy index của item sau
 *
 * - Duyệt qua từng item trong mảng numbers
 *  + Tính complement = targetSum - number
 *  + Nếu complement đã có trong object previous thì return [i, previous[complement]]
 *  + Nếu không thì lưu number vào object previous với key là number và value là index của number đó
 */
