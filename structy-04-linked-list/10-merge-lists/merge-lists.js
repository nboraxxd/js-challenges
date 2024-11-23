class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

// iterative approach
const mergeLists = (head1, head2) => {
  let prev1 = null
  let current1 = head1
  let current2 = head2

  while (current1 && current2) {
    if (current1.val > current2.val) {
      // Khi prev1 là null mà chạy được vào if này,
      // nghĩa là node đầu của ds2 nhỏ hơn node đầu của ds1
      // nên node đầu của ds2 sẽ trở thành node đầu của ds1
      // vì chúng ta đang mutate trên head1
      // cmt dòng này vì sẽ check điều kiện ở return cuối function
      // if (!prev1) head1 = current2

      // Nếu prev1 có giá trị (không null), tức là không phải lần lặp đầu tiên
      // thì nối next của prev1 với current2
      if (prev1) prev1.next = current2

      // Chuyển prev1 thành current2
      // để chuyển current2 thành node trước đó của current1
      // vì current2 khi này nhỏ hơn current1
      prev1 = current2

      // move current2 sang node tiếp theo của ds2
      // để tránh bị ghi đè khi thay đổi prev1
      // vì khi này prev1 và current2 đang trỏ vào cùng 1 node (cùng tham chiếu)
      current2 = current2.next

      // Nối node của ds2 vào ds1
      prev1.next = current1
    } else {
      prev1 = current1
      current1 = current1.next
    }
  }

  // Khi ds2 kết thúc mà ds1 vẫn còn, thì các node còn lại của ds1 đã có sẵn
  // Nên không cần phải nối chúng vào cuối ds1 làm gì hết
  // Còn nếu ds1 kết thúc mà ds2 vẫn còn, thì phải nối các node còn lại của ds2 vào prev1
  if (!current1) prev1.next = current2

  return head1.val < head2.val ? head1 : head2
}

// recursive approach
const mergeLists2 = (head1, head2) => {
  recursiveMerge(head1, head2, null)
  return head1.val < head2.val ? head1 : head2
}

/**
 *
 * @param {Node} current1 current node of list 1
 * @param {Node} current2 current node of list 2
 * @param {Node | null} prev1 previous node of list 1
 * @returns {null | void}
 */
const recursiveMerge = (current1, current2, prev1) => {
  if (!current1) {
    prev1.next = current2
    return null
  }
  if (!current2) return null

  if (current1.val > current2.val) {
    if (prev1) prev1.next = current2

    const newCurrent2 = current2.next
    current2.next = current1
    recursiveMerge(current1, newCurrent2, current2)
  } else {
    recursiveMerge(current1.next, current2, current1)
  }
}

module.exports = {
  mergeLists,
  mergeLists2,
  Node,
}
