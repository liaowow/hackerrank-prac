function linkedList(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      console.log(arr.splice(0, 1))
    }
  }

  return arr

  /* brute force approach */
  // let arrOne = []
  // let arrTwo = []
  // for (let i = 0; i < arr.length; i++) {
  //   if (i % 2 !== 0) {
  //     arrOne.push(arr[i])
  //   } else {
  //     arrTwo.push(arr[i])
  //   }
  // }
  // return arrOne.concat(arrTwo)
}

linkedList([2, 1, 3, 5, 6, 4, 7])

function getUnscrambledDigits(scrambledStr) {
  // create a map to store all letters in the input
  // create another map to output the final string
    // only 'z' is present in 'zero'
    // only 'w' is present in 'two'
    // only 'u' is present in 'four'
    // only 'x' is present in 'six'
    // only 'g' is present in 'eight'
    
}

getUnscrambledDigits("owoztneoer")