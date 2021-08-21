// O(n) time, O(1) space
function maxSubsetSumNoAdjacent(arr) {
	if (!arr.length) return 0;
	if (arr.length === 1) return arr[0];
	let second = arr[0]
	let first = Math.max(arr[0], arr[1])
	for (let i = 2; i < arr.length; i++) {
		const curr = Math.max(first, second + arr[i])
		second = first
		first = curr
	} 
	return first;
}