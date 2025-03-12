/**
 * @param {string} s1 - a string
 * @param {string} s2 - a string
 * @returns {boolean} whether the strings are anagrams
 */
const anagrams = (s1, s2) => {
  if (s1.length !== s2.length) return false

  const charCount = {}

  for (const char of s1) {
    charCount[char] = (charCount[char] ?? 0) + 1
  }

  for (const char of s2) {
    if (!charCount[char]) {
      return false
    }
    charCount[char]--
  }

  return true
}

/**
 * Giải thích cách thực hiện:
 * - Đầu tiên, kiểm tra xem độ dài của 2 chuỗi có bằng nhau không, nếu không thì trả về false
 * - Tạo một object charCount để lưu trữ số lần xuất hiện của các ký tự trong chuỗi s1
 * - Duyệt qua từng ký tự trong chuỗi s1, tăng value của key đó trong object charCount lên 1
 * - Duyệt qua từng ký tự trong chuỗi s2
 *  + Dùng if để kiểm tra các trường hợp sau:
 *   * Nếu không tồn tại key đó trong object charCount thì return false
 *   * Nếu charCount[char] = 0 tức số lần xuất hiện của ký tự đó trong chuỗi s2 nhiều hơn trong chuỗi s1, return false
 *  + Giảm value của key đó trong object charCount đi 1
 * - Nếu không có trường hợp nào sai thì return true, tức 2 chuỗi là anagrams
 *
 * Độ phức tạp:
 * - Độ phức tạp thời gian: O(n + m)
 * - Độ phức tạp không gian: O(n + m)
 */

module.exports = {
  anagrams,
}
