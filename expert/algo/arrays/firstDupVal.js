function firstDuplicateValue(arr) {
	let lookup = new Set();
	for (let num of arr) {
		if (lookup.has(num)) {
			return num
		} else {
			lookup.add(num)
		}
	}
  return -1;
}