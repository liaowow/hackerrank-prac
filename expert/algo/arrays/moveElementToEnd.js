// O(n) time, O(1) space
function moveElementToEnd(arr, toMove) {
  let i = 0
	let j = arr.length - 1
	while (i < j) {
		while (i < j && arr[j] === toMove) j--;
		if (arr[i] === toMove) {
			const temp = arr[j]
			arr[j] = arr[i]
			arr[i] = temp
		}
		i++;
	}
	return arr;
}