// 1. Create a closure which has one inner function
const outerFunction = () => {
  let value = 0
  function innerFunction() {
    value++
    console.log(value)
  }
  return innerFunction
}

const increment = outerFunction()
increment() // 1
increment() // 2
increment() // 3
