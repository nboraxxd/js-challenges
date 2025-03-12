const { pairSum } = require('./pair-sum')

test('Test case #0', () => {
  const result = pairSum([3, 2, 5, 4, 1], 8)

  expect(result.sort()).toEqual([0, 2])
})

test('Test case #1', () => {
  const result = pairSum([4, 2, 7, 9, 5, 2, 1], 5)

  expect(result.sort()).toEqual([0, 6])
})

test('Test case #2', () => {
  const result = pairSum([4, 7, 9, 2, 5, 1], 3)

  expect(result.sort()).toEqual([3, 5])
})

test('Test case #3', () => {
  const result = pairSum([1, 6, 7, 2], 13)

  expect(result.sort()).toEqual([1, 2])
})

test('Test case #4', () => {
  const result = pairSum([9, 9], 18)

  expect(result.sort()).toEqual([0, 1])
})

test('Test case #5', () => {
  const result = pairSum([6, 4, 2, 8], 12)

  expect(result.sort()).toEqual([1, 3])
})

test('Test case #6', () => {
  const numbers = []
  for (let i = 0; i <= 30000; i++) {
    numbers.push(i)
  }

  const startTime = performance.now() // Bắt đầu đo thời gian
  const result = pairSum(numbers, 59999)
  const endTime = performance.now() // Kết thúc đo thời gian

  // Kiểm tra tính đúng đắn
  expect(result.sort()).toEqual([29999, 30000])

  // Kiểm tra thời gian thực thi
  const duration = endTime - startTime
  expect(duration).toBeLessThanOrEqual(100) // Giới hạn 200ms
})
