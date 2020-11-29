/* my solution */
function findThreeLargestNums(arr) {
  arr.sort((a, b) => a - b)
	const topThree = arr.slice(arr.length - 3)
	return topThree
}

/* algoExpert solution (using 2 helper functions): O(n) time, O(1) space */
function findThreeLargestNumbers(array) {
  const topThree = [null, null, null]
  for (let num of array) {
    updateLargest(topThree, num)
  }
   return topThree
 }
 
 function updateLargest(topThree, num) {
   if (topThree[2] === null || num > topThree[2]) {
     shiftAndUpdate(topThree, num, 2)
   } else if (topThree[1] === null || num > topThree[1]) {
     shiftAndUpdate(topThree, num, 1)
   } else if (topThree[0] === null || num > topThree[0]) {
     shiftAndUpdate(topThree, num, 0)
   }
 }
 
 function shiftAndUpdate(array, num, idx) {
   for (let i = 0; i <= idx; i++) {
     if (i === idx) {
       array[i] = num
     } else {
       array[i] = array[i + 1]
     }
   }
 }

