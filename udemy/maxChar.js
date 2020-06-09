// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/* MY SOLUTION (passed! yay!) */
function maxChar(str) {
    const map = {}
    let max = 0
    let maxChar = ""
    // create the hash map
    str.split('').forEach(char => {
        if (map[char]) {
            map[char]++
        } else {
            map[char] = 1
        }
    })

    // find maxChar
    for (let key in map) {
        if (map[key] > max) {
            max = map[key]
            maxChar = key
        } 
    }
    return maxChar
}

/* SOLUTION#1 -- similar, but refactored */
function maxChar1(str) {
    const charMap = {}
    let max = 0
    let maxChar = ''

    for (let char of str) {
        charMap[char] = charMap[char]++ || 1
        // charMap[char] ? charMap[char]++ : charMap[char] = 1
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char]
            maxChar = char
        }
    }
    return maxChar
}

/*** Test Case(s) ***/
maxChar('abcdefghijklmnaaaaa')