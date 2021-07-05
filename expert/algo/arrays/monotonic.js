// O(n) time, O(1) space
function isMonotonic(arr) {
  let isNonIncreasing = true;
	let isNonDecreasing = true;
	
	for (let i = 1; i < arr.length; i++) {
		let curr = arr[i]
		let prev = arr[i - 1]
		if (curr < prev) isNonDecreasing = false;
		if (curr > prev) isNonIncreasing = false;
	}
	
	return isNonIncreasing || isNonDecreasing;
}

// more complex solution:
function isMonotonicComplex(arr) {
  if (arr.length <= 2) return true;
	
	let direction = arr[1] - arr[0]
	for (let i = 2; i < arr.length; i++) {
		if (direction === 0) {
			direction = arr[i] - arr[i - 1]
			continue;
		}
		if (isBreakingDirection(direction, arr[i - 1], arr[i])) {
			return false
		}
	}
	return true;
}

function isBreakingDirection(direction, prev, curr) {
	const diff = curr - prev;
	if (direction > 0) return diff < 0;
	return diff > 0;
}