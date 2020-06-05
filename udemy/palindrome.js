// MY SOLUTION
function palindrome0(str) {
    let reversed = str.split('').reverse().join('')
    return reversed === str ? true : false
}

// SOLUTION#1 -- (reversed === str) already returns a boolean value!
function palindrome1(str) {
    let reversed = str.split('').reverse().join('')
    return reversed === str
}

// SOLUTION#2 -- using .every() helper method
function palindrome1(str) {
    return str.split('').every((char, idx) => {
        return char === str[str.length - idx - 1]
    })
}

/*** Test Cases ***/
// palindrome('aba')
// palindrome('1000000001')
// palindrome('Fish hsif')
