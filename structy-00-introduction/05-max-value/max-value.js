/**
 * @param {*} nums an array of numbers
 * @returns {number} the maximum value in the array
 */
const maxValue = (nums) => {
  let max = nums[0]

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) max = nums[i]
  }

  return max
}

module.exports = {
  maxValue,
}
