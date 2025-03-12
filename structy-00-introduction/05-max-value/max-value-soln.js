const maxValue = (nums) => {
  let maximum = -Infinity

  for (let num of nums) {
    if (num > maximum) maximum = num
  }

  return maximum
}

// n = length of array
// Time: O(n)
// Space: O(1)
