/**
 * Observations/Assumption:
 * - input: array of arrays, all inner pairs, values are all integers
 *  - inside each pair, first value is always smaller or equal to second
 * - output: return array of arrays, all inner pairs, there are no overlaps
 * - [[1, 5], [2, 6]] -> [[1, 6]]
 * - [[1, 9], [2, 8]] -> [[1, 9]]
 * -
 *
 * [[1,3],[8,10],[4,6],[15,18]]
 *
 * [[1,3],[4,6],[8,10],[15,18]]
 *
 * - condition for merging:
 *  - overlaps
 *  - adjacent
 *
 * Plan:
 * - sort the intervals by first value in the pairs
 * - initiate results array, add in first pair
 * - loop over each pair in intervals:
 *  - mostRecentPair -> [prevStart, prevEnd]
 *  - if prevEnd >= currStart, merge:
 *    - modify mostRecentPair value where [prevStart, max(prevend,currEnd)]
 *  - else, push pair onto results array
 * - return results array
 *
 */

/**
 * input: [2,5]
 * input2: [3,6]
 * [[2,5], [8,10], [10,15], [1,2] ]
 * input 3: [1,2]
 * list: []
 * merge(input) -> [[2,5]]
 * merge(input) -> [[2,5],[3,6]] -> [2,6]
 * merge(input) -> [[2,6],[1,2]] -> [1,6]
 *
 *
 * - if prevEnd >= currStart, merge:
 *   -
 *   - modify mostRecentPair value where [min(prevStart, currStart), max(prevend,currEnd)]
 *
 */

// How do you handle a continuous stream of intervals and print out results i.e. you can not use sort function, and the comparison of intervals with other intervals is impossible.
// We want to merge continuous interval i.e. [1,3],[4,5] should give output of [1,5]
// Is there a way to not sort the input array and produce an optimized result where 0 <= start < end < 1000

const _ = require("lodash");

function merge(intervals) {
  if (intervals.length < 1) return intervals;
  intervals.sort((a, b) => a[0] - b[0]); // O(n log n)
  const results = [intervals[0]];
  // console.log('sorted: ', intervals)
  for (let i = 1; i < intervals.length; i++) {
    // O(n)
    const pair = intervals[i];
    const mostRecentPair = results[results.length - 1];
    if (mostRecentPair[1] >= pair[0] || pair[0] - 1 === mostRecentPair[1]) {
      mostRecentPair[1] = Math.max(mostRecentPair[1], pair[1]); //O(1)
    } else {
      results.push(pair);
    }
  }

  return results;
}

// O(n log n)

const intervals = [
  [1, 3],
  [8, 10],
  [4, 6],
  [15, 18],
];
const intervalsOvelap = [
  [1, 5],
  [2, 6],
];
// [ [ 1, 3 ], [ 4, 6 ], [ 8, 10 ], [ 15, 18 ]
// [ [ 1, 6 ], [ 8, 10 ], [ 15, 18 ] ]

console.log(merge([]));
