function minNum(samDaily, kellyDaily, difference) {
  // Write your code here
  let result = 1
  let kellySolved = kellyDaily
  let samSolved = samDaily + difference
  
  if (kellySolved > samSolved) {
      return result
  }

  while (kellySolved < samSolved) {        
      kellySolved += difference
      samSolved += samDaily
      result++
  }

  if (kellySolved === samSolved) {
      result++
  }

  return result
}

// minNum(3, 6, 6)

function deviceNamesSystem(devicenames) {
  // Write your code here
  let result = []
  let intToAdd = 1

  for (let i = 0; i < devicenames.length; i++) {
      if (!result.includes(devicenames[i])) {
          result.push(devicenames[i])
      } else if (!devicenames[i].includes('1') && !result.includes(devicenames[i] + '1')) {
          devicenames[i] += '1'
          result.push(devicenames[i])
      } else if (result.includes(devicenames[i] + '1')) {
          intToAdd++
          let stringifyInt = intToAdd.toString()
          devicenames[i] += stringifyInt
          result.push(devicenames[i])
      }
  }

  return result
}

// deviceNamesSystem(["lamp","lamp","tv","lamp"])

function funWithAnagrams(text) {
  // Write your code here
  for (let i = 1; i < text.length; i++) {
      if (!isAnagram(text[i], text[i - 1])) {
          text.splice(i + 1)
      }
  }

  return text.sort()
}

// helper fn#1: check anagram
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
      return false
  }

  return str1.split().sort() === str2.split().sort()
}

funWithAnagrams(['poke', 'pkoe', 'okpe', 'ekop'])