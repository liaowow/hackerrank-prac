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