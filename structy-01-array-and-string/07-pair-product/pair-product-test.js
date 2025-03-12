const { pairProduct } = require('./pair-product')

test('Test case #0', () => {
  const result = pairProduct([3, 2, 5, 4, 1], 8)

  expect(result.sort()).toEqual([1, 3])
})

test('Test case #1', () => {
  const result = pairProduct([3, 2, 5, 4, 1], 10)

  expect(result.sort()).toEqual([1, 2])
})

test('Test case #2', () => {
  const result = pairProduct([4, 7, 9, 2, 5, 1], 5)

  expect(result.sort()).toEqual([4, 5])
})

test('Test case #3', () => {
  const result = pairProduct([4, 7, 9, 2, 5, 1], 35)

  expect(result.sort()).toEqual([1, 4])
})

test('Test case #4', () => {
  const result = pairProduct([3, 2, 5, 4, 1], 10)

  expect(result.sort()).toEqual([1, 2])
})

test('Test case #5', () => {
  const result = pairProduct([4, 6, 8, 2], 16)

  expect(result.sort()).toEqual([2, 3])
})

test('Test case #6', () => {
  const numbers = []
  for (let i = 0; i <= 30000; i++) {
    numbers.push(i)
  }

  const startTime = performance.now() // Bắt đầu đo thời gian
  const result = pairProduct(numbers, 899970000)
  const endTime = performance.now() // Kết thúc đo thời gian

  // Kiểm tra tính đúng đắn
  expect(result.sort()).toEqual([29999, 30000])

  // Kiểm tra thời gian thực thi
  const duration = endTime - startTime
  expect(duration).toBeLessThanOrEqual(100) // Giới hạn 200ms
})
