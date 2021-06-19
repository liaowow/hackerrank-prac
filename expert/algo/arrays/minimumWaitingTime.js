// greedy algo example
function minimumWaitingTime(queries) {
  let minWaitTime = 0
	queries.sort((a, b) => a - b)
	for (let i = 0; i < queries.length; i++) {
		let currentQ = queries[i]
    let numOfQueriesLeft = queries.length - (i + 1)
    minWaitTime += numOfQueriesLeft * currentQ
	}
	return minWaitTime;
}