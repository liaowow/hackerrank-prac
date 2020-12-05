// O(n) time, O(n) space
function runLengthEncoding(str) {
  const output = []
  let length = 1

  for (let i = 1; i < str.length; i++) {
    if (str[i] !== str[i - 1] || length === 9) {
      output.push(length)
      output.push(str[i - 1])
      length = 0
    }
    length++
  }

  // finally, add the last run length
  output.push(length)
  output.push(str[str.length - 1])

  return output.join('')
}