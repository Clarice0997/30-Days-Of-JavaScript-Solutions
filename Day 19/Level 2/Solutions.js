// 1. Create a closure which has three inner functions
const calculator = (() => {
  let result = 0
  const add = num => {
    result += num
  }
  const subtract = num => {
    result -= num
  }
  const multiply = num => {
    result *= num
  }
  const divide = num => {
    result /= num
  }
  const getResult = () => {
    return result
  }
  return {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    getResult: getResult
  }
})()

calculator.add(4)
calculator.subtract(2)
calculator.multiply(2)
calculator.divide(2)
console.log(calculator.getResult()) // 2
