function classPhotos(red, blue) {
  red.sort((a, b) => b - a);
	blue.sort((a, b) => b - a);
	
	const colorInFrontRow = red[0] < blue[0] ? 'Red' : 'Blue';
	
	for (let i = 0; i < red.length; i ++) {
		const currRed = red[i]
		const currBlue = blue[i]
		if (colorInFrontRow === 'Red') {
			if (currRed >= currBlue) return false;
		} else if (currBlue >= currRed) return false;
	}
	
  return true;
}