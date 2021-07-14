// O(n * log(n)) time, O(n) space
function mergeOverlappingIntervals(arr) {
	// sort the array by the starting intervals in the inner array
	sorted = arr.sort((a, b) => a[0] - b[0])
	let result = []
	let currPair = sorted[0] 
	result.push(currPair)
	// iterate through arr, compare with previous using result array
	for (let nextPair of sorted) {
		let [_, currPairEnd] = currPair
		let [nextPairStart, nextPairEnd] = nextPair
		if (currPairEnd >= nextPairStart) {
			currPair[1] = Math.max(currPairEnd, nextPairEnd);
		} else {
			console.log({currPair, nextPair})
			currPair = nextPair
			result.push(currPair)
			console.log({result})
		}
	}
  return result;
}