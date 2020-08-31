/* Description:
Write an algorithm that takes an input string like 'abc', 
and prints out all possible permutations of the string. 

A permutation of a group of elements is one of the n! number possible arrangements 
the elements can take, where n is the number of elements in the range.
*/

/* Example:
const str = "abc"
permutations(str)
//=> ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
*/

function permutations(str) {
    let arr = []
    // base case: less than 2 characters in the string
    if (str.length < 2) {
        arr.push(str)
        return arr
    } 

    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i]
        let remainingStr = str.slice(0, i) + str.slice(i + 1)
        let remainingPermutation = permutations(remainingStr) // save the result of the recursive function

        // if we find a repeating character, don't add it to the arr
        if (str.indexOf(currentChar) !== i) {
            continue
        }
        // concat currentChar with each substring and push to the arr
        remainingPermutation.forEach(subString => arr.push(currentChar + subString))
    }
    return arr
}

function permuteNoRecursion(str) {
    let charsArr = str.split('')
    let results = [charsArr.shift()]

    while (charsArr.length) {
        let currChar = charsArr.shift()
        let tempResults = []

        results.forEach(innerCharArr => {
            let currIdx = 0
            while (currIdx <= innerCharArr.length) {
                let arrCopy = [...innerCharArr]
                arrCopy.splice(currIdx, 0, currChar)
                tempResults.push(arrCopy)
                currIdx++
            }
        })

        results = tempResults
    }

    return results
            .map(subStrArr => subStrArr.join(''))
            .filter((str, idx, arr) => arr.indexOf(str) === idx)
            .sort()
}