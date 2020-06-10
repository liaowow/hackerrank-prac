// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/* MY SOLUTION -- stuck on step 2b */
function chunk(array, size) {
    // 1. create finalArr
    let finalArr = []
    // 2. iterate over array
    // 2a. create empty subArr
    // 2b. push array[i]~array[size - 1] to subArr
    // 2c. push subArr to finalArr
    // 2d. reassign i to (i + size)
    array.forEach(element => {
        let subArr = []
        // how to push multiple elements onto subArr??
    })
    // 3. return finalArr
    return finalArr
}

/* SOLUTION#1 */
function chunk1(array, size) {
    // create empty array to hold chunks called 'chunked'
    let chunkedArr = []
    // for each element in the unchunked array
        // retrieve the last element in chunked
            // if last element doesn't exist or length is equal to chunk size
                // push a new chunk into 'chunked' with current element
            // else, add current element into chunk
    array.forEach(element => {
        const lastElement = chunkedArr[chunkedArr.length - 1]
        if (!lastElement || lastElement.length === size) {
            chunkedArr.push([element])
        } else {
            lastElement.push(element)
        }
    })
    return chunkedArr
}

/* SOLUTION#2 */
function chunk2(array, size) {
    
}