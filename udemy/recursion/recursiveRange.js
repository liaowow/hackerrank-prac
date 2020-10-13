/* takes in a number and adds up all nums from 0 to the number passed in */
function recursiveRange(num){
  if (num === 0) return 0
  return num + recursiveRange(num - 1)
}