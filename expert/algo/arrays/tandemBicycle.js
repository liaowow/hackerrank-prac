function tandemBicycle(red, blue, fastest) {
  let total = 0

	const combinedArr = red.concat(blue);
	combinedArr.sort((a, b) => b - a)
	
	if (fastest) {
		for (let i = 0; i < combinedArr.length / 2; i++) {
			total += combinedArr[i]
		}
	} else {
			red.sort((a, b) => a - b)
			blue.sort((a, b) => a - b)
			for (let i = 0; i < red.length; i++) {
				total += Math.max(red[i], blue[i])
			}
		}

	return total;
}