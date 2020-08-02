function mutateTheArray(n, a) {
  let newArr = []
  
  for (let i = 0; i < n; i++) {
      let newNum = a[i - 1] + a[i] + a[i + 1]
      if (i === 0) {
          newNum = 0 + a[0] + a[1]
      }

      if (i === (n - 1)) {
        newNum = a[i - 1] + a[i]
      }
      newArr.push(newNum)
  }
  
  return newArr
}

// mutateTheArray(5, [4, 0, 1, -2, 3])

function countTinyPairs(a, b, k) {
  let arr = []
  for (let i = 0; i < a.length; i++) {
      let stringifyA = a[i].toString()
      let stringifyB = ''

      if (i === 0) {
        stringifyB = b[a.length - 1].toString()
      } else {
        stringifyB = b[a.length - i - 1].toString()
      }
      let pair = Number(stringifyA + stringifyB)

      if (pair < k) {
          arr.push(pair)
      }
  }

  arr = [...new Set(arr)]

  return arr.length
}

// countTinyPairs([1, 2, 3], [1, 2, 3], 31)



function meanGroups(a) {
  let result = []
  // let innerResult = []
  let meanArr = []
  
  for (let i = 0; i < a.length; i++) {
      let innerArr = a[i]
      let currSum = 0
      for (let j = 0; j < innerArr.length; j++) {
          currSum += innerArr[j]
      }
      meanArr.push(currSum / innerArr.length)
  }

  for (let i = 0; i < meanArr.length; i++) {
      let idxArr = []
      let map = {}
      if (!idxArr.includes(meanArr[i])) {
          idxArr.push([i])
      }
      console.log(idxArr)
      

  }
  
  return result
}

meanGroups([[3, 3, 4, 2],
   [4, 4],
   [4, 0, 3, 3],
   [2, 3],
   [3, 3, 3]])