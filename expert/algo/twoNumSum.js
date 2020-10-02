// Solution#1: O(n^2) time, O(1) space
function twoNumberSum(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]]
      }
    }
  }

  return []
}

// Solution#2: O(n) time, O(n) space
function twoNumberSum(arr, target) {
  let lookup = new Set()
	
	for (let num of arr) {
		if (lookup.has(target - num)) {
			return [num, target - num]
		} else {
			lookup.add(num)
		}
	}
	return []
}
// Solution#3: O(n log(n)) time, O(1) space
function twoNumberSum(arr, target) {
  arr = arr.sort((a, b) => a - b)
	
	let left = 0
	let right = arr.length - 1
	
	while (left < right) {
		let currSum = arr[left] + arr[right]
		
		if (currSum === target) {
			return [arr[left], arr[right]]
		}
		
		if (currSum > target) {
			right--
		}
		
		if (currSum < target)
			left++
	}
	
	return []
}

