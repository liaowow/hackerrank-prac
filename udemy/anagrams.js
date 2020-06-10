// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/* MY SOLUTION -- passed! yay! */
function anagrams(stringA, stringB) {
    // cleanse the strings by (1) getting rid of spaces/punctuations (2) lowercase them
    const str1 = stringA.replace(/[^\w]/g, '').toLowerCase()
    const str2 = stringB.replace(/[^\w]/g, '').toLowerCase()

    // create maps for both strings (key -> char, val -> count)
    const str1Map = {}
    str1.split('').forEach(char => {
        str1Map[char] ? str1Map[char]++ : str1Map[char] = 1
    })

    const str2Map = {}
    str2.split('').forEach(char => {
        str2Map[char] ? str2Map[char]++ : str2Map[char] = 1
    })

    // return true if # of keys is same, each key is identical, and # of counts is same
    if (Object.keys(str1Map).length === Object.keys(str2Map).length) {
        for (let key1 in str1Map) {
            if (str2Map[key1] && (str1Map[key1] === str2Map[key1])) {
                return true
            }
        }
    }

    return false
}

/* SOLUTION#1 -- create helper functions */
function anagrams1(stringA, stringB) {
    const aCharMap = buildCharMap(stringA)
    const bCharMap = buildCharMap(stringB)

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false
    }

    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false
        }
    }
    return true
}

function buildCharMap(str) {
    const charMap = {}
    for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1
    }
    return charMap
}

/* SOLUTION#2 -- using .sort() */
function anagrams2(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB)
}

// helper function
function cleanString(str) {
    return str.replace(/[^w]/g, '').toLowerCase().split('').sort().join('')
}