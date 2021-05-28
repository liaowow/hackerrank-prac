function tournamentWinner(competitions, results) {
	// 1. build initial hash table
	let pointsObj = {}
	for (let i = 0 ; i < competitions.length; i++) {
		if (!pointsObj[competitions[i][0]]) {
			pointsObj[competitions[i][0]] = 0
		}
		if (!pointsObj[competitions[i][1]]) {
			pointsObj[competitions[i][1]] = 0
		}
	}

	// 2. loop over results, collect points
	for (let i = 0; i < results.length; i++) {
		if (results[i] === 0) {
			pointsObj[competitions[i][1]] += 3
		}
		if (results[i] === 1) {
			pointsObj[competitions[i][0]] += 3
		}
	}

	// 3. find largest value in hash table, return its key
	let max = 0
	let maxKey = ''
	for (let team in pointsObj) {
		if (pointsObj[team] > max) {
			max = pointsObj[team]
			maxKey = team
		}
	}
  return maxKey;
}
