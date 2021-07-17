/*
Print a single base-10 integer 
that denotes the maximum number of consecutive 1's 
in the binary representation of n.
*/
function binaryOnes(n) {
  const binaryArr = n.toString(2)
  const binaryOnes = binaryArr.split('0')
  const maxOne = Math.max(...binaryOnes)
  console.log(maxOne.toString().length)
}

// binaryOnes(13) => 2
// binaryOnes(5) => 1