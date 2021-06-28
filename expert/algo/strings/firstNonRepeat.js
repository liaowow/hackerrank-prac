function firstNonRepeatingCharacter(string) {
	const count = {}
	let found = ''
	for (let char of string) {
		count[char] ? count[char]++ : count[char] = 1
	}
	
	for (let char in count) {
		if (count[char] === 1) {
			found = char
			break;
		}
	}
	
	if (found === '') {
		return -1
	} else {
		return string.indexOf(found);
	}
}

// O(n) time, O(1) space
function firstNonRepeatingCharacterOptimized(string) {
  const count = {}
	for (let char of string) {
		count[char] ? count[char]++ : count[char] = 1
	}
	
	for (let i = 0; i < string.length; i++) {
		const currChar = string[i]
		if (count[currChar] === 1) return i;
	}
	
	return -1;
}