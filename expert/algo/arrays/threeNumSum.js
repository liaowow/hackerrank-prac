// O(n^2) time, O(n) space
function threeNumSum(arr, target) {
	let result = []
	
	arr.sort((a, b) => a - b)
	for (let i = 0; i < arr.length - 2; i++) {
		const currNum = arr[i]
		let left = i + 1
		let right = arr.length - 1

		while (left < right) {
			const currSum = currNum + arr[left] + arr[right]
			if (currSum === target) {
				result.push([currNum, arr[left], arr[right]])
				left++
				right--
			} 
			if (currSum < target) {
				left++
			} 
			if (currSum > target) {
				right--
			}
		}
	}
	
	return result
}