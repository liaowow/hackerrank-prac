/* Q1:
Given positive array of ints and a target sum, return the "threshold" value to make all elements > x equal to x such that the sum of all of the elements in the array are equal to the target sum. Note that x can be a floating point value.
ex:
[2, 1, 5] target = 6 --> threshold = 3
(array will be [2, 1, 3] because 2 + 1 + 3 = 6)
[2, 1, 5] target = 4 --> threshold = 1.5
(array will be [1, 1.5, 1.5] because 1 + 1.5 + 1.5 = 4)


val = (target - currentSum) / numOfRemainingElements
array[i + 1]
if (array[i+1] > target - currentSum) return val
*/

/* Q2: 
Given a string, output an array string(s) that are most nested in parenthesis.
ex:
"ab(c(d)e)f" ---> ["d"]
"ab(c(d))e(f(g))" ---> ["d", "g"]
*/

/* Q3:
Simulate a dice roll and check its validity against a certain percent.
For a 6 sided die, rolled 600 times, validate that there is an even distribution within a 10% range, returning "true" or "false"
*/