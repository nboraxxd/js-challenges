/**
 * @param {string} s string containing uncompressed data
 * @returns {string} string containing compressed data
 *
 * For example, given the string "ccaaat", the function should return "2c3at".
 */
const compress = (s) => {
  const result = []
  let j = 1
  let i = 0

  while (j <= s.length) {
    if (s[j] === s[i]) {
      j++
    } else {
      const count = j - i
      result.push(count > 1 ? `${count}${s[i]}` : s[i])

      i = j
      j++
    }
  }

  return result.join('')
}

console.log(compress('ccaaatsss')) // 2c3at3s

/**
 * Giải thích các bước thực hiện:
 * - Khởi tạo biến result là mảng rỗng
 * - Khởi tạo biến j, biến j sẽ đi trước để phát hiện char[j] khác char[i]
 * - Khởi tạo biến i, biến i sẽ đi sau biến j để đếm số lần xuất hiện của char[i]
 *
 * - Trong khi j <= s.length
 * (phải là <= s.length vì khi j = s.length thì count = j - i mới tính luôn char cuối cùng)
 *  + Nếu s[j] === s[i], không cần điều kiện s[j] !== undefined (tức là khi này index j vượt ra khỏi index của string s) vì khi s[j] là undefined thì s[j] đã khác s[i] rồi
 *   * Tăng j lên 1 để tiếp tục kiểm tra
 *  + Ngược lại, nếu s[j] !== s[i] thì:
 *   * Biến count = j - i là số lần xuất hiện của char[i]
 *   * Nếu count > 1 thì thêm vào result là `${count}${s[i]}` ngược lại thêm vào result là s[i]
 *   * Gán i = j để tiếp tục kiểm tra từ vị trí j, tăng j lên 1 để kiểm tra tiếp
 *
 * - Trả về result.join('') để nối các phần tử trong mảng result thành chuỗi
 */

module.exports = {
  compress,
}
