// O(n^2) time, O(1) space
function selectionSort(arr) {
	let startIdx = 0
	while (startIdx < arr.length - 1) {
		let smallestIdx = startIdx
		for (let i = startIdx + 1; i < arr.length; i++) {
			if (arr[i] < arr[smallestIdx]) {
				smallestIdx = i
			}
		}
		[arr[startIdx], arr[smallestIdx]] = [arr[smallestIdx], arr[startIdx]]
		startIdx++
	}
	return arr;
}