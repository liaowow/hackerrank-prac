// O(log(n)) time, O(1) space
function binarySearch(arr, target) {
  let left = 0
	let right = arr.length - 1
	
	while (left <= right) {
		const middle = Math.floor((left + right) / 2)
		const targetInt = arr[middle]
		if (targetInt === target) {
			return middle
		} else if (targetInt > target) {
			right = middle - 1
		} else {
			left = middle + 1
		}
	}
	return -1;
}

// O(log(n)) time, O(log(n)) space
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
	if (left > right) return -1;
  
  const middle = (Math.floor((left + right) / 2))
  const targetInt = arr[middle]
  if (target === targetInt) {
    return middle
  } else if (target < targetInt) {
    return binarySearchRecursive(arr, target, left, middle - 1)
  } else {
    return binarySearchRecursive(arr, target, middle + 1, right)
  }
}