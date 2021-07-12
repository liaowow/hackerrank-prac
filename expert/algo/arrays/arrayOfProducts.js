function arrayOfProducts(arr) {
	let result = []
	for (let i = 0; i < arr.length; i++) {
		// build subarray containing rest of nums
		const before = arr.slice(0, i)
		const after = arr.slice(i + 1)
		const rest = before.concat(after)
		// multiply the rest, replace current with that result
		const multiplied = rest.reduce((accu, curr) => curr * accu)
		result.push(multiplied)
	}
	return result
}

// optimized: O(n) time + space
function arrayOfProductsOptimized(arr) {
	const result = new Array(arr.length).fill(1)

  let leftProduct = 1
  for (let i = 0; i < arr.length; i++) {
    result[i] = leftProduct
    leftProduct *= arr[i];
  }

  let rightProduct = 1
  for (let i = arr.length - 1; i <= 0; i--) {
    result[i] *= rightProduct
    rightProduct *= arr[i]
  }

  return result;
}