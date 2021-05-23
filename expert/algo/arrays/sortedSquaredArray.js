/* iterative approach */
function sortedSquaredArray(arr) {
	let result = []
	for (let i = 0; i < arr.length; i++) {
		result.push(arr[i] * arr[i])
	}
  return result.sort((a, b) => a - b)
}

/* two-pointer technique */
function sortedSquaredArray(arr) {
	const result = new Array(arr.length).fill(0)
  let smallerIdx = 0;
  let biggerIdx = arr.length - 1
	for (let i = arr.length - 1; i >= 0; i--) {
    const smaller = arr[smallerIdx]
    const bigger = arr[biggerIdx]

    if (Math.abs(smaller) > Math.abs(bigger)) {
      result[i] = smaller * smaller
      smallerIdx++
    } else {
      result[i] = bigger * bigger
      biggerIdx--
    }
	}
  return result
}