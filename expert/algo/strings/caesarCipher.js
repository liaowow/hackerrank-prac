// O(n) time space
function caesarCipherEncryptor(str, key) {
  key = key % 26
  const result = []

  for (let char of str) {
    result.push(getNewChar(char, key))
  }

  return result.join('')
}

function getNewChar(char, key) {
  const newCharCode = char.charCodeAt() + key
  const remainder = newCharCode % 122
  return newCharCode <= 122 ? String.fromCharCode(newCharCode) : String.fromCharCode(96 + remainder)
}