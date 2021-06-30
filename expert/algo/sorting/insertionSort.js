// O(n^2) time, O(1) space
function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
		let j = i
		while (j > 0 && arr[j] < arr[j - 1]) {
			swap(j, j - 1, arr)
			j--
		}
	}
	return arr
}

function swap(i, j, arr) {
	const temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}