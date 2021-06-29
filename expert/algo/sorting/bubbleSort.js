// O(n^2) time, O(1) space
function bubbleSort(arr) {
	let isSorted = false
	let counter = 0
	while (!isSorted) {
		isSorted = true;
		for (let i = 0; i < arr.length - 1 - counter; i++) {
			if (arr[i] > arr[i + 1]) {
				swap(i, i + 1, arr)
				isSorted = false
			}
		}
		counter++
	}
	return arr
}

function swap(i, j, arr) {
	const temp = arr[j]
	arr[j] = arr[i]
	arr[i] = temp
}