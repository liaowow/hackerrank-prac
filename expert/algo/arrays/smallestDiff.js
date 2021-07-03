// O(n log(n) + m log(m)) time, O(1) space
function smallestDifference(arrOne, arrTwo) {
	arrOne.sort((a, b) => a - b)
	arrTwo.sort((a, b) => a - b)
	let x = 0
	let y = 0
	let smallest = Infinity;
	let currDiff = Infinity;
	let result = []
	while (x < arrOne.length && y < arrTwo.length) {
		currDiff = Math.abs(arrOne[x] - arrTwo[y])
		if (currDiff < smallest) {
			smallest = currDiff
			result = [arrOne[x], arrTwo[y]]
		}		
		if (currDiff === 0) {
			return [arrOne[x], arrTwo[y]]
		} else if (arrOne[x] < arrTwo[y]) {
			x++
		} else {
			y++
		}
	}
	return result;
}