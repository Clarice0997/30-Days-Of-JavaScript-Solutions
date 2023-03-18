// 1. Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
let text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
let salaries = text.match(/\d+/gi)
let totalAnnualIncome = 0
salaries.forEach(element => {
  if (Number(element) === 10000) {
    totalAnnualIncome += 10000
  } else {
    totalAnnualIncome += Number(element) * 12
  }
})
console.log(totalAnnualIncome)

// 2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
const points = [-12, -4, -3, -1, 0, 4, 8]
const sortedPoints = points.sort((a, b) => a - b)
console.log(Math.abs(sortedPoints[0]))
console.log(Math.abs(sortedPoints[sortedPoints.length - 1]))
const distance = Math.abs(sortedPoints[0]) + Math.abs(sortedPoints[sortedPoints.length - 1])
console.log(`The distance between the two furthest particles is ${distance}.`)

// 3. Write a pattern which identify if a string is a valid JavaScript variable
const is_valid_variable = str => {
  let reg = /(^\d+)|(\b[-]\b)/gi
  return !reg.test(str)
}

console.log(is_valid_variable('first_name'))
console.log(is_valid_variable('first-name'))
console.log(is_valid_variable('1first_name'))
console.log(is_valid_variable('firstname'))
