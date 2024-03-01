/**
 * Returns the intersection of two arrays.
 * @param {number[]} arr1 - The first array.
 * @param {number[]} arr2 - The second array.
 * @returns {number[]} - The intersection of the two arrays.
 */
// function arrayIntersection(arr1, arr2) {
//   if (arr1.some(e => e < 1) || arr2.some(e => e < 1)) return []

//   const intersection = []

//   arr1.forEach((e) => {
//     if (arr2.includes(e)) {
//       return intersection.push(e)
//     }
//   })

//   return intersection
// }

// function arrayIntersection(arr1, arr2) {
//   const intersection = []

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] < 1) return []

//     for (let j = 0; j < arr2.length; j++) {
//       if (arr2[j] < 1) return []

//       if (arr1[i] === arr2[j]) intersection.push(arr1[i])
//     }
//   }

//   return intersection
// }

function arrayIntersection(arr1, arr2) {
  const intersection = []

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < 1) return []

    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] < 1) return []

      if (arr1[i] === arr2[j]) intersection.push(arr1[i])
    }
  }

  return intersection
}

module.exports = arrayIntersection
