/* 
Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:
- N is an integer within the range [1..100,000];
- each element of array A is an integer within the range [−1,000,000..1,000,000].
*/

/* My solution: only passed 5 out of 12 tests 
score: https://app.codility.com/demo/results/demoUQ2A4N-8SC/
*/ 
function solution(A) {
  let result = 1
  // get rid of duplicates and sort the nums
  let uniqArr = [...new Set(A)].sort((a, b) => a - b)
  
  let max = Math.max(...uniqArr)
  
  if (max >= 1) {
      if (max === 1) {
          return 2
      }
      
      for (let i = 1; i < uniqArr.length; i++) {
          if ((uniqArr[i] - uniqArr[i - 1]) !== 1) {
              result = uniqArr[i] - 1
          } else {
              result = (max + 1)
          }
      }

  }
  
  return result
}

/* Solution that passed 100% 
via stackOverflow: https://stackoverflow.com/questions/51719848/find-the-smallest-positive-integer-that-does-not-occur-in-a-given-sequence
*/
function solutionScore(A) {
  // filter out negative values, and sort the numbers
  A = A.filter(num => num >= 1).sort((a, b) => a - b)
  let result = 1
  for (let i = 0; i < A.length; i++) {
    // if the value is bigger than 1, 1 is the smallest, so no need to continue
    if (result < A[i]) {
      return result
    }
    // reassign result to an integer bigger than A[i] by 1
    result = A[i] + 1
  }

  return result
}