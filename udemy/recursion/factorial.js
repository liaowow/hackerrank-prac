/* Description:
Accepts a number and returns the factorial of that number
*/
function factorial(num) {
  if (num < 0) return 0
  if (num <= 1) return 1
  return num * factorial(num - 1)
}