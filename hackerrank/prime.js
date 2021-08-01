function processData(input) {
  const [n, ...elements] = input.split("\n")
  elements.forEach((str) => {
    const n = Number(str)
    if (n === 2) {
      console.log("Prime")
      return
    }
    if (n === 1 || n % 2 === 0) {
      console.log("Not prime")
      return
    }
    for (let i = 3; i * i <= n; i += 2) {
      if (n % i === 0) {
        console.log("Not prime")
        return
      }
    }
    console.log("Prime")
  })
}