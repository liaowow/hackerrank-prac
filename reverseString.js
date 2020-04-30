// Solution#1 -- using built-in methods
function reverseString1(str) {
    return str.split("").reverse().join("")
}

// Solution#2 -- using for-loop
function reverseString2(str) {
    let result = ""
    
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    
    return result
}

// Solution#3 -- using recursion; not the best solution, will be really slow if the String is very long and the stack size is of major concern
function reverseString3(str) {
    /* substr() method returns the characters in a string beginning at the specified location through the specified number of characters. */
    /* charAt() method returns the specified character from a string. */
    return (str === "") ? "" : reverseString3(str.substr(1) + str.charAt(0))
}

/******* TEST CASE(S) *******/
reverseString1("coronavirus")
reverseString2("world")
reverseString3("pandemic")

// resource: https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/