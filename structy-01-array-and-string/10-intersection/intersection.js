/**
 * @param {*} a - array of integers, does not contain duplicates
 * @param {*} b - array of integers, does not contain duplicates
 * @returns {array} - array of integers that are present in both a and b
 */
const intersection = (a, b) => {
  const setA = new Set(a)
  const setB = new Set(b)

  return [...setA.intersection(setB)]
}

const a = []
const b = []
const result = []
for (let i = 0; i < 50000; i += 1) {
  a.push(i)
  b.push(i)
  result.push(i)
}
console.log(intersection(a, b))

module.exports = {
  intersection,
}
