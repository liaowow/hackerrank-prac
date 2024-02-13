/*
'''
❓ PROMPT
Given a list of words *L* and a maximum password length *maxLength*, generate all valid human-friendly passwords using *L* that are at most *maxLength* long with the following rules. This was inspired by https://xkcd.com/936/

We can generate a human-friendly password by concatenating several words from a list of words (e.g. *correct horse battery staple*). Define a human-friendly password to be a string made up of words such that:

1. The password is comprised of only words from the list
2. Each word is separated by a space between them
3. Each word is used at most once
4. The password is can be at most *maxLength* long when including spaces.

Example(s)
These are valid human-friendly passwords generated from the list:
[apple, bat, cheese, dog]
- apple bat cheese dog
- apple cheese bat
- dog apple
- cheese bat dog

However, there's a maxLength value that can be passed in that limits the possible combinations:
generateAllHumanFriendlyPasswords(["apple", "dog", "zebra"], 10) ==
[
  "apple",
  "dog",
  "zebra",
  "apple dog",
  "dog apple",
  "dog zebra",
  "zebra dog"
]
"zebra apple" and "apple zebra" are skipped because they're 11 chars.

*/
function generateAllHumanFriendlyPasswords(words, maxLength) {
  const result = [];
  const stack = [];
  const counts = {};
  let totalLength = 0;

  function dfs() {
    if (totalLength > maxLength) return;
    if (totalLength > 0 && totalLength <= maxLength) {
      result.push(stack.join(' '));
    }

    for (const word of words) {
      const count = counts[word] || 0;
      if (count === 0) {
        stack.push(word);
        counts[word] = 1;

        const charsAdded = totalLength === 0 ? word.length : word.length + 1;
        totalLength += charsAdded;

        dfs();

        totalLength -= charsAdded;
        counts[word]--;
        stack.pop();
      }
    }
  }

  dfs();
  return result;
}

console.log(JSON.stringify(generateAllHumanFriendlyPasswords(
  [], 0)) === JSON.stringify([]))
console.log(JSON.stringify(generateAllHumanFriendlyPasswords(
  [], 5)) === JSON.stringify([]))
console.log(JSON.stringify(generateAllHumanFriendlyPasswords(
  ["horse"], 0)) === JSON.stringify([]))
console.log(JSON.stringify(generateAllHumanFriendlyPasswords(
  ["horse"], 4)) === JSON.stringify([]))
console.log(JSON.stringify(generateAllHumanFriendlyPasswords(
  ["horse"], 5)) === JSON.stringify(["horse"]))
console.log(JSON.stringify(generateAllHumanFriendlyPasswords(
  ["horse"], 10)) === JSON.stringify(["horse"]))

console.log(JSON.stringify(generateAllHumanFriendlyPasswords(
  ["apple", "dog", "zebra"], 0)) === JSON.stringify([]))
console.log(JSON.stringify(generateAllHumanFriendlyPasswords(
  ["apple", "dog", "zebra"], 1)) === JSON.stringify([]))
console.log(JSON.stringify(generateAllHumanFriendlyPasswords(
  ["apple", "dog", "zebra"], 3)) === JSON.stringify(["dog"]))
console.log(JSON.stringify(generateAllHumanFriendlyPasswords(
  ["apple", "dog", "zebra"], 5)) === JSON.stringify(
  ["apple","dog","zebra"]))
console.log(JSON.stringify(generateAllHumanFriendlyPasswords(
  ["apple", "dog", "zebra"], 8)) === JSON.stringify(
  ["apple","dog","zebra"]))
console.log(JSON.stringify(generateAllHumanFriendlyPasswords(
  ["apple", "dog", "zebra"], 9)) === JSON.stringify(
  ["apple","apple dog","dog","dog apple","dog zebra","zebra","zebra dog"]))
console.log(JSON.stringify(generateAllHumanFriendlyPasswords(
  ["apple", "dog", "zebra"], 10)) === JSON.stringify(
  ["apple","apple dog","dog","dog apple","dog zebra","zebra","zebra dog"]))
console.log(JSON.stringify(generateAllHumanFriendlyPasswords(
  ["apple", "dog", "zebra"], 11)) === JSON.stringify(
  ["apple","apple dog","apple zebra","dog","dog apple","dog zebra","zebra","zebra apple","zebra dog"]))
console.log(JSON.stringify(generateAllHumanFriendlyPasswords(
  ["apple", "dog", "zebra"], 20)) === JSON.stringify(
  ["apple","apple dog","apple dog zebra","apple zebra","apple zebra dog","dog","dog apple","dog apple zebra","dog zebra","dog zebra apple","zebra","zebra apple","zebra apple dog","zebra dog","zebra dog apple"]))