function soldiers(ranks) {
  // write your code in JavaScript (Node.js 8.9.4)
  let result = 0
  let sortedArr = ranks.sort((a, b) => a - b)
  let map = {}
  
  sortedArr.forEach(num => {
      if (!map[num]) {
          map[num] = num + 1
      }
      
      if (num === map[num - 1] && sortedArr.includes(map[num - 1])) {
          result++
          console.log(result)
      }
      console.log(map)
  })
  
  
  return result
}

soldiers([3, 4, 3, 0, 2, 2, 3, 0, 0])
// soldiers([4, 4, 3, 3, 1, 0])
// soldiers([4, 2, 0])




function table(A, K) {
  let max = 0
  if (A.length <= K) {
      process.stdout.write('+')
      for (let i = 0; i < A.length; i++) {
          // find the max digits
          let stringifyNum = A[i].toString()
          
          if (stringifyNum.length > max) {
              max = stringifyNum.length
          }
      }
      
      for (let j = 0; j < max; j++) {
          process.stdout.write('-')
      }
      process.stdout.write('+\n')
      process.stdout.write('|')
      
      for (let i = 0 ; i < A.length; i++) {
          let stringifyNum = A[i].toString()
          let numSpaces = max - stringifyNum.length
          if (numSpaces > 0) {
              for (let j = 0; j < numSpaces; j++) {
                  process.stdout.write(' ')
              }
          }
          process.stdout.write(stringifyNum + '|')
      }
      process.stdout.write('\n')
      process.stdout.write('+')
      
      for (let j = 0; j < max; j++) {
          process.stdout.write('-')
      }
      process.stdout.write('+')
      
  }
}

// table([4, 35, 80, 123, 12345, 44, 8, 5], 10)
// table([4, 35, 80, 123, 12345, 44, 8, 5, 24, 3], 4)
// table([4, 35, 80, 123, 12345, 44, 8, 5, 24, 3, 22, 35], 4)