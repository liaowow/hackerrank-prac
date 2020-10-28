// O(n) time, O(1) space
function isValidSubsequence(arr, sequence) {
  let currSeqIdx = 0
	
	if (arr.length === 1 && sequence.length === 1 && arr[0] === sequence[0]) return true
	
	for (let i = 0; i < arr.length; i++) {
		if (currSeqIdx === sequence.length) break
		if (arr[i] === sequence[currSeqIdx]) {
			currSeqIdx++
		}
	}
	
	return currSeqIdx === sequence.length
}

// using while loop
function isValidSubsequence(arr, sequence) {
  let arrIdx = 0
  let seqIdx = 0
  while (arrIdx < arr.length && seqIdx < sequence.length) {
    if (arr[arrIdx] === sequence[seqIdx]) seqIdx++
    arrIdx++
  }
  return seqIdx === sequence.length
}